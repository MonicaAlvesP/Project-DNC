import { Link } from 'react-router-dom'
import Logo from '../../assets/DNC.svg'

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
    <>
      <div>
        <Link to='/'><img src={Logo} alt="" /></Link>
        <p>
          A escola que prepara você para as profissões em alta no mercado de trabalho
        </p>
        <Link to="#"><img src={Facebook} alt="" /></Link>
        <Link to="#"><img src={Twitter} alt="" /></Link>
        <Link to="#"><img src={Linkedin} alt="" /></Link>
        <Link to="#"><img src={Instagram} alt="" /></Link>
      </div>

      <div>
        <h3>Pages</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contacts</Link>
      </div>

      <div>
        <h3>Contacts</h3>
        <p>R. Justino Cobra, 61 - Vila Ema | São José dos campos - SP | CEP 12243-030</p>
        <p>suport@escoladnc.com.br</p>
        <p>+55 (12) 3945-1234</p>

      </div>

      <div>
        <p>© 2021 DNC. All rights reserved.</p>
        <div>
          <Link to="#"><img src={Brasil} alt="" /></Link>
          <Link to="#"><img src={Eua} alt="" /></Link>
        </div>
      </div>
    </>
  )
}
