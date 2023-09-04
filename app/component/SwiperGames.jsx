"use client"
import  CardGame  from "./CardGame";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import  {Navigation, Autoplay, Pagination, Scrollbar, A11y}  from "swiper/modules";
import { games } from "../redux/games";
const SwiperGames = ({title = 'all' ,classfy}) => {


  const breakpoints = {
      0: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
    },
    autoplay = {
      delay: 10000,
      disableOnInteraction: true,
      waitForTransition: true,
    };

    let classfied=(n)=>games.filter(e=>e.platforms.includes(n))
   
    let classes = {
      all:games
    ,  bestGames:games.filter(e=>e.users>40000)
    ,  PCGames:classfied('PC')
    , P4Games:classfied('Playstation')
    , AndroidGames:classfied('Android')
    , iOSGames:classfied('iOS')
    , NintendoGames:classfied('Nintendo')
    , XboxGames:classfied('Xbox')
    , SteamGames:classfied('Steam')
  }
  
  return (
    <Swiper
      style={{
        "position": "relative",
        "--swiper-navigation-position": "absolute",
        "--swiper-navigation-color": "#000000",
        "--swiper-pagination-color": "#000000",
        padding:' 0 20px '
    }}
      modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={35}
      slidesPerView={4}
      navigation
      autoplay={autoplay}
      breakpoints={breakpoints}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      onSwiper={(swiper) => {}}
      onSlideChange={() =>{}}
    >
      {classes[title].map((e, i) =>
          <SwiperSlide key={i}>
            <CardGame  id={e.id} img={e.image} title={e.title} us={e.users}  slid={true} />
          </SwiperSlide>
      )
  }
    </Swiper>
  );
};
export default SwiperGames;
