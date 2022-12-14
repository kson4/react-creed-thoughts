import React from 'react'
import './About.css'

export default function About () {
  return (
    <div className='about'>
      <h3>About Creed Thoughts</h3>
      <div>
        Like many people that have watched The Office, Creed Bratton is my
        favorite member. His personality and demeanor is absolutely comedic.
      </div>
      <div>
        Back when I was first watching The Office, I wanted to visit the actual
        Creed-Thoughts website. I heard it existed but when I went to go look
        for it, I found out that NBC was only maintaining the site from
        2007-2008. The original can still be accessed through the a web archive
        but, the site itself has not aged well. This is my modern recreation of
        the site.
      </div>
      <div>
        If you are interested in seeing the original, real blog, you can check
        it out on the internet archive here:{' '}
        <a
          className='underline'
          href='http://web.archive.org/web/20080927130429/http://blog.nbc.com/CreedThoughts'
        >
          http://web.archive.org/web/20080927130429/http://blog.nbc.com/CreedThoughts
        </a>
      </div>
    </div>
  )
}
