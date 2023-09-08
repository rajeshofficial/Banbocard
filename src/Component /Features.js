import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import buyimg from '../Images /cover.jpeg'
import './Features.css'

export default function Features() {
  return (

<div className='X1' style={{ paddingTop: '2%' , display: 'flex' }}>
    <div className='C1'>
     <div className="card">
        <img src={buyimg} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">BASIC PACKAGE</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ol>
            <li>Neil Armstrong</li>
            <li>Alan Bean</li>
            <li>Peter Conrad</li>
            <li>Edgar Mitchell</li>
            <li>Alan Shepard</li>
            </ol>

            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
     </div>
    </div>

    <div className='C2'>
     <div className="card" >
        <img src={buyimg} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">PREMIUM PACKAGE</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ol>
            <li>Neil Armstrong</li>
            <li>Alan Bean</li>
            <li>Peter Conrad</li>
            <li>Edgar Mitchell</li>
            <li>Alan Shepard</li>
            </ol>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
     </div>
    </div>
</div>


  )
}
