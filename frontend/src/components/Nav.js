import { useState } from 'react'
import './Nav.css'

export default function Nav () {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav>
      <a href='/' className='logo'>
        Creed Thoughts
      </a>
      <div className={showMenu ? 'links' : 'links hidden'}>
        <ul>
          <li className='active'>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
        </ul>
      </div>
      <button className={showMenu ? 'btn hidden' : 'btn'}>Login</button>
      <div id='nav-mobile'>
        <i
          className={showMenu ? 'fas fa-times' : 'fas fa-bars'}
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        ></i>
      </div>
    </nav>
  )
}
