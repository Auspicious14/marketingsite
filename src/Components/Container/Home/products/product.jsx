
import './product.css';

const Product =()=>{
 
//data
const Products=[
 {
  id:1,
  img:"src/Images/medicine1.jpg",
  product_name: "Paracetamol"
 },
 {
  id:2,
  img:"src/Images/medicine2.jpg",
  product_name: "Paracetamol"
 },
 
 {
  id:3,
  img:"src/Images/medicine3.png",
  product_name: "Paracetamol"
 },
 {
  id:4,
  img:"src/Images/medicine2.jpg",
  product_name: "Paracetamol"
 },
 {
  id:5,
  img:"src/Images/medicine3.png",
  product_name: "Paracetamol"
 },
 {
  id:6,
  img:"src/Images/medicine3.png",
  product_name: "Paracetamol"
 }
];


 return(
<div className="product_container">
 <div className="product_header">
  <h3>Newly Acquired Medicines</h3>
 </div>
 <div  className="product_content">
  <div className="productItem">

 { Products.map((item)=>{
  return(
 <div key={item.id} className="product">
  <img src={item.img} alt="Product_images" />
  <h3>{item.product_name}</h3>
 </div>)
 })
     
 }
 </div>
  </div>
  <br />
  <br />
  <div className="drugBtn">
  <button>See More</button>
  </div>
</div>
 )
}
export default Product;