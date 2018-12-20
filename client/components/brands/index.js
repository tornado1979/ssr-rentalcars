import React from 'react'

import alamo from './img/alamo_logo_lrg.gif'
import avis from './img/avis_logo_lrg.gif'
import europacar from './img/europcar_logo_lrg.gif'
import hertz from './img/hertz_logo_lrg.gif'

import budget from './img/budget_logo_lrg.gif'
import dollar from './img/dollar_logo_lrg.gif'
import enterprise from './img/enterprise_logo_lrg.gif'
import thrifty from './img/thrifty_logo_lrg.gif'

export const Brands = () => {
  const brands = [
    alamo,
    avis,
    europacar,
    hertz,
    budget,
    dollar,
    enterprise,
    thrifty,
  ]

  return (
    <div className="brands">
      <h3 className="title">
        Rentalcars.com connects you to the biggest brands in car hire.
      </h3>
      <div className="logos-wrap">
        <div className="logos">
          {brands.map(logo => <img alt="logo" key={logo} src={logo} /> )}
        </div>
      </div>
    </div>
  )
}
