import React from 'react';
import { Carousel } from 'antd';
import './App.css';

const contentStyle = {
  objectFit: "contain",
  height: "40vw",
  width: "80vw",
  background: "#1F2C5C",
};

const App = () => (
  <div className="App">
    <div style={{
      background: "#0F162E",
      height: "100vh",
      width: "100vw",
      paddingLeft: "10vw",
      paddingRight: "10vw",
      paddingTop: "10vh",
      paddingBottom: "20vh",

    }}>
      <Carousel effect="fade" autoplay>
        <div>
          <img src="img/Landscape_1.png" alt="banner" style={contentStyle} />
        </div>
        <div>
          <img src="img/Landscape_2.png" alt="banner" style={contentStyle} />
        </div>
        <div>
          <img src="img/Landscape_3.png" alt="banner" style={contentStyle} />
        </div>
        <div>
          <img src="img/Landscape_4.png" alt="banner" style={contentStyle} />
        </div>
        <div>
          <img src="img/Landscape_5.png" alt="banner" style={contentStyle} />
        </div>
        <div>
          <img src="img/Landscape_6.png" alt="banner" style={contentStyle} />
        </div>
      </Carousel>
      <div>
        <a href='https://play.google.com/store/apps/details?id=xyz.sinha.avijit.grids&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
          <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' style={{
            marginTop: "3vh",
            objectFit: "contain",
            maxHeight: "7vh",
            maxWidth: "30vw",
          }} />
        </a>
      </div>
    </div>
  </div>
);

export default App;
