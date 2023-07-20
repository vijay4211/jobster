import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
const Landing = () => {
  return (
    <main>
        <nav>
            <img src={logo} alt="jobster logo" className='logo' />
        </nav>
        <div className='container page'>
            {/* info */}
            <div className='info'>
                <h1>job <span>tracking</span> app</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, magni tenetur repellendus dolorem unde est minima illo? Officia eveniet et minus, facilis, quaerat temporibus vitae amet repudiandae praesentium qui nam.</p>
                <button className='btn btn-hero'>Login/Register</button>
            </div>
            <img src={main} alt="job hunt" className='img main-img' />
        </div>
    </main>
  )
}

export default Landing