import { useState } from 'react'
import viteLogo from '/vite.svg'
import './page2.css'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RectangleEnigma from '../assets/RectangleEnigma.svg'
import NFT2 from '../assets/NFT2.svg'
import Ellipse from '../assets/Ellipse.svg'
import Facebook from '../assets/Facebook.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import twitter from '../assets/twitter.svg'
import RectangleAnswer from '../assets/RectangleAnswer.svg'
import RectangleEnterAnswer from '../assets/RectangleEnterAnswer.svg'
import RectangleBet from '../assets/RectangleBet.svg'

function Page2() {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    // Scroll down 1000 pixels when the button is clicked, you can adjust the value as needed
    window.scrollTo({
      top: 950,
      behavior: 'smooth', // This adds a smooth scrolling effect
    });
  };
  const top = () => {
    // Scroll down 1000 pixels when the button is clicked, you can adjust the value as needed
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This adds a smooth scrolling effect
    });
  };

  return (
    <>
    <div className="slide-169-3">
      <div className="slide-169-3-child" />
      <div className="slide-169-3-item" />
      <div className="slide-169-3-inner" />
      <b className="lotterie-001">Lotterie #001</b>
      <div className="top">
      <Link to="/"><div className="denignma">Denignma</div></Link>
      <Link to="/page1"><div className="my-account">my Account</div></Link>

      </div>
      <div className="bottom">
      <Link to="/"><div className="denignma" onClick={top}>Denignma</div></Link>
      <Link to="/page1"><div className="my-account1" onClick={top}>my Account</div></Link>
        <div className="play-lotterie">play lotterie</div>
        <img className="facebook-icon" alt="" src={Facebook} />
        <img className="twitter-icon" alt="" src={twitter} />
        <img className="group-icon" alt="" src={LinkedIn} />
      </div>
      <div className="enigma">
        <b className="enigma1">Enigma</b>
        <div className="i-am-a-container">
          <span className="i-am-a-container1">
            <p className="i-am-a">I am a digital ledger, secure and true,</p>
            <p className="i-am-a">Blocks of data, in a chain I accrue.</p>
            <p className="i-am-a">Decentralized and encrypted, what am I?</p>
            <p className="i-am-a">A technology that makes transactions fly.</p>
          </span>
        </div>
        <div className="i-am-a-container2">
          <span className="i-am-a-container1">
            <p className="i-am-a">I am a digital ledger, secure and true,</p>
            <p className="i-am-a">Blocks of data, in a chain I accrue.</p>
            <p className="i-am-a">Decentralized and encrypted, what am I?</p>
            <p className="i-am-a">A technology that makes transactions fly.</p>
          </span>
        </div>
        <div className="answer">
          <div className="email-grou">
          <img className="email-grou-child" alt="" src={RectangleEnterAnswer} />
            <div className="enter-answer">Enter answer</div>
          </div>
          <div className="vector-parent">
            <img className="frame-child" alt="" src={RectangleAnswer} />
            <div className="answer1">Answer</div>
          </div>
        </div>
        <div className="answer2">
          <div className="email-grou">
            <img className="email-grou-child" alt="" src={RectangleEnterAnswer} />

            <div className="enter-answer">Enter answer</div>
          </div>
          <div className="vector-parent">
            <img className="frame-child" alt="" src={RectangleAnswer} />
            <div className="answer1">Answer</div>
          </div>
        </div>
        <div className="numro">
          <img className="numro-child" alt="" src={Ellipse} />

          <div className="div">1</div>
        </div>
        <div className="numro1">
          <img className="numro-child" alt="" src={Ellipse} />

          <div className="div1">2</div>
        </div>
      </div>
      <b className="bets">Bets</b>
      <div className="numro2">
        <img className="numro-child" alt="" src={Ellipse} />

        <div className="div">1</div>
      </div>
      <div className="btc">BTC</div>
      <div className="line-div" />
      <div className="in-1-week">40.000$ in 1 week</div>
      <div className="in-1-week1">35.000$ in 1 week</div>
      <button className="button">
        <img className="button-child" alt="" src={RectangleBet} />
        <b className="bet">BET</b>
      </button>
      <button className="button1">
        <img className="button-child" alt="" src={RectangleBet} />
        <b className="bet">BET</b>
      </button>
      <img
        className="unsplashpvoepplw818-icon"
        alt=""
        src={NFT2}
      />
    </div>
    </>
  )
}

export default Page2
