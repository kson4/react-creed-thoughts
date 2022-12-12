import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import './Nav.css'

export default function Nav () {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav>
      <Link to='/' className='logo'>
        Creed Thoughts
      </Link>
      <div className={showMenu ? 'links' : 'links hidden'}>
        <ul>
          <li className='active'>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
      </div>
      <Link to='/new-blog'>
        <button className={showMenu ? 'btn hidden' : 'btn'}>New</button>
      </Link>
      <button className={showMenu ? 'btn hidden' : 'btn'}>Login</button>
      <div id='nav-mobile'>
        {/* <i
          className={showMenu ? 'fas fa-times' : 'fas fa-bars'}
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        ></i> */}
        <FaIcons.FaBars
          className={showMenu ? 'fas fa-times' : 'fas fa-bars'}
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        />
      </div>
    </nav>
  )
}
