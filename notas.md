# Módulo 22 - Landing Page
## Notas
### Aula 01 - Inicie o desenvolvimento da landing page
#### **Sobre a aula**
* conhecer os elemetos e as funcionalidades que serão desenvolvidas ao longo do módulo;
* familiarizar-se com ferramentas e configurações para a criação da landing page;
* estruturar o projeto da lading page como criar pastas e arquivos necessários, configurar o ambiente de desenvolvmento e importar recursos essenciais;
* instalar e usar a ferramenta parcel.
#### **Anotações**
Vamos desenvolver mais um projeto para o nosso portfolio, uma landing page para um evento fictício EBAC Tech Talks, o hero possui um timer até o dia do evento (JS).  
Vamos usar a ferramenta PARCEL (parceljs.org), ela se propõe a fazer o setup do nosso projeto com poucas configurações;  
inicializamos o projeto no node com npm init --yes, e vamos instalar o parcel no ambiente de desenvolvimento com npm i --save-dev parcel;  
em seguida vamos criar nossa estrutura de diretórios, primeiro a pasta src que contem um index.html e as pastas scripts (main.js) e styles (main.scss);  
adicionamos um script "dev" ao package.json que vai rodar parcel apontando para todos os arquivos chave da pasta src, ao rodar npm run dev o parcel automaticamente cria a pasta dist (alem da pasta .parcel-cache);  
nesse projeto não utilizaremos o live-server, o parcel já nos fornece um servidor com bot-reload;  
faremos as configurações do parcel através do arquivo sharp.config.json, nesse arquivo, para configurar a compressão de imagens, abrimos chaves e dentro dele configuramos "png" abrindo novas chaves com "quality" : 75;  
ao rodarmos novamente o parcel, notamos que o parcel não fez a compressão das imagens, já que ele trabalha sob-demanda, ou seja, já que nosso arquivo html não utiliza as imagens, ele não se deu ao trabalho de comprimi-las;  
ao adicionarmos a img no body e salvarmos o arquivo ai sim o parcel vai comprimir a imagem e vai apontar para a nova imagem comprimda no arquivo index.html do dist, outro detalhe é que podemos apontar o stylesheet para main.scss que o parcel também vai substituir no arquivo final o apontameto para main.css;  
