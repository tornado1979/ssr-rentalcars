import '@babel/polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import createStore from './helpers/createStore'
import Routes from '../client/components/Router/routes'
import renderer from './helpers/renderer'

const app = express()
const PORT = 5000

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()
  // Initialize and load data into the store
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)

    if (context.notFound) {
      res.status(404)
    }

    return res.send(content)
  })
})

app.listen(PORT, () => console.log('Server is listening on PORT ', PORT))
