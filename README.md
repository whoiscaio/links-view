# Desafio Técnico - Devnology

Olá!

Antes de tudo, gostaria de agradecer pela oportunidade de participar desse desafio! Foi um desafio de muito aprendizado, e espero conseguir sintetizar bem as etapas do processo e os aprendizados que acumulei durante elas.

## Links

A aplicação pode ser acessada [aqui](https://link-manager-whoiscaio.vercel.app/links).

[Repositório Frontend](https://github.com/whoiscaio/links-view) (é onde você está agora).

[Repositório Backend](https://github.com/whoiscaio/links-api).

## Tecnologias

Front-end: React.js, Typescript e Styled-Components.

Back-end: Node.js, Typescript e Express.

Banco de Dados: Não relacional (MongoDB).

## Etapas do Desenvolvimento

### Back-end

O backend da aplicação foi a primeira parte a ser desenvolvida, para ela foi utilizado Typescript e Node.js com o framework Express.

Na API existe um total de cinco rotas, uma rota no endereço '/', que serve apenas para avaliar a disponibilidade do serviço, e as demais rotas do CRUD na '/links'.

Algumas das dependências utilizadas nesse backend foram: axios, mongoose, eslint (para padronização de código) e cheerio.

O cheerio foi utilizado para a importação de artigos em forma de links da [devGo](https://devgo.com.br/).

### Front-end

Após a construção da API, foi construído o front-end, para ele foi criada uma interface bem simples, que visava uma abordagem bem direta e de fácil entendimento para as demais funcionalidades.

O frontend foi contruído com Typescript e React.js.

### Banco de Dados

Para o banco de dados, por se tratar de uma organização extremamente simples, para armazenamento exclusivo de links, onde existia apenas uma associação entre título e link, foi utilizado um banco de dados não-relacional, no caso o MongoDB.

### Deploy

A princípio o backend e o MongoDB foram colocados no serviço da AWS EC2, no entanto não foi possível continuar com essa implementação, pois como o frontend foi hospedado na Vercel, e a máquina da AWS EC2 apenas disponibiza domínios http (a vercel utiliza https), o backend precisou ser transferido para um outro local.

Dessa forma, o backend foi publicado na [Cyclic](https://www.cyclic.sh/), para o banco de dados foi utilizado um Cluster remoto no MongoDB Atlas, e o frontend foi hospedado na [Vercel](https://vercel.com/).

## Conclusão

Esse é o meu projeto! Espero que tenham gostado, ainda mediante a alguns imprevistos que ocorreram, tentei dar o meu máximo e produzir um projeto para agradar a vocês.

Foi um projeto de muito aprendizado, pude rever inúmeros conceitos no Front-end e no Back-end, tal como aprofundar os meus conhecimentos na AWS (embora, no final, a mesma não tenha sido utilizada).

## Contato

Telefone: (48) 9 9162-1641

E-mail: caiodev.contato@gmail.com | whoiscaio@protonmail.com

