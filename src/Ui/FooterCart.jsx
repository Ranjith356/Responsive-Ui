import {
  LeftCircleFilled,
  RightCircleFilled,
  PlayCircleFilled,
  CreditCardFilled,
  CustomerServiceFilled,
  FrownOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
export default function FooterCart() {
  return (
    <>
      <div className="footer">
        <div className="footer-class">
          <div className="footer-first-nav">
            <p className="popular-categries">papular podcasts</p>
            <ul className="nav">
              <li>ALL</li>
              <li>Exclusive</li>
              <li>News&Politics</li>
              <li>Music</li>
              <li>Business</li>
              <li>Health</li>
            </ul>
            <p className="next-reverse-button">
              <span>{<LeftCircleFilled className="righticon-left" />}</span>
              <span>{<RightCircleFilled className="righticon-left" />}</span>
            </p>
          </div>
          <div className="vidieos">
            <div className="vidieos">
              <img src="people-3407083_1280.jpg" alt="img"></img>
              <div>
                <p className="footer-titile">How to take big decision</p>
                <p className="singer">tom heard</p>
                <p className="timer">
                  {<PlayCircleFilled />}
                  <span>1 hr 20 min</span>
                </p>
              </div>
            </div>
            <div className="vidieos">
              <img src="time-4095294_1280.jpg" alt="img"></img>
              <div>
                <p className="footer-titile">Time management skills</p>
                <p className="singer">The is important</p>
                <p className="timer">
                  {<PlayCircleFilled />}
                  <span>47:00min</span>
                </p>
              </div>
            </div>
            <div className="vidieos">
              <img src="baby-2717347_1280.jpg" alt="img"></img>
              <div>
                <p className="footer-titile">The new family</p>
                <p className="singer">kindergent child</p>
                <p className="timer">
                  {<PlayCircleFilled />}
                  <span>57:00min</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />

        {/*  */}
        <div className="Buttom-footer">
          <div className="names">
            <p className="popular-categries">popular categories</p>
            <p className="popular-categries">Popular podcasts</p>
          </div>
          <div className="Buttom-footer-final">
            <div className="finalfoter">
              <div className="multiuse">
                <i>{<CreditCardFilled className="icon-final-footer" />}</i>
                <p className="pera">
                  Business
                  <br />
                  <span className="prodcastCount">190Prodcasts</span>
                </p>
              </div>
              <div className="multiuse">
                <i>{<CustomerServiceFilled className="icon-final-footer" />}</i>
                <p className="pera">
                  Business
                  <br />
                  <span className="prodcastCount">190Prodcasts</span>
                </p>
              </div>
              <div className="multiuse">
                <i>{<FrownOutlined className="icon-final-footer" />}</i>
                <p className="pera">
                  Business
                  <br />
                  <span className="prodcastCount">190Prodcasts</span>
                </p>
              </div>
              <div className="multiuse">
                <i>{<GlobalOutlined className="icon-final-footer" />}</i>
                <p className="pera">
                  Business
                  <br />
                  <span className="prodcastCount">190Prodcasts</span>
                </p>
              </div>
              <div className="showall">
                <p>Show all</p>
                {<ArrowRightOutlined />}
              </div>
            </div>

            <div className="footer-secont-cart">
              <div className="followers">
                <div className="followrs-icon">
                  <img
                    className="footerimg"
                    src="pexels-photo-220453.webp"
                    alt="img"
                  ></img>
                  <p>john doe</p>
                </div>
                <p className="prodcastCount">700: followrs</p>
              </div>
              <div className="followers">
                <div className="followrs-icon">
                  <img
                    className="footerimg"
                    src="ranjithphoto.jpg"
                    alt="img"
                  ></img>
                  <p>john doe</p>
                </div>
                <p className="prodcastCount">1000:followrs</p>
              </div>
              <div className="view-more">
                <p>view more</p>
                {<CaretDownOutlined />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
