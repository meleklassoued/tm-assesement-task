/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react'
import PropTypes from 'prop-types'

// Style
import Footer from '../../../styles/page-Layout/Footer.module.css'

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function PageFooter() {
  /* ********************************** HOOKS ********************************* */

  /* ******************************** RENDERING ******************************* */
  return (
    <footer className={Footer.style}>
      <div className={Footer.linksContainer}>
        <section className={Footer.linksSection}>
          <h3>Cabinet Taboni</h3>
          <p>82 BD Gambetta 06000 Nice</p>
          <p>Contactez-nous par mail</p>
          <p> Contactez-nous par mail</p>
          <p>Lundi au jeudi de 9h à 12h et 14h à 18h</p>
          <p>Vendredi de 9h à 12h et 14h à 17h</p>
        </section>
        <section className={Footer.linksSection}>
          <h3>Cabinet</h3>
          <p>Historique</p>
          <p>Organigrame</p>
          <p> Nos métiers</p>
          <p>L'équipe</p>
          <p>Presse</p>
        </section>
        <section className={Footer.linksSection}>
          <h3>Gérance-Location</h3>
          <p>Activité de syndic</p>
          <p>Service assurances</p>
          <p> Service contentieux et juridique</p>
          <p>Service compable</p>
          <p>Service travaux</p>
          <p>Syndic : fiches pratiques </p>
        </section>
        <section className={Footer.linksSection}>
          <h3>Gérance-Location</h3>
          <p>Activité gérance</p>
          <p>Les offres de location</p>
          <p> Location : fiches pratiques</p>
        </section>
        <section className={Footer.linksSection}>
          <h3>Transaction</h3>
          <p>Activités transaction</p>
          <p>Les offres de vente</p>
          <p>Les offres de vente</p>
        </section>
      </div>
    </footer>
  )
}

PageFooter.propTypes = {}

PageFooter.defaultProps = {}

export default PageFooter
