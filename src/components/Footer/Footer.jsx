import { Link } from 'react-router-dom'
import Logo from '../../assets/DNC.svg'
import './FooterStyle.css'

// ICONES
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import Linkedin from '../../assets/linkedin.svg'

// BANDEIRAS
import Brasil from '../../assets/bandeira-brasil.svg'
import Eua from '../../assets/bandeira-america.svg'

export const Footer = () => {
  return (
    <footer className='al-center d-flex'>
      <div className='container'>
        <div className='d-flex jc-space-between mobile-fd-column'>
          <div className="footer-logo-col">
            <Link to='/'><img src={Logo} alt="" /></Link>
            <p className='grey-1-color'>
              A escola que prepara você para as profissões em alta no mercado de trabalho
            </p>
            <div className='d-flex social-links'>
              <a href="#" target='_blank'><img src={Facebook} alt="" /></a>
              <a href="#" target='_blank'><img src={Twitter} alt="" /></a>
              <a href="#" target='_blank'><img src={Linkedin} alt="" /></a>
              <a href="#" target='_blank'><img src={Instagram} alt="" /></a>
            </div>
          </div>

          <div className="d-fle mobile-fd-column">
            <div className="footer-col">
              <h3>Pages</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h3>Contacts</h3>
              <p className='grey-1-color'>R. Justino Cobra, 61 - Vila Ema | São José dos campos - SP | CEP 12243-030</p>
              <p className='grey-1-color'>suport@escoladnc.com.br</p>
              <p className='grey-1-color'>+55 (12) 3945-1234</p>
            </div>
          </div>
        </div>

        <div className='d-flex jc-space-between footer-copy'>
          <p className='grey-1-color'>
            Copyright © DNC - 2024
          </p>
          <div className="langs-area d-flex">
            <img src={Brasil} alt="Bandeira do Brasil" height="29px" />
            <img src={Eua} alt="Bandeira do estados unidos" height="29px" />
          </div>
        </div>
      </div>
    </ footer>
  )
}
