import imageLogo from "../../public/images/logo.png";
import "boxicons";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-top">
            <img src={imageLogo} alt="" />
            <p className="phone"> +00 9875466</p>
          </div>

          <div className="header-bottom">
            <ul className="nav-header">
              <li>Home</li>
              <li className="nav-li-muc">
                About us
                <box-icon name="chevron-down" size="sm" color="#fff"></box-icon>
              </li>
              <li>Project</li>
              <li>Service</li>
              <li className="nav-li-muc">
                News & Event
                <box-icon name="chevron-down" size="sm" color="#fff"></box-icon>
              </li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="detail-name">
            <div className="name-main">
              <p className="main-name-slide">
                Building For <br></br>
                <span className="gr">
                  Green <p> Energy</p>
                </span>
              </p>
            </div>
            <div className="detail-name-slide">
              What level is your English at? What does your current English
              ability say? Which Cambridge certificate is best for you? Let`s
              test your level with FLYER`s general English test! Completely free
              and you will receive results immediately after taking the test!
            </div>
          </div>
        </div>
          <div className="next-pr-slide">
            <div className="experience">
              <h1>15</h1>
              <p>experience</p>
            </div>
            <div className="slide-image-01"></div>
            <div className="slide-image-02"></div>
          </div>
      </div>
    </>
  );
};

export default Header;
