import logo from './logo.svg';
import './App.scss';
  

function App() {
  return (
    <div className="App">
      <body>
        <header className="Nav">
          <div className="container">
            <div className="container_left">
              <div className="brand_icon">
                <img src="http://localhost:3000/apple.png" />
              </div>
            </div>
            <div className="container_center">
                <ul className="Nav_list">
                  <li>Mac</li>
                  <li>Ipad</li>
                  <li>Iphone</li>
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Music</li>
                  <li>Support</li>
                </ul>
            </div>
            <div className="container_right">
              <div className="search_wrapper">
                <div className="search_box">  
                  <img src="http://localhost:3000/nav_search.svg" />
                </div>
              </div>      
            </div>
          </div>
        </header>
        <section>
          <div className="body_heading">
            <p className="title">Apple Watch Series 5</p>
            <p className="subheading">Choose from our latest styles </p>
            <p className="subheading">Or create your own style in the Apple Watch Studio</p>
          </div>
        </section>

        <section>
          <div className="product_card_container">
            <div className="product_card">
              <img src="http://localhost:3000/watch1.jpg" />
              <p className="product_title">
              Nate Round Analog Black Dial Dial Men's Watch
              </p>
              <p className="product_price">
                From rs 45,000
              </p>
            </div>

            <div className="product_card">
              <img src="http://localhost:3000/watch2.jpg" />
              <p className="product_title">
              Nate Round Analog Black Dial Dial Men's Watch
              </p>
              <p className="product_price">
                From rs 45,000
              </p>
            </div>

            <div className="product_card">
              <img src="http://localhost:3000/watch3.jpg" />
              <p className="product_title">
              Nate Round Analog Black Dial Dial Men's Watch
              </p>
              <p className="product_price">
                From rs 45,000
              </p>
            </div>

            <div className="product_card">
              <img src="http://localhost:3000/watch4.jpg" />
              <p className="product_title">
              Nate Round Analog Black Dial Dial Men's Watch
              </p>
              <p className="product_price">
                From rs 45,000
              </p>
            </div>
            
            <div className="product_card">
              <img src="http://localhost:3000/watch5.jpg" />
              <p className="product_title">
              Nate Round Analog Black Dial Dial Men's Watch
              </p>
              <p className="product_price">
                From rs 45,000
              </p>
            </div>

            <div className="product_card">
              <img src="http://localhost:3000/watch6.jpg" />
              <p className="product_title">
              Nate Round Analog Black Dial Dial Men's Watch
              </p>
              <p className="product_price">
                From rs 45,000
              </p>
            </div>

            <div className="product_card">
              <img src="http://localhost:3000/watch7.jpg" />
              <p className="product_title">
              Nate Round Analog Black Dial Dial Men's Watch
              </p>
              <p className="product_price">
                From rs 45,000
              </p>
            </div>
            
            <div className="product_card">
              <img src="http://localhost:3000/watch8.jpg" />
              <p className="product_title">
              Nate Round Analog Black Dial Dial Men's Watch
              </p>
              <p className="product_price">
                From rs 45,000
              </p>
            </div>
          </div>
          
        </section>
      </body>
    </div>
  );
}

export default App;
