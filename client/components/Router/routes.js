import HomePage from '../../pages/home'
import App from '../../App'
import NotFoundPage from '../../pages/notFoundPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        description: "Compare car hire deals and find the cheapest prices in over 53,000 locations worldwide. Book online today with the world's biggest online car rental service. Save on luxury, economy and family car hire.",
        keywords: 'car hire, cheap car hire, car rental uk,  rent a car, car rentals, uk car car, cheap car rentals spain, cheap car rental usa, carrentals, rent car, car hire comparison, carrental, carhire, compare car hire, car rental comparison, rentalcars, rental cars',
        path: '/home',
        title: 'Cheap Car Hire, Compare Rental Prices - Rentalcars',
      },
      {
        ...NotFoundPage,
        description: '',
        keywords: '',
        title: 'page not found - Rentalcars',
      },
    ],
  },
]
