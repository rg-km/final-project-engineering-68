import React from 'react'
import "./Footer.css";
import fb from "./images/fb.png"

function Footer() {
  return (
   
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>NAKAMA</h6>
            <p class="text-justify"></p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h3>Categories</h3>
            <ul class="footer-links">
              <li><a href="/">C</a></li>
              <li><a href="/">UI Design</a></li>
              <li><a href="/">Java Script</a></li>
              
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h3>Quick Links</h3>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/category">Categories</a></li>
              <li><a href="/about-us">AboutUs</a></li>
             </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">@NAKAMA INC 2022
         
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <a>Follow Us</a>
            <ul class="social-icons">
                
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="instagram" href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
  )
}

export default Footer