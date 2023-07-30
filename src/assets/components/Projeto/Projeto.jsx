import React from 'react'

import Wallpaper from "../../images/bg.png";

const Projeto = () => {
  return (
    <div className='ProjetoContainer'>
      <div className="bg">
        <img src={Wallpaper} alt="" />
      </div>
      <div className='box'>
        <h2 id='projeto'>O Projeto</h2>
        <p className='textoResponsivo'>
          O projeto denominado como Dias Mais Amarelos leva como base a causa do Setembro Amarelo.
        </p>
        <p className='textoResponsivo'>
          Eu, Laura Garcia, como escritora e estudante de psicologia, levo como missão levar mais informações sobre a saúde mental às pessoas, tornando como evidência o suicídio, já que ele está entre as dez primeiras causas de mortes no mundo e é a segunda principal causa entre pessoas de 15 a 29 anos.
        </p>
        <p className='textoResponsivo'>
          Esse projeto surgiu com a iniciativa de dois amigos de Goiás, Gustavo Rodrigues e Emilly Santos, que comentaram sobre o meu livro com o professor deles e decidiram fazer uma apresentação para a turma sobre o tema, por acharem interessante. Fui convidada para gravar um vídeo falando um pouco sobre o tema e também sobre o meu livro — livro esse que é “Metamorfose — Seja você o protagonista da sua história”. — Foi uma apresentação incrível, todos gostaram e elogiaram.

        </p>
        <p className='textoResponsivo'>
          Isso se deu início em setembro de 2022, tive o auxílio de um psicólogo que conheço em relação a dicas do que eu poderia estudar para falar do tema escolhido. Mesmo que o prazo na época tenha sido um pouco curto, conseguimos realizar um bom trabalho.
          Nesse ano de 2023 reformulamos esse projeto, colocando um tema principal para ser abordado e começamos a fazer isso com antecedência. O tema escolhido foi “A pressão psicológica em época de vestibulares”. Com a chegada do Enem e vestibulares para a entrada em uma universidade, muitos alunos se sentem pressionados com a pressão de ter que escolher “o que vão fazer pelo resto da vida”.
        </p>
        <p className='textoResponsivo'>
          Os pontos abordados serão sobre a pressão que muitos estudantes sofrem com a chegada dos vestibulares, pressão essa que pode ser tanto do ambiente, familiar, escolar e até do próprio aluno. 
        </p>
        <p className='textoResponsivo'>
          Dentro desse assunto podemos fazer algumas reflexões, como o fato de entendermos que temos que parar um pouco quando nos sentimos muito sobrecarregados, ter um planejamento de estudo, escolher um curso que o agrade. E mesmo que futuramente não seja aquilo com que você se identifique, não tenha medo de mudar, não se sinta atrasado, nunca é tarde para trocar de carreira.
        </p>
      </div>
    </div>
  )
}

export default Projeto