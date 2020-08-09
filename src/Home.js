import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="a"
      />
      <div className="home__row">
        <Product
          id="1232"
          title="Marvel packache set from Marvel's world and Caption for half price"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81fo+89bcpL._AC_UL320_.jpg"
        />
        <Product
          id="1232"
          title="The Lean Startup: How Constant Innovation Creates massive results"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12323"
          title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display"
          price={1911.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SX679_.jpg"
        />
        <Product
          id="1232"
          title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor "
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX679_.jpg"
        />
        <Product
          id="1232"
          title="iPhone 7 Plus Case,AIRWEE Slim Anti-Scratch Shockproof Silicone TPU Back Protective Cover "
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/71EJx4W12tL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
