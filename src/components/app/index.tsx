import React from "react";
import { AppWrapper } from "./styles";
import {HeaderMobileComponent, HeaderComponent} from '../header';
import Line from '../line';
import MobilePanelsComponent from '../mobilePanels';
import SwiperComponent from '../swiper';
import FormsComponent from "../forms";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const App = () => {

  const [activeTabs, setActiveTabs] = React.useState<number>(0);
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [mobileVersion, setMobileVersion] = React.useState<boolean>(true);

  const onSetVersion = () => {
    if (document.documentElement.clientWidth >= 767) {
      setMobileVersion(false);
    } else {
      setMobileVersion(true);
    }
  }

  React.useEffect(() => {
    onSetVersion();
    window.addEventListener("resize", () => {
      onSetVersion();
    });
  }, []);

  return (
    <AppWrapper>
      <HeaderComponent/>
      <HeaderMobileComponent/>
      <MobilePanelsComponent activeTabs={activeTabs} setThumbsSwiper={setThumbsSwiper}/>
      <Line activeTabs={activeTabs}/>
      {mobileVersion ?
        <SwiperComponent thumbsSwiper={thumbsSwiper} setActiveTabs={setActiveTabs}/> :
        <FormsComponent/>
      }
    </AppWrapper>
  );
};

export default App;
