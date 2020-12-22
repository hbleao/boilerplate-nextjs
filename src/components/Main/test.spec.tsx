import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main Component', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Main
        title="React Avançado"
        description="Typescript, ReactJS, NextJS e Styled Components"
      />
    )

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
