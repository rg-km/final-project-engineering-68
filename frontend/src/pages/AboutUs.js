import React from 'react';
import "./AboutUs.css";
import logo from "./images/1.jpg"
import pink from "./images/2.jpg"

function AboutUs() {
  return (
<div class="container">
    <div class="slew-title">
        <h1>Nakama</h1>
        <p>UK environmental organizations currently face a significant funding gap. It is well-established that representations of individual victims are more effective than abstract concepts like climate change when designing fundraising campaigns. This study aims to determine how such representations can be better targeted in order to increase donations. <span></span>Specifically, it investigates whether the perceived social distance between victims and potential donors has an impact on donation intention. In this context, social distance is defined as the extent to which people feel they are in the same social group (in-group) or another social group (out-group) in relation to climate change victims.

To test the hypothesis that smaller social distance leads to higher donation intention, an online survey was distributed to potential donors based across the UK. Respondents were randomly divided into two conditions (large and small social distance) and asked to respond to one of two sets of fundraising material. Responses were analyzed using a two-sample t-test. The results showed a small effect in the opposite direction than hypothesized: large social distance was associated with higher donation intention than small social distance. </p>
    </div>
        <div class="section-title">
            <h1>Our Team </h1>
        </div>

        <div class="row">


            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={logo} alt='Team Image'/>
                    </div>
                    <div class="team-content">
                        <h2>Kevin Leonardi</h2>
                        <h3>Backend Developer</h3>
                        <p>Universitas Sumatera Utara</p>
                        <h4>abc@gmail.com</h4>
                    </div>
                    <div class="team-social">
                    
                        
                        <a href="#" class="social-li"> <i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/" class="social-in"> <i class="fab fa-instagram"></i></a>
                        
                    </div>
                </div>
            </div>

            
            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={pink} alt="img"/>
                    </div>
                    <div class="team-content">
                        <h2>Amario Fausta</h2>
                        <h3>Frontend Developer</h3>
                        <p>Universitas Negri Jakarta</p>
                        <h4>abc@gmail.com</h4>
                    </div>
                    <div class="team-social">
                        
                        
                        <a href="#" class="social-li"> <i class="fab fa-linkedin-i"></i></a>
                        <a href="#" class="social-in"> <i class="fab fa-instagram"></i></a>
                        
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={logo}/>
                    </div>
                    <div class="team-content">
                        <h2>Handini Aprillia Wijaya</h2>
                        <h3>Backend Developer</h3>
                        <p>Universitas Negri Jakarta</p>
                        <h4>abc@gmail.com</h4>
                    </div>
                    <div class="team-social">
                        
                        <a href="#" class="social-li"> <i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="social-in"> <i class="fab fa-instagram"></i></a>
                        
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={logo}/>
                    </div>
                    <div class="team-content">
                        <h2>Fani Adi Frihandoko</h2>
                        <h3>Frontend Developer</h3>
                        <p>STT Terpadu Nurul</p>
                        <h4>abc@gmail.com</h4>
                    </div>
                    <div class="team-social">
                        
                        <a href="#" class="social-li"> <i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="social-in"> <i class="fab fa-instagram"></i></a>
                        
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={logo} />
                    </div>
                    <div class="team-content">
                        <h2>Ikram Muhaimin</h2>
                        <h3>Frontend Developer</h3>
                        <p>Universitas Syiah Kuala</p>
                        <h4>abc@gmail.com</h4>
                    </div>
                    <div class="team-social">
                     
                        <a href="#" class="social-li"> <i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="social-in"> <i class="fab fa-instagram"></i></a>
                        
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={logo} />
                    </div>
                    <div class="team-content">
                        <h2>Dimas Julian Pramudya</h2>
                        <h3>Frontend Developer</h3>
                        <p>Universitas Banten Jaya</p>
                        <h4>dimasjulian8721@gmail.com</h4>
                    </div>
                    <div class="team-social">
                       
                        <a href="#" class="social-li"> <i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="social-in"> <i class="fab fa-instagram"></i></a>
                        
                    </div>
                </div>
            </div>

        </div>

    </div>
  
  )
}

export default AboutUs