import {
  HeartOutlined,
  SearchOutlined,
  BellOutlined,
  DownCircleFilled,
} from "@ant-design/icons";
export default function CenterColoumTopnav() {
  return (
    <>
      <div className="Topnav">
        <div className="search">
          <label for="fname">{<SearchOutlined />}</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="search something..."
          />
        </div>
        <div className="Rightsideicons">
          <i>{<HeartOutlined className="Hearticon" />}</i>
          <i>{<BellOutlined className="Bellicon" />}</i>
          <div>
            <img
              className="iconimage"
              src="pexels-photo-220453.webp"
              alt="img"
            ></img>
          </div>
          <div className="topicon">
            <span>Michal Rome</span>
            <span style={{ color: "rgb(128, 128, 128)" }}>
              ranjithsurya02@gmail.com
            </span>
          </div>
          <span>{<DownCircleFilled className="downearo" />}</span>
        </div>
      </div>
      <p style={{ color: "white", fontSize: "4vh", marginLeft: "18vh" }}>
        DISCOVER PODCASTS
      </p>
    </>
  );
}
