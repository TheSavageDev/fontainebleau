import { render } from '@redwoodjs/testing'

import BoardPost from './BoardPost'

describe('BoardPost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BoardPost />)
    }).not.toThrow()
  })
})
