import './ProjectListStyle.css'

// ASSETS
import Like from '../../assets/likeWhite.svg'
import LikeSelect from '../../assets/likeBlack.svg'


export const ProjectList = (props) => {
  return (
    <div className='project-section'>
      <div className='project-hero'>
        <h2>Follow Our Projects</h2>
        <p>
          It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.
        </p>
      </div>
      <div className="project-grid">
        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className="thumb tertiary-background"></div>
          <h3>Levi Cohen</h3>
          <p>New York, USA</p>
          <img src={Like} className='like-icon' height="20px"/>
        </div>

        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className="thumb tertiary-background"></div>
          <h3>Levi Cohen</h3>
          <p>New York, USA</p>
          <img src={Like} className='like-icon' height="20px"/>
        </div>

        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className="thumb tertiary-background"></div>
          <h3>Levi Cohen</h3>
          <p>New York, USA</p>
          <img src={LikeSelect} className='like-icon' height="20px"/>
        </div>

        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className="thumb tertiary-background"></div>
          <h3>Levi Cohen</h3>
          <p>New York, USA</p>
          <img src={Like} className='like-icon' height="20px"/>
        </div>

        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className="thumb tertiary-background"></div>
          <h3>Levi Cohen</h3>
          <p>New York, USA</p>
          <img src={Like} className='like-icon' height="20px"/>
        </div>

        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className="thumb tertiary-background"></div>
          <h3>Levi Cohen</h3>
          <p>New York, USA</p>
          <img src={Like} className='like-icon' height="20px"/>
        </div>

        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className="thumb tertiary-background"></div>
          <h3>Levi Cohen</h3>
          <p>New York, USA</p>
          <img src={Like} className='like-icon' height="20px"/>
        </div>

        <div className='project-card d-flex jc-center al-center fd-column'>
          <div className="thumb tertiary-background"></div>
          <h3>Levi Cohen</h3>
          <p>New York, USA</p>
          <img src={Like} className='like-icon' height="20px"/>
        </div>

      </div>
    </div>
  )
}
