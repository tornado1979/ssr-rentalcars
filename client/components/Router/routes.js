import HomePage from '../../pages/home'
import App from '../../App'
import NotFoundPage from '../../pages/notFoundPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/home',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
]
