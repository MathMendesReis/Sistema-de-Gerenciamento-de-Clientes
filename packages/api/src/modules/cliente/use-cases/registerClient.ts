import { AxiosResponse } from "axios";
import { ClienteRegisterRequest } from "../controllers/registerCliente";
import { ClienteModel } from "../models/clienteModel";
import { RegisterClienteDB } from "../repositories/register-client-repsitorie";
import { GeocodingService } from "./GeocodingService";
const axios = require('axios');

export class RegisterClientUseCase {
     constructor(private clienteDB:RegisterClienteDB) {}

    public register = async (req:ClienteRegisterRequest) => {
        const rua = req.rua
        const cidade = req.cidade
        const estado = req.estado

        const endereco = `Rua ${rua}, ${cidade}, ${estado}`;
        const coordinates = await GeocodingService.getCoordinatesFromAddress(endereco);

       
        const newCliente = new ClienteModel(
            req.nome,
            req.email,
            req.telefone,
            req.rua,
            req.numero || null,
            req.bairro,
            req.cidade,
            req.estado,
            coordinates?.latitude.substring(1) || null,
            coordinates?.longitude.substring(1) || null,
            new Date().toISOString()
             )

        const clientDB = newCliente.clienteDB()
        const response = await this.clienteDB.register(clientDB);
        return
    }

    
    
}