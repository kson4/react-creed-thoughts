import './Hero.css'
import pose from '../img/creed-action.jpg'

export default function Hero () {
  const date = new Date().toLocaleDateString()
  return (
    <div className='hero grid'>
      <p className='date'>{date}</p>
      <div className='empty'></div>
      <div className='section grid'>
        <h3 className='category'>Recommended Articles.</h3>
        <h2 className='article-title'>Looking For a Software Engineer?</h2>
        <div className='article-img'>
          <img src={pose} alt='creed action' />
        </div>

        {/* <img src='../../public/img/creed-action_vwttxi.jpg' /> */}
      </div>
    </div>
  )
}
