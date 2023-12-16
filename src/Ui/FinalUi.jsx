import { CaretDownOutlined } from "@ant-design/icons";
export default function FinalUi() {
  return (
    <div className="finalui">
      <div className="nav-right-left">
        <p className="recent-playlist">Recently played</p>
        <p className="my-favourite">My favourite</p>
      </div>
      <div className="Duck-card">
        <img
          className="Duck-lake"
          src="ai-generated-8444662_1280.webp"
          alt="img"
        ></img>
        <div>
          <p className="vidieo-comment-line">Go where the knowledge</p>
          <div className="Duck-vidieo-time">
            <p>Duck</p>
            <p>26 min</p>
          </div>
        </div>
      </div>
      <div className="Duck-card">
        <img
          className="Duck-lake"
          src="handsome-4133131_1280.jpg"
          alt="img"
        ></img>
        <div>
          <p className="vidieo-comment-line">Smart photo shot</p>
          <div className="Duck-vidieo-time">
            <p>Duck</p>
            <p>26 min</p>
          </div>
        </div>
      </div>
      <div className="Duck-card">
        <img
          className="Duck-lake"
          src="ai-generated-8446134_1280.webp"
          alt="img"
        ></img>
        <div>
          <p className="vidieo-comment-line">Happy for dog</p>
          <div className="Duck-vidieo-time">
            <p>Dog</p>
            <p>26 min</p>
          </div>
        </div>
      </div>
      <div className="Duck-card">
        <img
          className="Duck-lake"
          src="meerkat-8437027_1280.webp"
          alt="img"
        ></img>
        <div>
          <p className="vidieo-comment-line">Den mark</p>
          <div className="Duck-vidieo-time">
            <p>Anil</p>
            <p>30min</p>
          </div>
        </div>
      </div>
      <div className="view-more">
        <p>view more</p>
        {<CaretDownOutlined />}
      </div>
    </div>
  );
}
