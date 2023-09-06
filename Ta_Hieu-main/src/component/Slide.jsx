import Slider from "react-slick";
import imageSlide01 from "../../public/images/image03.png";
const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container">
        <div className="slide-top">
          <div className="slide-top-left">
            <p className="name-slide">News</p>
            <h1 className="name-main-slide">Lastest News</h1>
          </div>
          <div className="slide-top-right">
            <p className="see-more">See more</p>
          </div>
        </div>
        <div className="slide-bottom">
          <Slider {...settings}>
            <div>
              <div className="slide-item-main">
                <div className="image-slide">
                  <img src={imageSlide01} alt="" />
                </div>
                <div className="main-slide-content">
                  <p className="date-slide">26.04.2022 / Event</p>
                  <p className="main-content-slide">
                    Lorem ipsum dolor sit amet consectetur. Quisque curabitur
                    nunc diam laoreet.
                  </p>
                  <p className="see">
                    SEE MORE{" "}
                    <box-icon name="plus" size="xs" color="#fff"></box-icon>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-item-main">
                <div className="image-slide">
                  <img src={imageSlide01} alt="" />
                </div>
                <div className="main-slide-content sdc">
                  <p className="date-slide ct">26.04.2022 / Event</p>
                  <p className="main-content-slide csd">
                    Lorem ipsum dolor sit amet consectetur. Quisque curabitur
                    nunc diam laoreet.
                  </p>
                  <p className="see csd">
                    SEE MORE{" "}
                    <box-icon name="plus" size="xs" color="#000"></box-icon>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-item-main">
                <div className="image-slide">
                  <img src={imageSlide01} alt="" />
                </div>
                <div className="main-slide-content sdc">
                  <p className="date-slide ct">26.04.2022 / Event</p>
                  <p className="main-content-slide csd">
                    Lorem ipsum dolor sit amet consectetur. Quisque curabitur
                    nunc diam laoreet.
                  </p>
                  <p className="see csd">
                    SEE MORE{" "}
                    <box-icon name="plus" size="xs" color="#000"></box-icon>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-item-main">
                <div className="image-slide">
                  <img src={imageSlide01} alt="" />
                </div>
                <div className="main-slide-content sdc">
                  <p className="date-slide ct">26.04.2022 / Event</p>
                  <p className="main-content-slide csd">
                    Lorem ipsum dolor sit amet consectetur. Quisque curabitur
                    nunc diam laoreet.
                  </p>
                  <p className="see csd">
                    SEE MORE{" "}
                    <box-icon name="plus" size="xs" color="#000"></box-icon>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-item-main">
                <div className="image-slide">
                  <img src={imageSlide01} alt="" />
                </div>
                <div className="main-slide-content sdc">
                  <p className="date-slide ct">26.04.2022 / Event</p>
                  <p className="main-content-slide csd">
                    Lorem ipsum dolor sit amet consectetur. Quisque curabitur
                    nunc diam laoreet.
                  </p>
                  <p className="see csd">
                    SEE MORE{" "}
                    <box-icon name="plus" size="xs" color="#000"></box-icon>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-item-main">
                <div className="image-slide">
                  <img src={imageSlide01} alt="" />
                </div>
                <div className="main-slide-content sdc">
                  <p className="date-slide ct">26.04.2022 / Event</p>
                  <p className="main-content-slide csd">
                    Lorem ipsum dolor sit amet consectetur. Quisque curabitur
                    nunc diam laoreet.
                  </p>
                  <p className="see csd">
                    SEE MORE{" "}
                    <box-icon name="plus" size="xs" color="#000"></box-icon>
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Slide;
