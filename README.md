### O fluxo do chatbot está no arquivo ```mybotflow.json```

```
├── src
│   └── Api
│       └── client
│           └── apiOctokit.js
│       Flow
│       └── mybotflow.json
├── .gitignore
├── package.json
├── README.md
├── serverless.yml
└── yarn.lock
```
## Observação sobre integração com API do GitHub

O endpoint consumido retorna os repositórios em ordem crescente levando em consideração a data de criação do mesmo, e coincidentemente ou não, os 5 mais antigos são na linguagem C#. Por algum motivo ao fazer um filtro por 'C#' pelo campo ```language``` no response da API, não estava retornando todos os repositórios de fato, e também o repositório "CorrectNumber" apesar de ser em C#, esse campo ```language``` está como null no response da API.</br></br>
Acredito que para esse caso de uso especifico solicitado no desafio essa solução possa atender, mas com certeza é possível adicionar uma tratativa melhor e mais segura/assertiva. 


