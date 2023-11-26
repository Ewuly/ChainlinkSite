import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NFT from './assets/Cryptocurrency.svg'
import Dollar from './assets/Dollar.svg'
import Facebook from './assets/Facebook.svg'
import Image from './assets/Image.svg'
import LinkedIn from './assets/LinkedIn.svg'
import twitter from './assets/twitter.svg'
import RectangleOrange from './assets/RectangleOrange.svg'

import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    // Scroll down 1000 pixels when the button is clicked, you can adjust the value as needed
    window.scrollTo({
      top: 950,
      behavior: 'smooth', // This adds a smooth scrolling effect
    });
  };

  return (
    <>
      <div className="slide-169-1">
      <div className="slide-169-1-child" />
      <div className="slide-169-1-item" />
      <div className="slide-169-1-inner" />
      <div className="featured-on">Featured on</div>
      <b className="play-and-win">Play and win some prizes</b>
      <div className="top">
        <button className="denignma">Denignma</button>
        <b className="about">About</b>
      </div>
      <div className="bottom">
        <div className="denigma">denigma</div>
        <div className="home">home</div>
        <div className="play-lotterie">play lotterie</div>
        <img className="facebook-icon" alt="" src="/facebook.svg" />
        <img className="twitter-icon" alt="" src="/twitter.svg" />
        <img className="group-icon" alt="" src="/group.svg" />
      </div>
      <div className="logos-parent">
        <div className="logos">
          <div className="logos-child" />
        </div>
        <b className="current-lotterie">Current lotterie</b>
      </div>
      <div className="logos-group">
        <div className="logos">
          <div className="logos-child" />
        </div>
        <b className="current-lotterie">Next lotterie</b>
      </div>
      <img
        className="cryptocurrency-1-icon"
        alt=""
        src={NFT}
      />
      <div className="lotterie">
        <div className="lotterie-child" />
        <button className="button">
          <img className="button-child" alt="" src={RectangleOrange} />
          <b className="enter">Enter</b>
        </button>
        <div className="eth">0.12 ETH</div>
        <img
          className="unsplashpvoepplw818-icon"
          alt=""
          src={Image}
        />
      </div>
      <button className="button1" onClick={handleButtonClick}>
        <img className="button-item" alt="" src={RectangleOrange} />
        <b className="discover">Discover</b>
      </button>
      <div className="lotterie1">
        <div className="lotterie-child" />
        <button className="button">
          <img className="button-child" alt="" src={RectangleOrange} />
          <b className="enter">Enter</b>
        </button>
        <div className="eth">0.12 ETH</div>
        <img
          className="unsplashpvoepplw818-icon"
          alt=""
          src={Image}
        />
      </div>
      <div className="lotterie2">
        <div className="lotterie-child" />
        <button className="button">
          <img className="button-child" alt="" src={RectangleOrange} />
          <b className="enter">Enter</b>
        </button>
        <div className="eth">0.12 ETH</div>
        <img
          className="unsplashpvoepplw818-icon"
          alt=""
          src={Image}
        />
      </div>
      <img className="dollar-1-icon" alt="" src={Dollar} />
      <div className="denigma-is-the">
        Denigma is the first dNFT’s Lotterie, buy some NFTs to try to win the
        prize, if not, sell it to a potential winner.
      </div>
    </div>
    </>
  )
}

export default App
