import React from 'react'
const img = 'img/logo.png';
const Title=()=>{
    return(
        <>
            <div className="title">
               <div className="logo">
               <img src={img} alt={img} height={'150px'} width={'160px'}></img></div>

               <div className="inst">
               <h1>FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT</h1>
               <span>Sonarpur, Kolkata, South-24-Parganas</span>
               </div>
               
            </div>
        </>
    )
}
export default Title