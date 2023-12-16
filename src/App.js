import CenterColoumTopnav from "./Ui/CenterColoumTopnav";
import FinalUi from "./Ui/FinalUi";
import FooterCart from "./Ui/FooterCart";
import Navigation from "./Ui/Navigation";
import Thirdcartui from "./Ui/Thirdcartui";
import TopCart from "./Ui/TopCart";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <CenterColoumTopnav />
        <TopCart />
        <Thirdcartui />
        <FooterCart />
        <FinalUi />
      </div>
    </>
  );
}

export default App;
