import React from 'react';
// import Carousel from '../shared/components/Carousel';
import { Carousel } from 'react-responsive-carousel';


export default function SareeScreen() {

    return (
        <div className='books'>

            <div className='books2'>
                
                    <h1>Contact Us Page</h1>
                    {/* <img src="/image/p10.jpg" alt="book1" width="1320px" height="300px" /> */}
                    <div className="carousel-item">
                        <Carousel showArrows autoPlay showThumbs={true}>
                            {/* <img className="d-block w-100" src="/image/p11.jpg" alt=""></img> */}
                            {/* <img className="d-block w-100" src="/image/p11.jpg" alt="" height="30px"></img> */}
                            <img className="d-block w-100" src="/image/p12.jpg" alt=""></img>
                            <img className="d-block w-100" src="/image/p91.jpg" alt=""></img>
                            <img className="d-block w-100" src="/image/p10.jpg" alt=""></img>
                            {/* <img className="d-block w-100" src="/image/book6.jpg" alt=""></img>
                            <img className="d-block w-100" src="/image/book7.jpg" alt=""></img>
                            <img className="d-block w-100" src="/image/book8.jpg" alt=""></img> */}
                        </Carousel>
                    </div>
               
            </div>

        </div >

    )
};