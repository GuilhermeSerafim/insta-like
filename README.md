# Insta-like — backend de posts

Backend de estudo em Node.js com módulos ES, Express, driver MongoDB e Multer, conforme `package.json`. O repositório contém a API e uma pasta de uploads; não apresenta uma interface completa de rede social.

## Código e rotas

- `src/config/routes/posts.js`: registra `GET /posts`, `POST /posts` e `POST /upload`.
- `src/config/controller/posts.js`: delega listagem e criação de posts ao modelo.
- O upload espera um arquivo no campo multipart `imagem`, com armazenamento local em `uploads/`.

**Upload incompleto:** o controller usa `new(novoPost)` e referencia `fs.renameSync` sem importar `fs`. Esses trechos precisam de correção e testes antes de apresentar o upload como funcional. Esse módulo de rotas não inclui autenticação, atualização ou exclusão de posts.

## Ambiente e limites

O script `dev` executa `node --watch --env-file=.env server.js`. O campo `engines` declara Node >=14; essa declaração, isoladamente, não garante suporte às opções `--watch` e `--env-file`. Antes de iniciar, confira uma versão do Node compatível com ambas as opções, a configuração de ambiente e um banco de desenvolvimento autorizado.

O script `test` está vazio. O campo `license` do manifesto declara `AGPL-version-3.0`.
