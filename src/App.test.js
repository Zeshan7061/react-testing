import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
	render(<App />)
	// const linkElement = screen.getByText(/learn react/i)
	const linkElement = screen.getByTestId('test-link')
	expect(linkElement).toBeInTheDocument()
})

test('link contains react site url', () => {
	render(<App />)
	// const linkElement = screen.getByText(/learn react/i)
	const linkElement = screen.getByTestId('test-link')
	expect(linkElement.href).toContain('https://reactjs.org')
})
