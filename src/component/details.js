import React, { useState } from 'react';
import '../styles/details.css'
import LoginForm from './form'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/styles.css';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
export default function Details() {
    const [showComponent, setShowComponent] = useState(false);
    const handleClick = () => {
        setShowComponent(!showComponent);
    };
    const dummyData = [
        { id: 1, imgUrl: '/assets/images/1e3c6c18-a082-4348-9089-66a887b81610.jpg' },
        { id: 2, imgUrl: '/assets/images/3d1360fc-228c-49fe-a777-52c9fa564e8a.jpg' },
        { id: 3, imgUrl: '/assets/images/20474329-5979-4a87-88f6-5b0a3585aba6.jpg' },
        { id: 3, imgUrl: '/assets/images/4d799c5c-dcca-4db5-a195-6e9ed10db051.jpg' },
        { id: 3, imgUrl: '/assets/images/63b02ff9-39b7-4fbe-b429-90008df3aef0.jpg' },
        { id: 3, imgUrl: '/assets/images/9976c06e-25d3-4769-8ce1-a169ee1ddd75.jpg' },
        { id: 3, imgUrl: '/assets/images/a2466820-d082-4130-af58-b8fbfbdc84a2.jpg' },
        { id: 3, imgUrl: '/assets/images/745c7962-6597-4dd9-adde-4dd7a5705ef7.jpg' },
        { id: 3, imgUrl: '/assets/images/c0b7201f-a072-4530-8fd5-40b0dcc6bc6b.jpg' },
    ];
    return (
        <>
            <div className="Main_container">
                <a href='/' className='backarrow'>
                    <img src='/assets/images/BackIcon-97c7cb7f627094b2bccea4e77ac2acdb.svg' alt='backIcon' className='imgDiv' />
                </a>
                <div className="house_container">
                    <div className="updated">
                        <p>Last Updated:<span className="time"> 20 November, 2023</span></p>
                        <h1 className="bedroom_detail">1 BHK
                            for rent in doddakannalli, bengaluru</h1>
                        <div className="last_details">Only for Family
                            <span className="line"></span>
                            <span>2 Bedroom AVailable</span>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={12}
                        // slidesPerGroup={2}
                        speed={1000}
                        grabCursor={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        breakpoints={{
                            480: {
                                slidesPerView: 1,
                            },

                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        classNameName="mySwiper"
                    >
                        {dummyData?.map((item, i) => (
                            <SwiperSlide key={i}>
                                <img src={item.imgUrl} alt=""></img>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="house_details">
                        <p className="house_info">Rent this house at</p>
                        <div className="details_list">
                            <div className="details">
                                <span className="details_deposit">Rent from :
                                    <span className="price">₹13,200</span></span>
                            </div>
                            <div className="border_line"></div>
                            <div className="details">
                                <span className="details_deposit">Security Deposit :
                                    <span className="price">Just 2 months rent</span>
                                </span></div>
                        </div>
                    </div>
                    <div className="underline"></div>
                    <div className="about">
                        About House
                        <p className="paragraph">Rent an independent_apartment house in Doddakannalli.Nestled in the Eastern zone of Bangalore.One can rent this beautiful house for 13200 and 2 months as security .</p>
                    </div>
                    <div className="underline"></div>
                    <div className="house_amenties">
                        <h2>House Amenities</h2>
                        <div className="amenityWidget">
                            <section>
                                <div className="house_amenties">
                                    <div className="lineTitle rightLine">
                                        <span className="">living room</span></div>
                                    <div className="photoSection">
                                        <img src="/assets/images/1e3c6c18-a082-4348-9089-66a887b81610.jpg" width="220" height="160" alt="house_photos" /></div>
                                    <ul className="houseAmenitiesList">
                                        <li className="active">
                                            <span className="icon">
                                                <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Switch" /></span>
                                            <span className="text">Switch </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Light" /></span>
                                            <span className="text">Light </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Fan" /></span>
                                            <span className="text">Fan </span></li>
                                    </ul>
                                </div>
                                <div className="house_amenties">
                                    <div className="lineTitle rightLine">
                                        <span className="">Bedroom</span></div>
                                    <div className="photoSection">
                                        <img src="/assets/images/thumb_large_3d1360fc-228c-49fe-a777-52c9fa564e8a.webp" width="220" height="160" alt="house_photos" /></div>
                                    <ul className="houseAmenitiesList">
                                        <li className="active">
                                            <span className="icon">
                                                <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Switch" /></span><span className="text">Switch </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Light" /></span>
                                            <span className="text">Light </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Fan" /></span>
                                            <span className="text">Fan </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Wardrobe" /></span>
                                            <span className="text">Wardrobe </span></li>
                                    </ul>
                                </div>
                                <div className="house_amenties">
                                    <div className="lineTitle rightLine">
                                        <span className="">Bathroom</span></div>
                                    <div className="photoSection">
                                        <img src="/assets/images/a2466820-d082-4130-af58-b8fbfbdc84a2.jpg" width="220" height="160" alt="house_photos" /></div>
                                    <ul className="houseAmenitiesList">
                                        <li className="active">
                                            <span className="icon">
                                                <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Switch" /></span>
                                            <span className="text">Switch </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Light" /></span>
                                            <span className="text">Light </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Fan" /></span>
                                            <span className="text">Tap </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Sink" /></span>
                                            <span className="text">Sink </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/geyser-f49cd035d5dc12cfe9e43ec62c189532.svg" alt="Gyser" /></span>
                                            <span className="text">Geyser </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Bathroom mirror" /></span>
                                            <span className="text">Bathroom Mirror </span></li>
                                    </ul>
                                </div>
                                <div className="house_amenties">
                                    <div className="lineTitle rightLine">
                                        <span className="">kitchen</span></div>
                                    <div className="photoSection">
                                        <img src="/assets/images/thumb_large_357da7d8-fa14-47d9-a09c-4630961c7cee.webp" width="220" height="160" alt="house_photos" /></div>
                                    <ul className="houseAmenitiesList">
                                        <li className="active">
                                            <span className="icon">
                                                <img width="18" height="18" src="/assets/images/modular_kitchen-2474270403574dd292241bb53c6e7d79.svg" alt="Modular kitchen" /></span>
                                            <span className="text">Modular Kitchen</span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Tap" /></span>
                                            <span className="text">Tap </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Sink" /></span>
                                            <span className="text">Sink</span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/hdp_default_amenity_icon-93c4c9cb638543aa47aed5a168047c21.svg" alt="Chimney" /></span>
                                            <span className="text">Chimney</span></li>
                                    </ul>
                                </div>
                                <div className="house_amenties">
                                    <div className="lineTitle rightLine">
                                        <span className="">Society Amenity</span></div>
                                    <ul className="houseAmenitiesList">
                                        <li className="active">
                                            <span className="icon">
                                                <img width="18" height="18" src="/assets/images/gym-9e5c3e018ea4f5387f853ed40afcf1c9.svg" alt="Gym" /></span>
                                            <span className="text">Gym </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/lift-5795310b787f39d95485bc4332fbb653.svg" alt="Lift" /></span>
                                            <span className="text">Lift </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/security-67aca53d4e22522e459d6f1ac99553bb.svg" alt="Security" /></span>
                                            <span className="text">Security </span></li>
                                        <li className="active"><span className="icon">
                                            <img width="18" height="18" src="/assets/images/swimming_pool-46576927daaed5e5de909d7b46d5bc2b.svg" alt="Swimming Pool" /></span>
                                            <span className="text">Swimming Pool </span></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="underline"></div>
                    <div className="house_amenties">
                        <h2>For this house...</h2>
                        <p>Nestaway is responsible for</p>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.357 342.357" fill="undefined" className="bragIcon"><polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606"></polygon></svg>
                                Showing this house
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.357 342.357" fill="undefined" className="bragIcon"><polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606"></polygon></svg>
                                Booking confirmation with owner
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.357 342.357" fill="undefined" className="bragIcon"><polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606"></polygon></svg>
                                Creating rental agreement with owner
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.357 342.357" fill="undefined" className="bragIcon"><polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606"></polygon></svg>
                                Post move-in services and maintenance at nominal prices
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.357 342.357" fill="undefined" className="bragIcon"><polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606"></polygon></svg>
                                Returning deposit at the time of move-out
                            </li>
                        </ul>
                    </div>
                    <div className="more_info">
                        <button onClick={handleClick} className="view_details">Book</button>
                    </div>
                </div>
                {showComponent && <LoginForm />}
            </div>
        </>
    );
}