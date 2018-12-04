import React from 'react'
import renderer from 'react-test-renderer'

import { Footer } from '../footer'

describe('Component footer', () => {
  it('should render correctly', () => {
    expect.assertions(1)
    const component = renderer
      .create(<Footer />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
