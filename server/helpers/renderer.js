import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import serialize from 'serialize-javascript'

import Routes from '../../client/components/Router/routes'

export default (req, store, context = {}) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>,
  )
  const helmet = Helmet.renderStatic()

  return (
    `<!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        <meta charset="UTF-8">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
     <body ${helmet.bodyAttributes.toString()}>
       <div id="root">${content}</div>
       <script>
         window.INITIAL_STATE = ${serialize(store.getState())}
       </script>
       <script src="bundle.js"></script>
     </body>
    </html>`
  )
}
