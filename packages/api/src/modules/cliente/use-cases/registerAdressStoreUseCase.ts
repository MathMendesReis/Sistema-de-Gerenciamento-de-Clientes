import { GeocodingService } from "./GeocodingService";
import { AdressStoreModel } from "../models/adressStore";
import { AdressStoreRegisterRequest } from "../controllers/registerAdressStoreController";
import { AdressStoreDataBase } from "../repositories/registerAdressStore";
import { FindAdressStoreUseCase } from "./getAdressStore";

// Interface que representa a estrutura da resposta que cadastra um endereço da loja
export class RegisterAdressStoreUseCase {
     constructor(
        private DB:AdressStoreDataBase,
        private getAdressStore: FindAdressStoreUseCase
        ) {}


    public register = async (req:AdressStoreRegisterRequest) => {
        const rua = req.rua
        const cidade = req.cidade
        const estado = req.estado

        

        const endereco = `${rua}, ${cidade}, ${estado}`;
        // uso o metodo GeocodingService para pegar a latitude e lontitude do endereço informado
        const coordinates = await GeocodingService.getCoordinatesFromAddress(endereco);

        const addresDB = await this.getAdressStore.findAdressStore()
        

        // verifico se já exite algum endereço cadastrado, caso exista, faço um update ao inves de insert
        if (addresDB.length > 0) {
            const AdressStoreDb = addresDB[0]
            const updateAdress = new AdressStoreModel(
                req.rua,
                req.numero || null,
                req.bairro,
                req.cidade,
                req.estado,
                coordinates?.latitude || '0',
                coordinates?.longitude || '0',
                new Date().toISOString()
                 )
            const update = updateAdress.AdressStoreDB()
            await this.DB.update(update,AdressStoreDb.id);
            return 
        }
        if (addresDB.length === 0) {
            const newAdress = new AdressStoreModel(
                req.rua,
                req.numero || null,
                req.bairro,
                req.cidade,
                req.estado,
                coordinates?.latitude || '0',
                coordinates?.longitude || '0',
                new Date().toISOString()
                 )
                 const AdressStoreDb = newAdress.AdressStoreDB()
                 await this.DB.register(AdressStoreDb);
            return
        }

    }

    
    
}