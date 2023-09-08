
import React from 'react'
import img1 from'../Images /ProductImg/bambocard.jpeg'
import './Imagebox.css'



export default function Imagebox() {
  return (
<div class="Main1"> 
  <div className  ="row">
    <img className = "imagebox" src={img1} alt="React Image" />
  </div>
  <div className="description-box" >
            <div className="box-title">Eco Friendly Bambo card </div>
            <div className="box-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Deleniti temporibus exercitationem aspernatur in. Quae error non assumenda ipsam nulla illo 
             exercitationem ratione beatae ullam sint , ipsa , laudantium asperiores . Veniam, odio.</div>
            <button className="buy-button">
                Buy Now
            </button>
    </div>
</div>
  );
}
