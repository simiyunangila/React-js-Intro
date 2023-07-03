import React from "react";
import './style.css'

const introduction = () =>{
    return(
        <div className="main">
            <h1 className="heading">What i have learned about Reactjs</h1>
            <ul>
            <li>It has reusable componets</li>
            <li>The writing format is JSX</li>
            <li>It is fast</li>
            </ul>
            <h2 className="title">I have also learned to use images as follows </h2>
            <img src="Images/burger.jpg" ></img>
            <img src="Images/samosa.jpg" ></img>
            <img src="Images/hotdog.jpg" ></img>
             <img src="Images/cookies.jpg" ></img>

             <footer>
    <div class="footer_main">
        <div class="footer_tag">
            <h2>Location</h2>
            <p>Ndenderu</p>
            <p>Kiambu</p>
            <p>Kenya</p>
        </div>
        <div class="footer_tag">
            <h2>Quick Link</h2>
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Order</p>
        </div>
        <div class="footer_tag">
            <h2>Contact</h2>
            <p>+254 799 990 9880</p>
            <p>beccalicious@gmail.com</p>
            <p>beccabakery@gmail.com</p>
        </div>
        <div class="footer_tag">
            <h2>Our services</h2>
            <p>Fast delivery</p>
            <p>Easy pay</p>
            <p>24/7</p>
        </div>
    </div>
    <p class="end">Design by <span><i class="fa fa-smile-o" aria-hidden="true"></i>Rebecca Nangila</span></p>

</footer>
           
        </div>
        
    );

};
// const pictures=()=>{
//     return(
//         <div>
//             <h1 className="title">I have also learned to images of food as follows using react</h1>
    
//         </div>
//     )
// }
//export default pictures
export default introduction