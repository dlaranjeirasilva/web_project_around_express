
# Back-end Nodes.js com uso de Express

Projeto 

## Objetivo

O objetivo deste projeto é desenvolver uma API back-end em Node.js com uso do Express. A API deverá implementar as seguintes rotas:

* GET /users - Retorna uma lista de todos os usuários
* GET /cards - Retorna uma lista de todos os cards
* GET /users/:id - Retorna um usuário específico pelo ID
## Documentação da API

#### Retorna todos os itens

```http
  GET /users
```

| Parâmetro   | Descrição                           |
| :---------- | :---------------------------------- |
| `N/A` | Retorna uma lista de todos os usuários |

```http
  GET /cards
```

| Parâmetro   | Descrição                           |
| :---------- | :---------------------------------- |
| `N/A` | Retorna uma lista de todos os cards |

#### Retorna um item

```http
  GET /users/:id
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`      | Retorna um usuário específico pelo ID |


## Stacks utilizadas

**Back-end:** Node, Express

## Rodando localmente

* Clone o repositório do GitHub https://github.com/dlaranjeirasilva/web_project_around_express
* Instale as dependências:
```bash
  npm install
```
* Inicie o servidor:
```bash
  npm run dev
```

O servidor será iniciado na porta 3000. Você pode testar as rotas da API usando o Postman ou outro cliente HTTP.



    
## Apêndice

* O projeto requer Node.js 16 ou superior.
* O projeto usa o Express, que é uma estrutura web popular para Node.js.
* O projeto usa arquivos JSON para armazenar dados.
