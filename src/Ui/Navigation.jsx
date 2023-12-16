import {
  CompassOutlined,
  FolderAddFilled,
  StarOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
export default function Navigation() {
  return (
    <div className="naivgation">
      <div className="headphone">
        <img className="img" src="headphones-4-xxl.png" alt="img"></img>
        <p className="pera1">
          <span className="inline">pod</span>pro
        </p>
      </div>
      <div className="icon">
        <a href="hi">{<CompassOutlined />}</a>
        <a href="hi">{<StarOutlined />}</a>
        <a href="hi">{<FolderAddFilled />}</a>
        <a href="hi">{<BellOutlined />}</a>
        <a href="hi">{<SettingOutlined />}</a>
      </div>
    </div>
  );
}
