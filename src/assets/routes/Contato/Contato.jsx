import React from 'react';

import "./Contato.css";

function Contato() {
  return (
    <div className='contatoContainer'>
      <h2 id='contato'>Contato</h2>
      <div className="ctn">
          <h3>Instagram:</h3>

          <p className='textoResponsivo-2 center'>Pessoal:</p>
          <a target="_blank" href="https://www.instagram.com/srt_laura_/" className='textoResponsivo center'>@srt_laura_</a>
          <p className='textoResponsivo-2 center'>Textos:</p>
          <a target="_blank" href="https://www.instagram.com/escritos.amarelo/" className='textoResponsivo center'>@escritos.amarelo</a>
      </div>

      <br />

      <div className="ctn">
          <h3>E-mail:</h3>

          <p className='textoResponsivo-2 center'>lauragarciacp@hotmail.com</p>
      </div>

      <br />

      <div className="ctn">
          <h3>Cartão online:</h3>

          <a target="_blank" href="https://l-laura-garcia.netlify.app/" className='textoResponsivo-2 center'>https://l-laura-garcia.netlify.app/</a>
      </div>
      
    </div>
  )
}

export default Contato