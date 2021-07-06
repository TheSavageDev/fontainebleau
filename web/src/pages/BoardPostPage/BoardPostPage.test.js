import { render } from '@redwoodjs/testing'

import BoardPostPage from './BoardPostPage'

describe('BoardPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BoardPostPage />)
    }).not.toThrow()
  })
})
