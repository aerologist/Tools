import { MobilePanels, Tab } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import ArchedImg from "../../assets/icons/Arched.svg";
import RectangularImg from "../../assets/icons/Rectangular.svg";
import RoundImg from "../../assets/icons/Round.svg";
import TrapezoidalImg from "../../assets/icons/Trapezoidal.svg";

interface PropsMobilePanels {
  activeTabs: number;
  setThumbsSwiper: any;
}

function MobilePanelsComponent({activeTabs, setThumbsSwiper}: PropsMobilePanels) {
  const imgTabs: string[] = [ ArchedImg, RectangularImg, TrapezoidalImg, RoundImg ];

  return (
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
            <Tab className={activeTabs === 0 ? "active" : ""}>
              <img alt="tab" src={tab} />
            </Tab>
          </SwiperSlide>
        ))}
      </Swiper>
    </MobilePanels>
  );
}

export default MobilePanelsComponent;
