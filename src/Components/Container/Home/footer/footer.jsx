
import './footer.css'

const Footer = () => {

 return (
  <div className="footer_container">
   <div className="footer_header">
    <h3>QUICK LINKS</h3>
   </div>
   <br />
   <div className="footer_content">
    <div className="footerItems1">
     <nav>
      <ul>
       <li>Home</li>
       <li>Services</li>
       <li>Contact</li>
       <li>Training</li>
       <li>Job</li>
      </ul>
     </nav>
    </div>

    <div className="footerItems2">
  <nav>
   <ul>
    <li>Facebook</li>
    <li>Instagram</li>
    <li>Twitter</li>
    <li>LinkedIn</li>
    <li>Whatsapp</li>
   </ul>
  </nav>
 </div>

 <div className="footerItems3">
  <div className="address">
   <h4>ADDRESS</h4>
   <p>NO 20 LEKKI STREET OPPOSITE REAL STATE MALL, LAGOS STATE, NIGERIA</p>
   <p>phramcistphase238@gmail.com</p>
  </div>
 </div>
   </div>
  </div>
   );
}
 
export default Footer;