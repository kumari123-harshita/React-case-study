import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import video from '../../Assets/video.mp4'
import './home.css';
import { GrLocation } from 'react-icons/gr';
import {FiFacebook} from 'react-icons/fi';
import {HiFilter} from 'react-icons/hi';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {BsList} from 'react-icons/bs';
import {TbApps} from 'react-icons/tb';
const Home = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
    } ,[])
    return (
        <section className="home">
            <div className="overlay"></div>
          {/*} <video src={video2} muted autoPlay loop type="video2/mp4"></video>*/}
           <video className='videoTag' autoPlay loop muted>
                <source src={video} type='video/mp4' />
    </video>
        

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up" className="hometitle">
                        Search Your Holiday
                    </h1>
                </div>
                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city"> Search Your Destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here...." />
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date"> Search Your Date:</label>
                        <div className="input flex">
                            <input type="date" />
                            
                        </div>
                    </div>

                    <div className="priceInput">
                       <div className="label_total flex">
                        <label htmlFor="price">
                            Max price:
                        </label>
                        <h3 className="total">$5000</h3>
                       </div>
                       <div className="input flex">
                        <input type="range" max="$5000" min="$1000" />
                        
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <HiFilter className="icon"/>
                        <span> MORE FILTERS </span>
                    </div>
                </div>
                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <AiOutlineInstagram className="icon"/>
                        <FaTripadvisor className="icon"/>
                    </div>

                    <div className="leftIcons">
                        <BsList className="icon"/>
                        <TbApps className="icon"/>
                        
                    </div>
                    
                </div>

            </div>




        </section>
    )
}
export default Home
