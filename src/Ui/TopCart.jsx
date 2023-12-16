import {
  PlayCircleFilled,
  DownCircleFilled,
  LeftCircleFilled,
  RightCircleFilled,
  HeartOutlined,
} from "@ant-design/icons";
export default function TopCart() {
  return (
    // <>
    <div className="topcart">
      {/*  */}
      <div className="firstcart">
        <p>Treding this week</p>
        <div class="firstcartfirstimg">
          <img src="pexels-photo-9434329.jpeg" alt="Cinque Terre" />
          <div className="Titile">
            <p>Good life project</p>
            <p>photography</p>
          </div>
          <div class="TimePause">
            <p>50:00min</p>
            {<PlayCircleFilled />}
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="secontcart">
        <div className="secountcarttop">
          <div>
            Treding Podcasts in
            <span className="inpiration">
              inspiration{<DownCircleFilled />}
            </span>
          </div>
          <div className="right-left-icon">
            <span>{<LeftCircleFilled className="righticon-left" />}</span>
            <span>{<RightCircleFilled className="righticon-left" />}</span>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="secountcart">
          <div className="secountcartimg">
            <img
              className="firstcartimages"
              src="woman-332278_1280.jpg"
              alt="img"
            ></img>
            <div className="absoluteicon">
              <p>{<HeartOutlined className="hearticon" />}</p>
              <p>{<PlayCircleFilled />}</p>
            </div>
            <div>
              <p1 style={{ color: "white" }}>Earn your Happy</p1>
              <div className="footertime">
                <p2>loki harder</p2>
                <p3 className="icon-time ">
                  <img className="timeicon" src="1214197.webp" alt=""></img>
                  <span> 1hr 50 min</span>
                </p3>
              </div>
            </div>
          </div>
          <div className="secountcartimg">
            <img
              className="firstcartimages"
              src="sunset-3392348_1280.jpg"
              alt="img"
            ></img>
            <div className="absoluteicon">
              <p>{<HeartOutlined className="hearticon" />}</p>
              <p>{<PlayCircleFilled />}</p>
            </div>
            <div>
              <p1 style={{ color: "white" }}>The mind your Business</p1>
              <div className="footertime">
                <p2>james wedmore</p2>
                <p3 className="icon-time ">
                  <img className="timeicon" src="1214197.webp" alt=""></img>
                  <span> 30:50 min</span>
                </p3>
              </div>
            </div>
          </div>
          <div className="secountcartimg">
            <img
              className="firstcartimages"
              src="kid-2252145_1280.jpg"
              alt="img"
            ></img>
            <div className="absoluteicon">
              <p>{<HeartOutlined className="hearticon" />}</p>
              <p>{<PlayCircleFilled />}</p>
            </div>
            <div>
              <p1 style={{ color: "white" }}>The art of Charm</p1>
              <div className="footertime">
                <p2>as johnny</p2>
                <p3 className="icon-time ">
                  <img className="timeicon" src="1214197.webp" alt=""></img>
                  <span>58:00 min</span>
                </p3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </>
  );
}
