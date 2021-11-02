import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className='App-link' to='/about'>About</Link>
        <p>
          Welcome to HOST3!
        </p>
      </header>
    </div>
  )
}
