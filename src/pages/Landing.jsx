import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components/index'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    // instead of main we use Wrapper
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      {/* container is global class */}
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            magni tenetur repellendus dolorem unde est minima illo? Officia
            eveniet et minus, facilis, quaerat temporibus vitae amet repudiandae
            praesentium qui nam.
          </p>
          {/* <button className="btn btn-hero">Login/Register</button> */}
          {/* Link to register page */}
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
