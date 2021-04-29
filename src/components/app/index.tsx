import React from "react";
import Gamburger from "../gamburger/Gamburger";
import { useTranslation } from "react-i18next";
import { ArchedShape, RectangularShape, TrapezoidalShape, RoundShape } from "../shape";
import { AppWrapper, Forms, Header, HeaderMobile, MobilePanels, Tab, LineTab, LineTabs } from "./styles";
import ArchedImg from "../../assets/icons/Arched.svg";
import RectangularImg from "../../assets/icons/Rectangular.svg";
import RoundImg from "../../assets/icons/Round.svg";
import TrapezoidalImg from "../../assets/icons/Trapezoidal.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import "swiper/swiper-bundle.min.css";
// import DragDrop from "../DragDrop";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const App = () => {
  const { t } = useTranslation();

  const [activeTabs, setActiveTabs] = React.useState<number>(0);
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [mobileVersion, setMobileVersion] = React.useState<boolean>(true);

  const imgTabs: string[] = [ ArchedImg, RectangularImg, TrapezoidalImg, RoundImg ];

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
      <Header>
        <Gamburger />
        <h1>{t("drift_cross_section_parameters")}</h1>
      </Header>
      <HeaderMobile>
        <Gamburger />
        <h1>{t("drift_cross_section")}</h1>
      </HeaderMobile>
      <MobilePanels>
        <Swiper
          id="thumbs"
          spaceBetween={4}
          slidesPerView={4}
          style={{ width: "100vw", display: "flex" }}
          allowSlideNext={false}
          allowSlidePrev={false}
          //@ts-ignore
          onSwiper={setThumbsSwiper}
        >
          {imgTabs.map((tab, index) => (
            <SwiperSlide key={index}>
              <Tab className={activeTabs === 0 ? 'active' : ''}>
                <img alt="tab" src={tab}/>
              </Tab>
            </SwiperSlide>
          ))}
        </Swiper>
      </MobilePanels>
      <LineTabs>
        {imgTabs.map((_, index) => (
          <LineTab className={activeTabs === index ? 'active' : ''}/>
        ))}
      </LineTabs>
      {mobileVersion ?
        <Swiper
          id="main"
          //@ts-ignore
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={0}
          slidesPerView={1}
          onInit={(swiper: any) => console.log('Swiper initialized!', swiper)}
          onSlideChange={(swiper: any) => {setActiveTabs(swiper.activeIndex)}}
        >
          <SwiperSlide>
            <ArchedShape />
          </SwiperSlide>
          <SwiperSlide>
            <RectangularShape />
          </SwiperSlide>
          <SwiperSlide>
            <TrapezoidalShape />
          </SwiperSlide>
          <SwiperSlide>
            <RoundShape />
          </SwiperSlide>
        </Swiper> :
        <Forms>
          <ArchedShape />
          <RectangularShape />
          <TrapezoidalShape />
          <RoundShape />
        </Forms>
      }
      {/* <DragDrop>
        <div style={{width: 100, height: 100, background: 'white', marginBottom: 10}}>1</div>   
        <div style={{width: 100, height: 100, background: 'white', marginBottom: 10}}>1</div>  
        <div style={{width: 100, height: 100, background: 'white', marginBottom: 10}}>1</div>  
        <div style={{width: 100, height: 100, background: 'white', marginBottom: 10}}>1</div>  
      </DragDrop> */}
    </AppWrapper>
  );
};

export default App;
