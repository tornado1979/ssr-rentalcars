import React from 'react'
import propTypes from 'prop-types'

import { Head } from '../../components/head'

const About = (props) => {
  const {
    location,
    route,
  } = props
  return (
    <main style={{ height: '100%', alignItems: 'center' }}>
      <Head location={location} route={route} />
      <div className="about-container">
          Lorem ipsum dolor sit amet, natum persius consetetur eos ea, mei eirmod moderatius mediocritatem an. Ut duo oratio virtute pertinacia. Per no prima oporteat adipisci. Eum te augue gubergren. Mel volutpat expetenda ex, wisi iusto mea at. Duo saperet epicurei delectus ut, mel falli aperiam imperdiet eu. In simul dolor decore vix, ne graeco argumentum pri.

Meis fugit no has, eam at omittam delectus. Congue perpetua cotidieque ei cum, pro homero fierent incorrupte eu. Eu incorrupte constituam vel, eu mazim ludus eum, cu mea mundi legere. Has te hinc discere gloriatur. Quo rationibus interpretaris in, graeco tincidunt consectetuer an eum, in est falli virtute constituto.

Qui odio patrioque no, ei sed civibus detraxit. Id recusabo persequeris eam, est at illud copiosae. Mel ea soluta ponderum dignissim. Affert aliquam intellegam nec et, vel cu partem nominavi platonem.
      </div>
    </main>
  )
}

About.propTypes = {
  location: propTypes.shape({
    hash: propTypes.string,
    pathname: propTypes.string,
    search: propTypes.string,
  }).isRequired,
  route: propTypes.shape({
    decription: propTypes.string,
    keywords: propTypes.string,
    path: propTypes.string,
    title: propTypes.string,
  }).isRequired,
}

export default {
  component: About,
}
