import React from 'react'
import UserNav from '../UserNav/UserNav'
import Carousel from '../HomePage/HomeCarousel'
import Footer from '../Footer/Footer'

function UserHome() {
  return (
    <div>
        <UserNav></UserNav>
        <div className="banner-section d-flex flex-column justify-content-center align-items-center text-center">
    <div className="banner-card">
        
        <h1 className="banner-heading tracking-in-expand">Support Tribal Artisans by Promoting Their Handicrafts</h1>
        <p className="banner-description">
            Discover a wide range of authentic handicrafts created by talented tribal artisans. Each purchase directly supports their skill development and helps preserve their traditional art forms.
        </p>
        <button className="banner-button">Explore Handicrafts</button>
    </div>
</div>



<div className="Home-Explore-Section pb-5 pt-5">
  <div className="container">
    <div className="row">
      <div className="col-12 col-lg-6 mt-5">
        <img className="Home-Explore-Section-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AtAwpm-1-KpTfY6QiSP1ZtYamcNRRZ9Gmw&s" alt="Tribal Crafts" />
      </div>

      <div className="col-12 col-lg-6">
        <div className="Home-Explore-Section-Card1 mt-5">
          <h6 className="Home-Explore-Section-Card1-heading1">AUTHENTIC HANDICRAFTS</h6>
          <h4 className="Home-Explore-Section-Card1-heading2">Explore Unique Tribal Handicrafts</h4>
          <h4 className="mt-3" style={{ "fontWeight": "bold" }}>Supporting Traditional Artisans and Their Communities</h4>
          <p className="Home-Explore-Section-Card1-paragraph">
            Discover one-of-a-kind, handcrafted items created by tribal artisans. From beautiful home decor to intricate jewelry, each piece is a work of art that reflects rich cultural heritage.
          </p>
          <div>
            <button className="Home-Explore-Section-Card1-btn1">Learn More</button>
            <button className="Home-Explore-Section-Card1-btn2">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="blog-section pt-5 pb-5">
  <div className="container">
    <div className="row text-center">
      <h2 className="blog-section-heading mb-5">Latest Blogs</h2>

      <div className="col-12 col-md-4">
        <div className="blog-card">
          <img
            className="blog-card-img"
            src="https://img.freepik.com/free-photo/terracotta-vase-with-indigenous-pattern_23-2151585688.jpg?semt=ais_hybrid"
            alt="Blog 1"
          />
          <div className="blog-card-body">
            <h4 className="blog-card-title">The Evolution of Tribal Handicrafts</h4>
            <p className="blog-card-description">
              Explore the rich history and evolution of tribal handicrafts, showcasing how traditional methods have evolved over time while preserving the essence of the culture.
            </p>
            <button className="blog-card-btn">Read More</button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="blog-card">
          <img
            className="blog-card-img"
            src="https://img.freepik.com/free-photo/terracotta-vase-with-indigenous-pattern_23-2151585718.jpg?semt=ais_hybrid"
            alt="Blog 2"
          />
          <div className="blog-card-body">
            <h4 className="blog-card-title">Empowering Tribal Artisans</h4>
            <p className="blog-card-description">
              Discover the stories of artisans whose lives have been transformed through skill development and the promotion of their unique crafts.
            </p>
            <button className="blog-card-btn">Read More</button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="blog-card">
          <img
            className="blog-card-img"
            src="https://img.freepik.com/free-photo/terracotta-vase-with-indigenous-pattern_23-2151585706.jpg?semt=ais_hybrid"
            alt="Blog 3"
          />
          <div className="blog-card-body">
            <h4 className="blog-card-title">Sustainable Craftsmanship</h4>
            <p className="blog-card-description">
              Learn about the sustainability practices behind tribal crafts and how they contribute to environmental preservation and community empowerment.
            </p>
            <button className="blog-card-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




        <div className="bs-2">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Carousel/>
              </div>
              <div className="col-6">
                <div className="text-center">
                <img className="bs-img" src="https://tribalartindia.com/wp-content/uploads/2021/07/tribal-art-india-1.jpg" />
                </div>
              </div>

              
            </div>
          </div>
          
        </div>



        <div className="about-us-section pt-5 pb-5">
  <div className="container">
    <div className="row">
      <div className="col-12 col-lg-6">
        <img
          className="about-us-img"
          src="https://img.freepik.com/free-photo/neolithic-period-elements_23-2151786551.jpg?semt=ais_hybrid"
          alt="About Us"
        />
      </div>
      <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
        <h2 className="about-us-heading">About Us</h2>
        <p className="about-us-description mt-3">
          Our mission is to promote and preserve the rich cultural heritage of tribal communities by providing a platform for their unique and authentic handicrafts. By connecting artisans with a global audience, we empower them economically, promote sustainable practices, and ensure that their traditions and skills are passed on to future generations.
        </p>
        <p className="about-us-description">
          Each handcrafted piece tells a story of tradition, creativity, and the enduring spirit of these communities. Join us in supporting tribal artisans by exploring their beautiful, one-of-a-kind creations.
        </p>
        <button className="about-us-btn mt-4">Learn More</button>
      </div>
    </div>
  </div>
</div>





        <div className="tribal-handicrafts-section pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-5 mb-5">
                <div className="text-center">
                    <img className="tribal-handicrafts-section-img" src="https://lifencolors.in/cdn/shop/products/2eeb6d_059f0dfcf5444f1aa9da728d01e055b9_mv2_13945052-1635-43ec-8f71-79cd441c1045.jpg?v=1693806878&width=1946" alt="Tribal Handicrafts" />
                </div>
            </div>
            <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
                <h1 className="tribal-handicrafts-section-heading">
                    Unique, Authentic, Handcrafted Tribal Art
                </h1>
                <p className="tribal-handicrafts-section-description">
                    Discover the beauty and cultural significance of tribal handicrafts, made by skilled artisans. Each piece tells a story of tradition, creativity, and sustainability. Support these talented artists by bringing their crafts into your home.
                </p>
            </div>
        </div>
    </div>
</div>





        <Footer/>
    </div>
  )
}

export default UserHome