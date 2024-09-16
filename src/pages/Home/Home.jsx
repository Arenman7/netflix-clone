import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem aliquid obcaecati est aspernatur voluptate natus
            consectetur!
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              more info
            </button>
          </div>
          <TitleCards title={'Upcoming'} category={'upcoming'} />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={'Popular'} category={'popular'} />
        <TitleCards title={'Now Playing'} category={'now_playing'} />
        <TitleCards title={'Top Rated'} category={'top_rated'} />
        <TitleCards title={'Upcoming'} category={'upcoming'} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
