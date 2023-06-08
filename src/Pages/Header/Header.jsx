// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import headerImage1 from '../../assets/headerImage1.jpg'
import headerImage2 from '../../assets/headerImage2.jpg'
import headerImage3 from '../../assets/headerImage5.jpg'
import Button from "../../components/Button";
const Header = () => {
    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide >
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${headerImage1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5   text-4xl font-bold">Masco Cricket Performance Academy</h1>
                                <p className="mb-5">A learning space for youths to attend high standard of cricket, athleticism & effective decision making</p>
                                <Button buttonText={"Book A Trial Session"}></Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${headerImage2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Masco Cricket Performance Academy</h1>
                                <p className="mb-5">A learning space for youths to attend high standard of cricket, athleticism & effective decision making</p>
                                <Button buttonText={"Book A Trial Session"}></Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${headerImage3})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Masco Cricket Performance Academy</h1>
                                <p className="mb-5">A learning space for youths to attend high standard of cricket, athleticism & effective decision making</p>
                                <Button buttonText={"Book A Trial Session"}></Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Header;


// https://elitecricketpa.com/our-coaching-team/