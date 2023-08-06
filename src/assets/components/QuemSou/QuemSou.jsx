import React from 'react'
import "./QuemSou.css";

import FotoLaura from "../../images/foto laura.jpg"

function QuemSou() {
  return (
    <div className='QuemSouContainer'>
      <div className='box'>
        <h2 id='quemsou'>Quem Sou</h2>
        <div className='image-gallery-3'>
          <img
            src={FotoLaura}
            alt='Image 1'
            className='responsive-image'
          />
        </div>
        <p className='textoResponsivo'>
        Laura Garcia, nascida em 2003, escritora e estudante de psicologia, é uma grande sonhadora, com inúmeras ideias em mente para serem colocadas em prática.
        </p>
        <p className='textoResponsivo'>
        Começou a escrever desde os seus 14 anos e não parou mais. Escrevia pequenos textos para postar em suas redes sociais como forma de se expressar. Pequenos gestos e palavras que recebia das pessoas que liam levaram Laura a escrever e publicar seu primeiro livro em 2020, “Metamorfose — seja você o protagonista da sua história”. Quando surgiu uma oportunidade, ela resolveu publicar esse mesmo livro em uma editora, o que deu muito certo. Hoje disponível como livro físico e e-book.Laura Garcia, nascida em 2003, escritora e estudante de psicologia, é uma grande sonhadora, com inúmeras ideias em mente para serem colocadas em prática.
        </p>
        <br />
        <p className='textoResponsivo'>
          <b>Sinopse: </b> “Neste livro, acompanhamos a jovem Lucy em momentos críticos de sua adolescência: bullying no ambiente escolar, depressão e automutilação. Sentindo-se solitária, Lucy encontra, na escrita, uma maneira de desabafar, fortalecer-se e levar sua mensagem para um público maior. A crueza de seus relatos traz a importância de se conscientizar sobre a urgência do debate a respeito de saúde mental, além de alertar para o perigo silencioso de uma das doenças que mais acometem pessoas ao redor do mundo atualmente.”
        </p>
        <br />
        <p className='textoResponsivo'>
          “Metamorfose não é só um livro, é muito mais que isso. É uma forma de levar a conscientização às pessoas sobre um tema tão importante e espero que esse objetivo seja alcançado.” &#10098;Laura Garcia&#10099;
        </p>
        <br />
        <p className='textoResponsivo'>
          Muitas obras ainda virão e seu objetivo é alcançar o máximo de pessoas que puder com as informações que contém em seus livros e o projeto Dias Mais Amarelos é mais um caminho para a realização desse desejo.
        </p>
      </div>
    </div>
  )
}

export default QuemSou