# Sistema de Gerenciamento de Clientes
## Introdução

Este projeto visa criar uma solução eficiente para o gerenciamento de clientes de uma empresa que realiza limpeza em residências. A plataforma é composta por um backend em Node.js utilizando PostgreSQL como banco de dados, e um frontend em React.

## Parte 1 - Gerenciamento de Clientes
A empresa utiliza as seguintes informações para gerenciar seus clientes: nome, email e telefone. As funcionalidades implementadas na plataforma incluem:

- Listagem de clientes com capacidade de filtragem com base nas informações cadastradas.
- Cadastro de novos clientes.

## Parte 2 - Otimização de Rotas de Atendimento

Além do cadastro e visualização de clientes, a empresa deseja otimizar as rotas de atendimento para maximizar a eficiência na visitação dos clientes. Cada cliente possui coordenadas X e Y em um mapa bidimensional.

O algoritmo para calcular a rota, partindo da empresa (0,0) e passando por todas as localizações dos clientes, está disponível via rota da API. Foi implementado um botão na tela de clientes que, ao ser clicado, abre uma modal mostrando a ordem de visitação dos clientes na rota calculada.


## Configuração e Execução Local

Para rodar o projeto localmente, siga as instruções abaixo:

## Backend (Node.js com PostgreSQL)
- Clone o repositório: git clone https://github.com/MathMendesReis/-Facilita-Jur-dico.git
- certifique-se que está na pasta faciita-juridico
- necessario ter o docker
- Instale as dependências: npm install
- Execute o servidor: npm run start
- o frontend vai rodar na porta http://localhost:5173/
## Banco de Dados - DDL
A estrutura da tabela no banco de dados PostgreSQL é definida pelo seguinte DDL:
```sql 
CREATE TABLE cliente_tb (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(10),
    bairro VARCHAR(100),
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    latitude VARCHAR(50) ,
    longitude VARCHAR(50),
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE TABLE adress_tb (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(10),
    bairro VARCHAR(100),
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    latitude VARCHAR(50) ,
    longitude VARCHAR(50),
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
```

## Observações Gerais
- O código fonte está disponível neste repositório.
- O prazo para realização do teste foi de 3 dias.
- Preferência para consultas em SQL na API, evitando o uso de ORMs.

## Endpoints

### FindAllClientes 
- Retorna todos os usuarios cadastrados;
- path: <strong>http://localhost:3003/cliente</strong>

### FindAdress 
- Retorna o endereço do comercio;
- path: <strong>http://localhost:3003/cliente/adress</strong>

### SortClientsByAdress
- Retorna os clientes ordenados por proximidade da loja;
- path: <strong>http://localhost:3003/cliente/sort'</strong>

### RegisterCliente 
- Adiciona um novo cliente ao sistema;
- methodo : post
- path: <strong>http://localhost:3003/cliente/register'</strong>

### RegisterAdressStore 
- Registra um novo endereço da loja;
- methodo : post
- path: <strong>http://localhost:3003/register/adress'</strong>

### Tecnologias utilizadas

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)
## Conclusão
Este teste foi desenvolvido para avaliar habilidades básicas e lógica na resolução de problemas. As escolhas e abordagens adotadas foram documentadas para melhor compreensão. Em caso de dúvidas, favor entrar em contato para esclarecimentos adicionais.