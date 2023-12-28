import React from 'react'
const Header=()=>
{
    return(
        <>
            <div className="header">
               <div className="mobile">
                <a href="tel:7363838646"><i class="fa-solid fa-phone-volume"></i>91+ 7363838646</a>
               </div>
               <div className="email">
                <a href="mailto:ghoshjeet04@gmail.com"><i class="fa-solid fa-envelope"></i>ghoshjeet04@gmail.com</a>
               </div>
               <div className="social">
                    <div className="Social_media">
                            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>

                    </div>
               </div>
            </div>
        </>
    )
}
export default Header