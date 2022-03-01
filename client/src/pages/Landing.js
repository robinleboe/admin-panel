import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>tracking</span> app</h1>
          <p>Shoreditch chartreuse ennui coloring book ethical pickled mixtape
            bicycle rights wolf offal. Williamsburg taiyaki four dollar toast
            shaman enamel pin. Tattooed fashion axe lyft, cardigan raclette
            sartorial mustache synth chartreuse meggings 8-bit quinoa.</p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={ main } alt="job hunt" className="img main-img" />
      </div>
    </Wrapper> )
}

export default Landing