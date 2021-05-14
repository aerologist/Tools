import React from "react";
import { AppWrapper, HeaderMobile, Header } from "./styled";
import Gamburger from "../gamburger";
import Line from "../line";
import MobilePanelsComponent from "../mobilePanels";
import SwiperComponent from "../swiper";
import FormsComponent from "../forms";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const App = () => {
  const { t } = useTranslation();

  const [activeTabs, setActiveTabs] = React.useState<number>(0);
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [mobileVersion, setMobileVersion] = React.useState<boolean>(true);

  const onSetVersion = () => {
    if (window.innerWidth >= 767) {
      setMobileVersion(false);
    } else {
      setMobileVersion(true);
    }
  };

  React.useEffect(() => {
    onSetVersion();
    window.addEventListener("resize", () => {
      onSetVersion();
    });
  }, []);

  return (
    <AppWrapper>
      <Header>
        <Gamburger />
        <h1>{t("drift_cross_section_parameters")}</h1>
      </Header>
      <HeaderMobile>
        <Gamburger />
        <h1>{t("drift_cross_section")}</h1>
      </HeaderMobile>
      <MobilePanelsComponent setThumbsSwiper={setThumbsSwiper} />
      <Line activeTabs={activeTabs} />
      {mobileVersion ? (
        <SwiperComponent
          thumbsSwiper={thumbsSwiper}
          setActiveTabs={setActiveTabs}
        />
      ) : (
        <FormsComponent />
      )}
    </AppWrapper>
  );
};

export default App;
