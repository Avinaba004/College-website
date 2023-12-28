import React from 'react'
const slider = 'img/slider.jpeg';
const slider1 = 'img/slider1.jpeg';
const slider2 = 'img/slider2.jpeg';
const Slider=()=>{
    return(
        <>
        <div className="slider">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider} class="d-block w-100" alt={slider} height="650px" width="100%" />
      <div class="carousel-caption d-none d-md-block">
        <h3>PLAYGROUND</h3>
        <p>BasketBall Ground which used mostly by FBS school and College students gonna get ghonta.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slider1} class="d-block w-100" alt="..." height="650px" width="100%"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>LIBRARY</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slider2} class="d-block w-100" alt="..." height="650px" width="100%"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>SG HALL</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
</div>
        </>
    )
}
export default Slider