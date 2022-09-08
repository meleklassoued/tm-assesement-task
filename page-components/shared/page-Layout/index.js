/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react'
import PropTypes from 'prop-types'

// Style
// local ui components
import Header from '../page-header/index'
import Footer from '../page-footer/index'
/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function PageHeader({ children }) {
  /* ********************************** HOOKS ********************************* */

  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

PageHeader.propTypes = {}

PageHeader.defaultProps = {}

export default PageHeader
