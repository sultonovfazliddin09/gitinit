    import React from "react";
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import Image from "../../assets/background.png";
    import Image1 from "../../assets/image copy 3.png";
    import Image2 from "../../assets/image copy 7.png";

    const Detail = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
        <div
            className="flex items-center justify-center h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${Image})` }}
        >
            <h1 className="text-4xl font-bold ">Watch Shop</h1>
        </div>

        <div className="w-1/2 mx-auto mt-8">
            <Slider {...settings}>
            <div className="flex justify-center">
                <img
                src={Image1}
                alt="Slide 1"
                className="max-w-full h-auto object-contain rounded-lg shadow-md"
                />
            </div>
            <div className="flex justify-center">
                <img
                src={Image2}
                alt="Slide 2"
                className="max-w-full h-auto object-contain rounded-lg shadow-md"
                />
            </div>
            </Slider>
        </div>

        <div className="w-4/5 mx-auto mt-12 mb-10 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 w-1/4 mx-auto">
            Foam filling cotton slow rebound pillows
            </h2>
            <p className="text-gray-600 leading-relaxed text-base w-1/2 mx-auto">
            Seamlessly empower fully researched growth strategies and
            interoperable internal or “organic” sources. Credibly innovate
            granular internal or “organic” sources whereas high standards in
            web-readiness. Credibly innovate granular internal or organic sources
            whereas high standards in web-readiness. Energistically scale
            future-proof core competencies vis-a-vis impactful experiences.
            Dramatically synthesize integrated schemas with optimal networks.
            </p>
        </div>
        </div>
    );
    };

    export default Detail;
