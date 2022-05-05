import {RiMenu3Line, RiCloseLine } from "react-icons/ri";
import{BsSearch} from 'react-icons/bs';
import {Link} from "react-router-dom";
import {useState} from 'react';
import './Navbar.css';

const MenuList=()=>{
 return(
  <nav>
  <ul>
  <li> <Link to="/">Home</Link></li>
  <li> <Link to="/contact">Contact</Link></li>
  <li>  <Link to="/">Blog</Link></li>
  <li> <Link to="/">Service</Link></li>
  <li>  <Link to="/">About</Link></li>
  </ul>
  </nav>

 )
}


const Nvabar = () => {
 const [toggleMenu, setToggleMenu] = useState(false)
 return ( 
  <div className="container">
   <div className="content-container">

    <div className="logo">
     <h4>Pharmacist</h4>
    </div> 

    <div className="menu-container">
  <MenuList/>
    </div>

    <div className="menuIcon">
    { toggleMenu ? 
    <RiCloseLine color="black" size={30}
     onClick={()=> setToggleMenu(false)}/>
     :
     <RiMenu3Line color="black" size={30} 
     onClick={()=> setToggleMenu(true)} /> }

     {toggleMenu && (
      <div className="menutoggle">
  <MenuList/>

      </div>
     )}

    </div>

    <div className="searchIcon">
    <BsSearch color="black"  size={28}/>

    </div>
   </div>
  </div>
  );
}
 
export default Nvabar;