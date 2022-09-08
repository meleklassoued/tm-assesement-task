/* -------------------------------------------------------------------------- */
/*                                 dependecies                                */
/* -------------------------------------------------------------------------- */
//Packages
import React from 'react'
// Style
import HeroStyle from '../../styles/page-components/Hero.module.css'
import Image from 'next/image'
//Assets
import bg from '../../images/TABONI/background-hero - Edited.png'
function Hero() {
  // hooks
  // helpers
  /* -------------------------------------------------------------------------- */
  /*                                  Rendering                                 */
  /* -------------------------------------------------------------------------- */
  return (
    <div className={HeroStyle.container}>
      <div className={HeroStyle.heroDescription}>
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          architecto. Accusantium illo ratione ex commodi ut dolores tenetur id
          quo blanditiis cum beatae iusto quisquam voluptates fuga, accusamus
          distinctio nisi?
        </p>
        <section className={HeroStyle.searchSection}>
          <div className={HeroStyle.ButtonSection}>
            <button className={HeroStyle.ActiveBtn}>Acheter</button>
            <button className={HeroStyle.Btn}>Louer</button>
            <button className={HeroStyle.Btn}>gestion</button>
          </div>
          <div className={HeroStyle.Inputs}>
            <input type='text' placeholder='choisir type' />
            <input type='text' placeholder='choisir lieu' />
            <input type='text' placeholder='budget maximum' />
            <button type='button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-search'
                viewBox='0 0 16 16'
              >
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
              </svg>
              Chercher
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
