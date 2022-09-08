/* ------------------------------- dependecies ------------------------------ */
//Packages
import React from 'react'
// Style
import HeroStyle from '../../styles/page-components/Hero.module.css'
import Image from 'next/image'
//Assets
import bg from '../../images/TABONI/background-hero - Edited.png'
function Hero() {
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
            <button className={HeroStyle.ActiveBtn}>gestion</button>
          </div>
          <div className={HeroStyle.inputs}>
            <input type='text' placeholder='choisir type' />
            <input type='text' placeholder='choisir lieu' />
            <input type='text' placeholder='budget maximum' />
            <button type='button'>Chercher</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
