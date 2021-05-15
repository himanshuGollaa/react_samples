import logo from './logo.svg';
import './App.scss';
  

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <div className="header_wrapper">
            <div className="header_left">
              <div className="banner_content">
                <p className="header_title">International artisan & construction material sourcing <br /> company</p>
                <p className="title_description">Discovering special people producing extraordinary products</p>
                <div className="anchor_links">
                  <a>Our products</a>
                  <a>Our Services</a>
                </div>
              </div>
            </div>
            <div className="header_right">
              {/* <img class="responsive" src="https://djzfsf1yiw-flywheel.netdna-ssl.com/wp-content/uploads/2020/01/banner.jpg"/> */}
            </div>
          </div>
        </header>
        <hr id="vertical_line"></hr> 
        <section className="white">
          <div className="container">
            <div className="first">
              <div className="image_big">
                <img src="http://localhost:3000/big.jpg" />
              </div>
              <div className="image_small">
                <img src="http://localhost:3000/small.jpg" />
              </div>  
            </div>
            <div className="second">
              <h2 className="header_title">About Us</h2>
              <p>Adige Design is a Boston-based international artisan and construction material sourcing company
                with a passion for quality products. Our mission is to uncover special artisans, unique materials
                and products, and incorporate them in any development, home, or office.
              </p>
            </div>
          </div>

          
        </section >
        <hr id="vertical_line"></hr>  
        <section className="black">
          <div className="black_wrapper">
            <div className="padding"></div>
              <div className="section_title">
                <h3>Exclusive Store</h3>
                <p className="sub_title">
                Brought to Boston by Adige Design 
                </p>
                
              </div>
              <div className="card_wrapper">

                <div className="card">
                  <div className="figure_wrapper">
                    <figure>
                      <div className="image_wrapper">
                        <img src="http://localhost:3000/kitchen.jpg" />
                      </div>
                      <figcaption>Kitchen</figcaption>
                    </figure> 
                  </div>
                </div>

                <div className="card">
                  <div className="figure_wrapper">
                    <figure>
                      <div className="image_wrapper">
                        <img src="http://localhost:3000/custom.jpg" />
                      </div>
                      <figcaption>Custom</figcaption>
                    </figure> 
                  </div>
                </div>

                <div className="card">
                <div className="figure_wrapper">
                  <figure>
                    <div className="image_wrapper">
                      <img src="http://localhost:3000/closet.jpg" />
                    </div>
                    <figcaption>Closet</figcaption>
                  </figure> 
                </div>
              </div>
              </div>
            <div className="padding"></div>
          </div>
        </section>
        <hr id="vertical_line"></hr> 
        <section className="developer_section">
        <div className="container">
            <div className="first">
              <div className="image_big">
                <img src="http://localhost:3000/serving_developer1.jpg" />
              </div>
              <div className="image_small">
                <img src="http://localhost:3000/serving_developer2.jpg" />
              </div>  
            </div>
            <div className="second">
              <h2 className="header_title">Servicing developers, architects, designers and homeowners alike</h2>
              <p>As a full service architectural material sourcing company, we offer an array of design and tailored 
                consulting services for luxury materials and artisan products from the initial stages of a project 
                through the construction stage, in addition to interior design and furniture specifications.
              </p>
            </div>
          </div>
        </section>
        <hr id="vertical_line"></hr> 
        <section className="grey">
          <div className="section_title">
              <h1>Exclusive Store</h1>
              <p className="sub_title">
              True master of their craft
              </p>
              
            </div>
            <div className="card_wrapper">
                <div className="card">
                  <div className="figure_wrapper">
                    <figure>
                      <div className="image_wrapper">
                        <img src="http://localhost:3000/project1.jpg" />
                      </div>
                      <figcaption>Closet System</figcaption>
                    </figure> 
                  </div>
                </div>

                <div className="card">
                  <div className="figure_wrapper">
                    <figure>
                      <div className="image_wrapper">
                        <img src="http://localhost:3000/project_two.jpg" />
                      </div>
                      <figcaption>Closet System</figcaption>
                    </figure> 
                  </div>
                </div>

                <div className="card"> 
                  <div className="figure_wrapper">
                    
                      <figure>
                        <div className="image_wrapper">
                          <img src="http://localhost:3000/project_three.jpg" />
                        </div>  
                          <figcaption>Closet System</figcaption>
                      </figure> 
                  </div>
                </div>
          </div>    
        </section>
        <hr id="vertical_line"></hr> 
        <section className="black">
        <div className="section_title">
            <h1>Exclusive Store</h1>
            <p className="sub_title">
            Brought to Boston by Adige Design 
            </p>
            
          </div>
          <div className="card_wrapper">
            <div className="card">
              <div className="figure_wrapper">
                <figure>
                  <div className="image_wrapper">
                    <img src="http://localhost:3000/black_one.jpg" />
                  </div>
                  <figcaption>Closet System</figcaption>
                </figure> 
              </div>
            </div>

            <div className="card">
              <div className="figure_wrapper">
                <figure>
                  <div className="image_wrapper">
                    <img src="http://localhost:3000/black_two.jpg" />
                  </div>
                  <figcaption>Closet System</figcaption>
                </figure> 
              </div>
            </div>

            <div className="card">
            <div className="figure_wrapper">
              <figure>
                <div className="image_wrapper">
                  <img src="http://localhost:3000/black_three.jpg" />
                </div>
                <figcaption>Closet System</figcaption>
              </figure> 
            </div>
          </div>
          </div>
        </section>
        <hr id="vertical_line"></hr> 
        <section className="social_media_wrapper">
          <div className="Social_media">
            <h1>Instagram</h1>
          </div>
          <div className="card_wrapper">
              <div className="card">
                <div className="figure_wrapper">
                  <figure>
                    <img src="http://localhost:3000/grey_one.jpg" />
                    
                  </figure> 
                </div>
              </div>

              <div className="card">
                <div className="figure_wrapper">
                  <figure>
                    <img src="http://localhost:3000/grey_two.jpg" />
                    
                  </figure> 
                </div>
              </div>

              <div className="card">
                <div className="figure_wrapper">
                  <figure>
                    <img src="http://localhost:3000/grey_three.jpg" />
                    
                  </figure> 
                </div>
              </div>

              <div className="card">
              <div className="figure_wrapper">
                <figure>
                  <img src="http://localhost:3000/watch1.jpg" />
                  
                </figure> 
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer_heading">
            Get In Touch
          </div>
          <p className="contact_link">Contact us</p>
          <div className="middle">
            <div className="margin child1">
              <p>100 Summer Street, Suite 1600</p>
              <p>Boston, MA 02110</p>
            </div>
            <div className="margin child2">
              <p>543-54358743</p>
              <p>email@email.com</p>
            </div>
            <div className="margin child3">
              <p>Privacy Policy</p>
              <p>Customer Feedback</p>
              <p>Copy Right</p>
            </div>
            <div className="margin child4">
              <p>copyrightlink</p>
            </div>
          </div>
          <div className="logo">
            <div className="adige_logo">
              <p className="first_line">Adige</p>
              <p className="second_line">Modern Design</p>
            </div>
            <div className="facebook_logo">
              <img src="http://localhost:3000/facebook.png" />
            </div>
            <div className="instagram_logo">
              <img src="http://localhost:3000/instagram.png" />
            </div>
            <div className="linkedin_logo">
              <img src="http://localhost:3000/linkedin.png" />
            </div>
          </div>  
          {/* <div className="social_media_icons">
              <a href="#" className="Facebook_icon">
                <img src="http://localhost:3000/facebook.png" />
                </a>
              <a href="#" className="Instagram_icon"></a>
              <a href="#" className="LinkedIn_icon"></a>
            </div> */}
        </footer>
    </body>
    </div>
  );
}

export default App;
