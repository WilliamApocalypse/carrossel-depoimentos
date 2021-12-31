//Depoimentos
  depoimentos = [
    {
      //Coloque a link/url foto do seu cliente dentro das aspas simples 
      imagem: 'https://cdn.awsli.com.br/404/404485/arquivos/Foto Depoimento Cliente (0).jpg',
      //Coloque o Nome do seu cliente dentro das aspas simples
      nome: 'Heloisa Medina.',
      //Coloque a mensagem do seu cliente dentro das aspas simples
      mensagem: 'Atendimento de qualidade e personalizado, loja sempre preocupada em orientar e tirar todas as dúvidas',
      //Coloque a Cidade do seu cliente dentro das aspas simples
      localidade: 'São Paulo / SP',
      //Coloque a avaliação do seu cliente de 1 a 5 estrelas.
      star:5
    },
    {
      imagem: 'https://cdn.awsli.com.br/404/404485/arquivos/Foto Depoimento Cliente (1).png',
      nome: 'Felipe Garcia.',
      mensagem: 'Produto muito bom, entrega super rápida e atendente muito atenciosa. Empresa top, parabéns!',
      localidade: 'Cascavel / PR',
      star:5
    },
    {
      imagem: 'https://cdn.awsli.com.br/404/404485/arquivos/Foto Depoimento Cliente (2).png',
      nome: 'Caroline Vaz.',
      mensagem: 'Entrega no prazo, embalagem super caprichosa com recadinho lindo para o entregador, sem contar a delicadeza e autenticidade das peças. Apaixonada estou ❤',
      localidade: 'Curitiba / PR',
      star:4
    },
    {
      imagem: 'https://cdn.awsli.com.br/404/404485/arquivos/depoimento-cliente-anonimo.jpg',
      nome: 'Rose Maria',
      mensagem: 'Entrega super rápida, vendedor atencioso, me acompanhou desde o pedido até a entrega.',
      localidade: 'Rio de Janeiro / RJ',
      star:3
    },
    {
      imagem: 'https://cdn.awsli.com.br/404/404485/arquivos/Foto Depoimento Cliente (4).png',
      nome: 'Adalberto Gustavo',
      mensagem: 'Amei o trabalho deles, o atendimento é Excelente e pós vendas excepcional! Super atenciosos e prestativos.',
      localidade: 'Maranhão / MA',
      star:5
    },
    {
      imagem: 'https://cdn.awsli.com.br/404/404485/arquivos/Foto Depoimento Cliente (5).png',
      nome: 'Laura Parente',
      mensagem: 'Super recomendo!! produtos Maravilhosos que deixam a gente  MaraviDiva!! Já sou mega fã!!! Recomendo a todas que gostam de acessórios de qualidade e Beleza!',
      localidade: 'São Paulo / SP',
      star:5
    },
    {
      imagem: 'https://cdn.awsli.com.br/404/404485/arquivos/Foto Depoimento Cliente (6).png',
      nome: 'Rubens Dorneles',
      mensagem: 'Produto de qualidade, envio imediato.',
      localidade: 'Florianópolis / SC',
      star:4
    },
    {
      imagem: 'https://cdn.awsli.com.br/404/404485/arquivos/Foto Depoimento Cliente (7).png',
      nome: 'Carlos Kakugawa',
      mensagem: 'Grato pela atenção e atendimento,fora o carinho ao embalar minha encomenda, com muito carinho e uma linda recomendação na etiqueta',
      localidade: 'Manaus / AM',
      star:5
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  ];
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(depoimentos);

$(document).ready(function () {
  // Depoimentos
  if (
    typeof depoimentos !== 'undefined' &&
    depoimentos !== null &&
    depoimentos.length > 0
  ) {
    var div_depoimentos = '';
    $(depoimentos).each(function (k, depoimento) {
      star = '<i class="icon-star"></i>'.repeat(depoimento.star);
      div_depoimentos +=
        '<div> <div class="depoimento-box"> <div class="depoimento-imagem"> <img src="' +
        depoimento.imagem +
        '" loading="lazy" class="lazyload"/> </div> <div class="depoimento-nome">' +
        depoimento.nome +
        '</div> <div class="depoimento-mensagem">"' +
        depoimento.mensagem +
        '"</div> <div class="depoimento-localidade">' +
        depoimento.localidade +
        '</div><div class="depoimento-star">' +
        star +
        '</div> </div> </div>';
    });

    if ($('.pagina-produto').length) {
              $('<div class="conteiner conteiner-depoimentos"> <div class="listagem"> <div class="titulo-categoria borda-principal cor-principal"><strong>Depoimentos de Clientes</strong> </div> </div> <div class="depoimentos">' + div_depoimentos + '</div></div>').insertAfter('#corpo > div');

    } else if ($('body.pagina-inicial').length) {
              $('<div class="conteiner conteiner-depoimentos"> <div class="listagem"> <div class="titulo-categoria borda-principal cor-principal"><strong>Depoimentos de Clientes</strong> </div> </div> <div class="depoimentos">' + div_depoimentos + '</div></div>').insertAfter('#corpo > div');

    }

    $('.depoimentos').slick({
      autoplay: true,
      lazyLoad: 'ondemand',
      infinite: true,
      slidesToShow: $(window).width() > 768 ? 3 : 1,
      slidesToScroll: $(window).width() > 768 ? 1 : 1,
      arrows: true,
      dots: true,
    });
  }
  setTimeout(function () {
    $('.slick-prev:before').css('color', corTema);
    $('.slick-next:before').css('color', corTema);
  }, 1000);
}); //document ready









===========================


/*Depoimentos*/
.conteiner-depoimentos {
    margin-bottom: 50px;
    margin-top: -50px;
}
.depoimentos {
    margin-bottom: 60px;
}
.depoimento-box {
    box-sizing: border-box;
    padding: 20px;
}
.depoimento-imagem {
    margin-bottom: 12px;
}
.depoimento-imagem img {
    margin: 0 auto;
    max-width: 100px;
    border-radius: 100px;
}
.depoimento-nome {
    padding-bottom: 10px;
    font-weight: 700;
    text-align: center;
}
.depoimento-mensagem {
    padding-bottom: 10px;
    line-height: 1.2;
    text-align: center;
}
.depoimento-localidade {
    text-align: center;
    font-weight: 500;
    text-transform: uppercase;
}
.depoimento-star {
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    margin-top: 4px;
    color: #ffd700;
}
/* Slider */
.fm-slick-slider,
.slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}
.fm-slick-list,
.slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.fm-slick-list:focus,
.slick-list:focus {
    outline: none;
}
.fm-slick-list.dragging,
.slick-list.dragging {
    cursor: pointer;
    cursor: hand;
}
.fm-slick-slider .fm-slick-track,
.fm-slick-slider .fm-slick-list,
.slick-slider .slick-track,
.slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
.fm-slick-track,
.slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.fm-slick-track:before,
.fm-slick-track:after,
.slick-track:before,
.slick-track:after {
    display: table;
    content: "";
}
.fm-slick-track:after,
.slick-track:after {
    clear: both;
}
.fm-slick-loading .fm-slick-track,
.slick-loading .slick-track {
    visibility: hidden;
}
.fm-slick-slide,
.slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
}
[dir="rtl"] .fm-slick-slide,
[dir="rtl"] .slick-slide {
    float: right;
}
.fm-slick-slide img,
.slick-slide img {
    display: block;
}
.fm-slick-slide.fm-slick-loading img,
.slick-slide.slick-loading img {
    display: none;
}
.fm-slick-slide.fm-dragging img,
.slick-slide.dragging img {
    pointer-events: none;
}
.fm-slick-initialized .fm-slick-slide,
.slick-initialized .slick-slide {
    display: block;
}
.fm-slick-loading .fm-slick-slide,
.slick-loading .slick-slide {
    visibility: hidden;
}
.fm-slick-vertical .fm-slick-slide,
.slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
}
.fm-slick-arrow.fm-slick-hidden,
.slick-arrow.slick-hidden {
    display: none;
}
@charset 'UTF-8';
/* Slider */
.fm-slick-loading .fm-slick-list,
.slick-loading .slick-list {
    background: #fff url("https://cdn.awsli.com.br/1595/1595762/arquivos/ajax-loader.gif") center center no-repeat;
}
/* Icons */
@font-face {
    font-family: "slick";
    font-weight: normal;
    font-style: normal;
    src: url("https://cdn.awsli.com.br/1595/1595762/arquivos/slick.eot");
    src: url("https://cdn.awsli.com.br/1595/1595762/arquivos/slick.eot?#iefix") format("embedded-opentype"),
        url("https://cdn.awsli.com.br/1595/1595762/arquivos/slick.woff") format("woff"),
        url("https://cdn.awsli.com.br/1595/1595762/arquivos/slick.ttf") format("truetype"),
        url("https://cdn.awsli.com.br/1595/1595762/arquivos/slick.svg#slick") format("svg");
}
/* Arrows */
.slick-prev,
.slick-next {
    font-size: 0;
    line-height: 0;
    z-index: 100;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
}
.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
}
.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before {
    opacity: 1;
}
.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
    opacity: 0.25;
}
.slick-prev:before,
.slick-next:before {
    font-family: "slick";
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: #525252;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.slick-prev {
  left: 0px;
}
[dir="rtl"] .slick-prev {
  right: -25px;
  left: auto;
}
.slick-prev:before {
  content: "←";
}
[dir="rtl"] .slick-prev:before {
  content: "←";
}

.slick-next {
  right: 0px;
}
[dir="rtl"] .slick-next {
  right: auto;
  left: -25px;
}
.slick-next:before {
  content: "→";
}
[dir="rtl"] .slick-next:before {
  content: "→";
}

/* Dots */
.slick-dotted.slick-slider {
    margin-bottom: 30px;
}
.slick-dots {
    position: absolute;
    bottom: -25px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
}
.slick-dots li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
}
.slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
}
.slick-dots li button:hover,
.slick-dots li button:focus {
    outline: none;
}
.slick-dots li button:hover:before,
.slick-dots li button:focus:before {
    opacity: 1;
}
.slick-dots li button:before {
    font-family: "slick";
    font-size: 10px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: "●";
    text-align: center;
    opacity: 0.25;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
}
/*Fim Depoimentos*/
