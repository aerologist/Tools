import { Swiper, SwiperSlide } from "swiper/react";
import { ArchedShape, RectangularShape, TrapezoidalShape, RoundShape } from "../shape";

interface PropsSwiper {
  thumbsSwiper: any;
  setActiveTabs: any;
}

function SwiperComponent({thumbsSwiper, setActiveTabs}: PropsSwiper) {
  return (
    <Swiper
      id="main"
      //@ts-ignore
      thumbs={{ swiper: thumbsSwiper }}
      spaceBetween={0}
      slidesPerView={1}
      onInit={(swiper: any) => console.log("Swiper initialized!", swiper)}
      onSlideChange={(swiper: any) => {
        setActiveTabs(swiper.activeIndex);
      }}
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
    </Swiper>
  );
}

export default SwiperComponent;
