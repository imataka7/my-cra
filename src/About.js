import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is about page.
        </p>
        <Link className='App-link' to='/'>Home</Link>
      </header>
    </div>
  )
}