import {
  PlayCircleFilled,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
export default function Thirdcartui() {
  return (
    <div className="thirtcart">
      <div className="thirt">
        <p>Now Playing</p>
        <img
          className="thircartimg"
          src="girl-6356393_1280.webp"
          alt="img"
        ></img>
        <p>Rain mode</p>
        <p className="singer">Dr.Unnikrishnan</p>
        <hr className="code" />
        <p className="Time-count">
          <span>17:46</span>
          <span>30:35</span>
        </p>
        <p className="Play-button">
          <i>{<CaretLeftOutlined className="left-button" />}</i>
          <i>{<PlayCircleFilled className="pause-button" />}</i>
          <i>{<CaretRightOutlined className="right-button" />}</i>
        </p>
      </div>
    </div>
  );
}
