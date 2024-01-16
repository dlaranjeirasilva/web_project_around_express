
# Back-end Nodes.js com uso de Express

## Objetivo

O objetivo deste projeto é desenvolver uma API back-end em Node.js com uso do Express. A API deverá implementar as seguintes rotas:

* GET /users - Retorna uma lista de todos os usuários
* GET /cards - Retorna uma lista de todos os cards
* GET /users/:id - Retorna um usuário específico pelo ID
* POST /users - Cria um novo usuário
* POST /cards - Cria um novo card
* DELETE /cards/:id - Deleta um card específico pelo ID
* DELETE /cards/:cardId/likes - Remove o like de um card específico pelo ID
* PUT /cards/:cardId/likes - Adiciona o like em um card específico pelo ID
* PATCH /users/me/:id - Atualiza os dados de um usuário específico pelo ID
* PATCH /users/me/:id/avatar - Atualiza o avatar de um usuário específico pelo ID

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

#### Cria um novo item

```http
  POST /users
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `N/A`      | Cria um novo usuário |

* Corpo da Requisição para criar Usuário

| Campo   | Tipo   | Descrição |
| :------- | :---- | :------- |
| `name`   | `string`   | Nome do usuário |
| `about`   | `string`   | Descrição do usuário |
| `avatar`   | `string`   | Imagem do avatar com http ou https válido |

```http
  POST /cards
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `N/A`      | Cria um novo card |

* Corpo da Requisição para criar Card

| Campo   | Tipo   | Descrição |
| :------- | :---- | :------- |
| `name`   | `string`   | Nome do card |
| `link`   | `string`   | Imagem do card com http ou https válido |

#### Deleta um item

```http
  DELETE /cards/:id
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`      | Deleta um card específico pelo ID |

#### Atualiza um item

```http
  PUT /cards/:cardId/likes
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `cardId`      | Adiciona o like em um card específico pelo ID |

```http
  DELETE /cards/:cardId/likes
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `cardId`      | Remove o like de um card específico pelo ID |

```http
  PATCH /users/me/:id
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`      | Atualiza os dados de um usuário específico pelo ID |

* Corpo da Requisição para atualizar dados do usuário

| Campo   | Tipo   | Descrição |
| :------- | :---- | :------- |
| `name`   | `string`   | Nome do usuário |
| `about`   | `string`   | Descrição do usuário |

```http
  PATCH /users/me/:id/avatar
```

| Parâmetro   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `id`      | Atualiza o avatar de um usuário específico pelo ID |

* Corpo da Requisição para atualizar dados do usuário

| Campo   | Tipo   | Descrição |
| :------- | :---- | :------- |
| `avatar`   | `string`   | Imagem do avatar com http ou https válido |

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
