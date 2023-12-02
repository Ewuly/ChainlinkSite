import { useState } from 'react'
import './page1.css'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RectangleEnigma from '../assets/RectangleEnigma.svg'
import NFT2 from '../assets/NFT2.svg'
import Facebook from '../assets/Facebook.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import twitter from '../assets/twitter.svg'



function Page1() {

  const top = () => {
    // Scroll down 1000 pixels when the button is clicked, you can adjust the value as needed
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This adds a smooth scrolling effect
    });
  };

  return (
    <>
    <div className="slide-169-2">
      <div className="slide-169-2-child" />
      <div className="slide-169-2-item" />
      <div className="slide-169-2-inner" />
      <b className="dashboard">Dashboard</b>
      <div className="top">
      <Link to="/"><div className="denigma">Denigma</div></Link>

        <b className="my-account">my Account</b>
      </div>
      <div className="bottom">
      <Link to="/"><div className="denigma" onClick={top}>denigma</div></Link>

        <div className="my-account1" onClick={top}>My account</div>
        <div className="play-lotterie">play lotterie</div>
        <img className="facebook-icon" alt="" src={Facebook} />
        <img className="twitter-icon" alt="" src={twitter} />
        <img className="group-icon" alt="" src={LinkedIn} />
      </div>
      <div className="raffle">
        <div className="lotterie">
          <div className="lotterie-child" />
          <div className="state-0">State 0</div>
          <div className="nft-1">NFT 1</div>
          <img
            className="unsplashpvoepplw818-icon"
            alt=""
            src={NFT2}
          />
        </div>
        <div className="lotterie1">
          <div className="lotterie-child" />
          <div className="state-0">State 1</div>
          <div className="nft-1">NFT 2</div>
          <img
            className="unsplashpvoepplw818-icon"
            alt=""
            src={NFT2}
          />
        </div>
        <button className="button">
          <img className="button-child" alt="" src={RectangleEnigma} />
      <Link to="/page2"><div className="answer-enigmas" onClick={top}>Answer enigmas</div></Link>

        </button>
        <b className="raffle-1">Raffle 1</b>
      </div>
      <div className="raffle1">
        <div className="lotterie">
          <div className="lotterie-inner" />
          <div className="state-0">State 0</div>
          <div className="nft-1">NFT 1</div>
          <img
            className="unsplashpvoepplw818-icon"
            alt=""
            src={NFT2}
          />
        </div>
        <div className="lotterie1">
          <div className="lotterie-inner" />
          <div className="state-0">State 1</div>
          <div className="nft-1">NFT 2</div>
          <img
            className="unsplashpvoepplw818-icon"
            alt=""
            src={NFT2}
          />
        </div>
        <button className="button">
          <img className="button-child" alt="" src={RectangleEnigma} />
          <Link to="/page2"><div className="answer-enigmas" onClick={top}>Answer enigmas</div></Link>
        </button>
        <b className="raffle-2">Raffle 2</b>
      </div>
    </div>
    </>
  )
}

export default Page1
