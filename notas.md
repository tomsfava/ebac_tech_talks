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
### Aula 02 - Analise o layout
#### **Sobre a aula**
* identificar os elemetos de design presentes no layout da landing page como cores, tipografia, imagens e espaçamento;
* analisar a disposição dos elemetos na página, como a hierarquia de informações, o posiconamento de botões de chamada à ação e a estrutura do cabeçalho e do rodapé;
* criar o "hero" para a landing page;
* conceituar o pseudo-elemento before.
#### **Anotações**
Temos um hero com um logo da EBAC, um texto chamada para o evento no qual existe o contador e uma barra com informações na qual também existe um botão (link) o qual é chamado de Call To Action (CDA);  
abaixo do hero teremos varias sessões para os assuntos tratados no evento, front-end, backend, ux, ui e data-science;  
o fundo dessas sessões é um gradiente de cores, o professor afirma que esse layout é perfeito para trabalharmos responsividade, devido ao posicionamento dos elementos, os que estão lado a lado passarão a estar um acima do outro;  
para começar vamos apagar o que foi feito como exemplo na aula anterior no arquivo index.html e importamos a fonte roboto do google fonts;  
o hero na verdade é o header, o header na verdade é o hero, assim criamos um header com a classe hero, ele vai conter um container, com a logo, a chamada e a barra com o CDA,  assim fazemos o reset no main.scss e estilizamos o container, inclusive para as media queries, em seguida criamos um novo arquivo, _hero.scss e nele vamos estilizar os espaçamentos extraídos do figma, vamos adicionar a imagem de fundo através do background-image;  
em seguida adicionamos os espaçamento do paragrafo, além das propriedades do texto em si; fazemos o mesmo com a logo;  
centralizamos o texto com text-align mas já que o mesmo não está muito legível vamos adicionar um elemento por cima da imagem fazendo um overlay, para isso criamos um pseudo-elemento através do pseudo-seletor ::before, essa abordagem não funcionou, já que o pseudo-elemento requer um conteúdo, adicionamos então a propriedade content com aspas vazias, dessa forma a tela inteira ficou preta, ou seja, o pseudoelemento extrapolou o hero, para resolver isso adicionamos o position: relative ao hero, um elemento com position: relative tem a capacidade de conter um elemento com position:absolute; agora o fundo preto ocupa somente o espaço do hero, ainda falta adicionar a opacidade, outra questão é que esse pseudo-elemento ficou por cima do conteúdo (text e logo), vamos resolver isso adicionado position:relative no container, não na regra geral do container no arquivo main, mas criamos uma nova regra para o container dentro de hero;  
por fim adicionamos opacidade 0.7 ao pseudo-elemento que criamos, finalizando o overlay;  
agora vamos dar uma atenção a responsividade, primeiramente para telas de celular, notamos que o texto está muito grande, reduzmos o font-size para 22 e o line-height para 24, além de diminuir a margem vertical para 24px, o logo nós também reduzimos pela metade e o padding do hero em si nós também reduzimos para 40px na vertical, quanto a telas de tablet o professor achou que o design já estava adequado; 
uma última alteração: vamos remover a regra da cor do texto do arquivo hero e vamos adicioná-la ao reset, já que branco é a cor principal de todos os textos do site;   
até aqui vai o segundo commit;  
### Aula 3 - Construa o cabeçalho
#### **Sobre a aula**
* compreender a estrutura e organização do cabeçalho da landing page;
* dominar o uso de estilos CSS para o cabeçalho de acordo com o design especificado;
* tornar o cabeçalho responsivo.
#### **Anotações**
vamos criar agora a barra com as informações do evento, localização, preço e data, além do link CTA;  
ainda dentro do container, criamos a div .infos-bar, ela vai conter uma ul infos-bar__infos com 3 li infos-bar__infos__item;  
para estilização criamos o novo arquivo _infos_bar.scss, dentro da pasta components dentro de styles, definimos o padding da div e sua cor de fundo, e definimos o display da ul para flex, além de um gap de 40px;  
para os itens definimos o font-size e a cor preta, e a mesma coisa para os negritos dentro dos itens, além de definir o display block para esses;  
agora vamos criar o botão, para sua estilização, dentro de components criamos o arquivo _buttons que vai conter uma regra geral para classe .button com o padding o font-size o font-weight e o text-decoration, e uma regra para o modificador --primary que vai ter a cor branca para o texto e a cor presente no figma para o fundo;  
para alinhar o botão a lista de informações adicionamos display flex também para a div infos-bar, além do justify-content space-between;  
agora vamos para a responsividade, quando selecionamos a tela de celular notamos que o conteúdo extrapola a div o que gera uma barra de rolagem lateral, para corrigir isso vamos estar quebrando os itens em linhas, fazemos isso editando as regras no media query de 640px, voltando o display para block, agora vamos aplicar uma margem entre os itens e colocar o botão para ocupar todo o container, fazemos isso com margem inferior para os itens, e criamos uma nova media query para os botões, definindo seu display para block, isso faz com que o link ocupe uma linha, porem para um button, isso não seria suficiente, seria necessário um width de 100%;  
quanto ao botão, vamos também remover o comportamento de wrap na propriedade white-space com o valor nowrap;  
ao fazermos isso o texto se descentralizou verticalmente, então aplicamos o display flex para o media até 1024px e configuramos align-itens para center;
faltou somente diminuir o espaço entre os itens no caso do tablet, então na media apropriada definimos o gap para a ul (__infos) para 16px;  
o terceiro commit vai até aqui;
### Aula 4 - Insira a imagem de destaque
#### **Sobre a aula**
* inserir imagens responsivas na landing page;
* aplicar gradientes de fundo em elementos HTML usando CSS;
* melhorar a responsividade do layout da lading page.
#### **Anotações**
Vamos agora construir as sessões dos conteúdos do nosso evento, consiste de um título, um paragrafo e uma imagem na direita;  
vamos primeiro criar a seção event no html, ela vai conter um container, dentro desse uma div para o texto, que chamaremos de event__details que vai ter um titulo, event__details__title e um paragrafo, event__details__description, paralelo a essa div teremos a imagem, dessa forma, no arquivo novo _event.scss definimos que .container em .event vai ter display flex, para que a div e a img se organizem lado a lado;  
em seguida vamos ajustar os tamanhos e os espaçamentos de acordo com o figma;  
do figma também extraímos as cores do gradiente, para criar um gradiente usamos a propriedade background-image com o valor linear-gradient que recebe como parâmetro as cores inicial e final, se não receber um valor para o angulo o padrão será um gradiente horizontal;  
por fim adicionamos o media query para editar o display do container de flex para block, o width da imagem de um tamanho fixo para 100% do container e um ajuste nas margens dos detalhes da palestra;  
até aqui vai o quarto commit.
### Aula 05 - Crie a descrição e organização do evento
#### **Sobre a aula**
* compreender a importância da organização do código para o projeto da landing page;
* dominar a criação de variáveis CSS;
* aplicar animações com bibliotecas externas.
#### **Anotações**
antes de criarmos as demais seções vamos organizar um pouco o código, colocando as cores em arquivos de variaveis e fazendo suas importações;  
para aplicar as novas cores aos gradientes subsequentes criamos modificadores para cada seção, dessa forma podemos repetir o código e variar a estilização de acordo com o modificador, também utilizamos o modificador --image-left para a segunda e a quarta seção, invertendo o flex-direction, corrigimos a margem removendo a margin-left de details e substituindo-a pelo gap no .container;  
vamos adicionar agora algumas animações ao nosso projeto, vamos utilizar a biblioteca AOS (Animate On Scroll); no github da mesma encontramos o link css para ser adicionado no head e também o link do script para ser adicionado no body, além disso precisamos ativá-lo em nosso arquivo main.js através do comando AOS.init();  
podemos adicionar animações com o atributo data-aos='fade-right' ou 'fade-left', optamos por adicioná-las ao container e não as seções porque assim o fundo se mantem fixo e só o que desliza é o conteúdo;
o quinto commit vai até aqui.  
### Aula 06 - Insira o botão de compra do ingresso
#### **Sobre a aula**
* compreender o uso da função getTime;
* aplicar a função setInterval e clearInterval;
* criar uma contagem regressiva funconal para a landing page.
#### **Anotações**
Vamos construir agora a contagem regressiva para a data do evento, para isso vamos ter que aprender a lidar com datas no JS, toda linguagem de programação tem um tipo de dado data, com isso podemos fazer manipulações, no caso a diferença entre a data do evento e a data atual;  
no console, para 'pegar' a data atual, criamos uma *var* hoje = new Date(), essa variável vai armazenar a data e a hora na qual a variável é criada; podemos manipular essa variável com a função getFullYear() e com a função getMonth() além de outras funções, entre elas a função getTime() que usaremos nesse projeto; 
aplicando a função getTime() a variável hoje o resultado é um time stamp, um número com 13 digitos, esse número representa a data a partir de alguns cálculos, e ele é único, nele estão embutidos tanto o dia quanto a hora, quanto o ano, quanto os minutos. uma time stamp pode ser subtraída da outra o resultado será em milissegundos;  
conhecendo então o funcionamento da funçao getTime() vamos remover do HTML a contagem ficticia e adicioar em seu lugar um span com o id #contador;  
agora vamos ao main.js e criar uma constante *const* dataDoEvento que vai conter new Date("Dec 12, 2024 19:00:00);  
em seguida vamos recuperar o timeStamp desse momento no futuro que definimos na constante;  
faremos isso criando uma nova *const* timeStampDoEvento = dataDoEvento.getTime();  
agora vamos aprender uma nova função JS que é para trabalhar com intervalos, porque cada segundo que se passar a gente vai ter que verificar quanto tempo falta para chegarmos a data do evento;  
setInterval(function(){
    console.log('olá')
},1000);  
ou seja, a função setInterval recebe dois argumentos, a função a ser executada e o intervalo entre as execuções;  
para interromper a execução precisamos armazenar a função setInterval dentro de uma variável e depois chamar a função clearInterval(nomeDaVariavel);
no contexto do nosso projeto vamos criar a *const* contaAsHoras que vai ser setInterval com a função que contem uma *const* agora = new Date();, uma *const* timeStampAtual = agora.getTime(); e por fim uma *const* tempoAteOEvento = timeStampDoEvento - timeStampAtual; essa função vai rodar num intervalo de 1000 milissegundos;  
ainda dentro da função vamos quebrar a *const* tempoAteOEvento em 4 *const* uma para cada contador: dias, horas, minutos e segundos, essas *const* são compostas do seguinte cálculo: tempoAteOEvento / conversão de milissegundos para dia, arredondado pra baixo, depois o tempoAteOEvento % conversão de milissegundos para dia / conversão de milissegundos para hora, depois tempoAteOEvento % conversão de milissegundos para hora / conversão de milissegundos para minuto, por fim tempoAteOEvento % conversão de milissegundos para minutos / conversão de milissegundos para segundo, todas arredondadas para baixo através do Math.floor();  
definimos também 4 console.log para cada *const*, dessa forma, contaAsHoras retora a cada segundo a quantidade de dias, horas, minutos e segundos faltando para o evento;  
para inserir essas informações no HTML basta adicionar no final da função a sentença: document.getElementById("contador").innerHTML = ``;  
dentro das crases chamamos as *const* através do ${} e voilá;  
também adicionamos um if para o tempoAteOEvento < 0, esse if contem o clearInterval (contaAsHoras) e outro document.innerHTML = "evento expirado";  
completo o desenvolvimento da página vamos preparar os arquivos para a vercel;  
para isso necessitamos apenas configurar o script "build" no package.json com o conteúdo: "parcel build src.index.html", nota-se que o parcel por ser inteligente somente apontando para o arquivo html ele vai trabalhar com todas as dependencias;  
ao rodar npm run build havia um erro já que no package.json "main" apontava para "index.js" que não existia, removemos a propriedade "main" e assim o script rodou normalmente;  


