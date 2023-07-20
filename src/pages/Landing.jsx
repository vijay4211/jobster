import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import { styled } from 'styled-components';
const Landing = () => {
  return (
    // instead of main we use Wrapper
    <Wrapper>
        <nav>
            <img src={logo} alt="jobster logo" className='logo' />
        </nav>
        {/* container is global class */}
        <div className='container page'>
            {/* info */}
            <div className='info'>
                <h1>job <span>tracking</span> app</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, magni tenetur repellendus dolorem unde est minima illo? Officia eveniet et minus, facilis, quaerat temporibus vitae amet repudiandae praesentium qui nam.</p>
                <button className='btn btn-hero'>Login/Register</button>
            </div>
            <img src={main} alt="job hunt" className='img main-img' />
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.main`
    nav{
        /* border: 2px solid red; */
        width: var(--fluid-width); //90vw
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }
    .page{
        /* border: 2px solid blue; */
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        /* margin-top: -3rem; */
    }
    h1{
        font-weight: 700;
        span{
            color:var(--primary-500);
        }
    }
    p{
        color: var(--grey-600);
    }
    .main-img{
        display: none; //hide image
    }
    @media (min-width:992px){
        .page{
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img{
            display: block;
        }
    }

`



export default Landing