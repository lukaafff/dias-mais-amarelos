import React from 'react';

import "./Projeto.css";

import QuemSou from '../QuemSou/QuemSou';

import Wallpaper from "../../images/bg.png";
import Thumb from "../../images/thumb.jpg";
import Panfleto from "../../images/panfleto.jpg";
import ImgCarousel1 from "../../images/foto site 1.jpeg";
import ImgCarousel2 from "../../images/foto site 2.jpeg";
import ImgCarousel3 from "../../images/foto site 3.jpeg";

const Projeto = () => {



  const urlVideo = "https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/apresenta%C3%A7%C3%A3o%20resumo.mp4?alt=media&token=bbcaea3a-48ab-48ef-9685-6553e9c122c1"

  return (
    <div className='ProjetoContainer'>
      <div className="bg">
        <img src={Wallpaper} alt="" />
      </div>

      <QuemSou/>

      <div className='box'>
        <h2 id='projeto'>O Projeto</h2>
        <p className='textoResponsivo'>
         Dias Mais Amarelos é um projeto foi criado com base no Setembro Amarelo, visando levar mais informações sobre a saúde mental para as pessoas, tomando como evidência o suicídio, já que ele está entre as dez primeiras causas de mortes no mundo e é a segunda principal causa entre pessoas de 15 a 29 anos.
        </p>
        <p className='textoResponsivo'>
          Laura Garcia, escritora e estudante de psicologia, é quem está a frente desse projeto, sempre estudando e se mantendo informada sobre o assunto para não haver falhas em suas falas.
        </p>
        <p className='textoResponsivo'>
          Esse projeto surgiu com a iniciativa de dois estudantes do ensino médio de uma escola em Goiás, Gustavo Rodrigues e Emilly Santos, que comentaram sobre o livro “Metamorfose — Seja você o protagonista da sua história” com o professor deles e decidiram fazer uma apresentação para a turma sobre o tema, por acharem interessante. Livro esse escrito por Laura.
        </p>
        <p className='textoResponsivo'>
          O suicídio sempre foi visto como um tabu na sociedade por carregar consigo grandes estigmas que precisam ser quebrados, como um dos exemplos: “Falar sobre suicídio causa mais suicídios”. Sim, pode causar, mas se abordado de maneira incorreta, levando a um efeito contágio ao invés da prevenção.
        </p>
        <p className='textoResponsivo'>
          A questão não é prevenir e sim ter a ideia de prevenção, ou seja, se interessar pelo outro, saber dos sinais, saber dos cuidados para não gerar gatilhos ao falar sobre o tema. O pilar da prevenção é a conscientização e a informação.
        </p>
        <p className='textoResponsivo'>
          A prevenção ao suicídio não deve ser feita ou discutida somente em setembro e sim o ano inteiro. Desejo que a partir de agora todos os dias sejam amarelos. 
        </p>
      </div>

      <div className='box'>
        <h2 id='apresentacoes'>Apresentações</h2>
        <h3 className='sub_titulo'>CEOM &#8211; Colégio Estadual Otaviano de Moraes &#10098;Paraúna &#8211; GO&#10099; &#8211; 2022</h3>
        <p className='textoResponsivo'>
          A primeira apresentação do projeto, que ainda não tinha um nome, foi realizado no Colégio Estadual Otaviano de Moraes, juntamente com os alunos Gustavo Rodrigues e Emilly Santos, com o apoio da gestão escolar e pelo professor Fábio.
        </p>
        <p className='textoResponsivo'>
          Foi elaborado uma apresentação sobre o surgimento do Setembro Amarelo, seu significado, a importância de se falar sobre o suicídio para combater estigmas e também foi abordado sobre o Livro “Metamorfose”.
        </p>
        <p className='textoResponsivo'>
          Houve o auxílio de um psicólogo que ajudou em relação a dicas do que poderia se estudar para falar do tema escolhido. Mesmo que o prazo na época tenha sido um pouco curto, conseguimos realizar um bom trabalho.
        </p>
        <p className='textoResponsivo'>
          A crítica feita pelos alunos foram interessantes, principalmente que muitos só se importam com a causa em setembro, o mês da prevenção ao suicídio, mas quando o mês acaba é como se todos se esquecessem que pessoas sofrem todos os dias e consideram tirar a própria vida.
        </p>
        <p className='textoResponsivo'>
          Pela distância entre a autora e o local da apresentação, o melhor caminho para a realização do projeto foi por via de um vídeo gravado, enquanto os alunos se apoiavam no vídeo enviado para darem sequência as falas.
        </p>
        <p className='textoResponsivo'>
          Tudo ocorreu bem, ao final foram distribuídos brindes para os alunos que assistiram e o objetivo foi alcançado.
        </p>
        <br />

        <div className='video-player'>
        <video 
          src={urlVideo}
          controls
          poster={Thumb}
        ></video>
        </div>

        <div className='image-gallery'>
          <img
            src={ImgCarousel1}
            alt='Image 1'
            className='responsive-image'
          />
          <img
            src={ImgCarousel3}
            alt='Image 3'
            className='responsive-image'
          />
          <img
            src={ImgCarousel2}
            alt='Image 2'
            className='responsive-image'
          />
        </div>

      </div>

      <div className='box'>
        <h3 className='sub_titulo'>CEOM &#8211; Colégio Estadual Otaviano de Moraes &#10098;Paraúna &#8211; GO&#10099; &#8211; 2023</h3>
        <p className='textoResponsivo'>
          Nesse ano de 2023 reformularemos o projeto, colocando um tema principal para ser abordado e começamos a fazer isso com antecedência. 
        </p>
        <p className='textoResponsivo'>
          O tema escolhido será: “A pressão psicológica em época de vestibulares”. Com a chegada do Enem e vestibulares para a entrada em uma universidade, muitos alunos se sentem pressionados com a pressão de ter que escolher “o que vão fazer pelo resto da vida”.
        </p>
        <p className='textoResponsivo'>
          Os pontos abordados serão sobre a pressão que muitos estudantes sofrem com a chegada dos vestibulares, pressão essa que pode ser tanto do ambiente, familiar, escolar e até do próprio aluno. 
        </p>
        <p className='textoResponsivo'>
          Dentro desse assunto podemos fazer algumas reflexões, como o fato de entendermos que temos que parar um pouco quando nos sentimos muito sobrecarregados, ter um planejamento de estudo, escolher um curso que o agrade. E mesmo que, futuramente, não seja aquilo com que você se identifique, não tenha medo de mudar, não se sinta atrasado, nunca é tarde para trocar de carreira.
        </p>
        <p className='textoResponsivo'>
          A abordagem do Setembro Amarelo, sua origem e significado também será citado, juntamente com dados da Organização Mundial da Saúde &#10098;OMS&#10099;, tabus e mitos que precisam ser desmistificados e principalmente os cuidados que devemos ter ao falar sobre o suicídio e onde se pode buscar ajuda.
        </p>
        <p className='textoResponsivo'>
          Para finalizar falaremos sobre o livro “Metamorfose — Seja você o protagonista da sua história”, contando sua história e quem é a autora. 
        </p>
        <p className='textoResponsivo'>
          Ao acabar a apresentação será sorteado dois livros em sua nova versão entre os alunos presentes no dia.
        </p>
        <p className='textoResponsivo'>
          Do mesmo modo, que foi realizado no ano de 2022, se manterá o vídeo gravado de Laura Garcia abordando alguns dos pontos citados, com a participação do aluno Gustavo Rodrigues.
        </p>
        <br />

        <div className='image-gallery-2'>
          <img
            src={Panfleto}
            alt='Image 1'
            className='responsive-image'
          />
        </div>

      </div>
     
    </div>
  )
}

export default Projeto