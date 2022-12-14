import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import './Nav.css'

export default function Nav () {
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <nav>
      <Link to='/' className='logo'>
        Creed Thoughts
      </Link>
      <div className={showMenu ? 'links' : 'links hidden'}>
        <ul>
          <li className='active'>
            <Link to='/' onClick={handleShowMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={handleShowMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={handleShowMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <Link to='/new-blog'>
        <button className={showMenu ? 'btn hidden' : 'btn'}>New</button>
      </Link>
      <button className={showMenu ? 'btn hidden' : 'btn'}>Login</button>
      <div id='nav-mobile'>
        {!showMenu && <FaIcons.FaBars onClick={handleShowMenu} />}
        {showMenu && <i className='fas fa-times' onClick={handleShowMenu}></i>}
      </div>
    </nav>
  )
}
