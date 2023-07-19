import React from "react";

import '../css/Carousel1.css';

   function Carousel1() {
  return(
    <div id="home" className='carro'>
    
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner Laltu ml-5">
            <div class="carousel-item active " data-mdb-interval="10">
                <div className="Content">
                <h1></h1>
                </div>
            </div>
            <div class="carousel-item" data-mdb-interval="100">
            <div className="Content2">
                <h1></h1>
                </div>
            </div>
            <div class="carousel-item" data-mdb-interval="10">
            <div className="Content3">
                <h1>  </h1>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>

        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
            
        </button>
        </div>
        </div>
        
  );
}



export default Carousel1