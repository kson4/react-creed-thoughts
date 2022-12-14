import React from 'react'
import './Subscribe.css'

export default function Subscribe () {
  return (
    <div className='subscribe'>
      <form>
        <div>
          <label>
            <p>Want Daily Creed Thoughts?</p>
            <div className='field'>
              <input type='email' placeholder='example@example.com' />
              <button className='btn'>SUBSCRIBE</button>
            </div>
          </label>
        </div>
      </form>
    </div>
  )
}
