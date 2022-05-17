import './Home.css';
import Whyus from '../Container/Home/whyus/whyus';
import AdvertPage from '../Container/Home/advert/advert';
import Product from '../Container/Home/products/product';
import Footer from '../Container/Home/footer/footer';

const Home = () => {
 return ( 
  <div className="Home_container">

   <div className="Home_content">
    <img src="src\Images\ftrontImage.jpg" alt="frontImage" className="FrontImages" />

   <div className = "text-container">
    <div className="text-content">

  <h4>Get your <span> Health</span> a new lift</h4>
  <br/>
  <p >There are three very important aspects to looking after your body: getting enough rest and sleep, eating well, and taking exercise.</p>
    <button>Get Started </button>
   </div>
   </div>
  </div>
  <Whyus />
  <AdvertPage />
  <Product />
  <Footer />

  </div>

  );
}
 
export default Home;