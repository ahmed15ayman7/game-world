"use client"
import React from "react";
import { Col, Container, Row ,Image} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRouter } from "next/navigation";
import { games } from "../redux/games";

 const MiniCarocel = ({n}) => {
  
  let router = useRouter();
  let autoplay = {
    delay: 5000,
    disableOnInteraction: true,
    waitForTransition: true,
  };
  
  return (
    <Swiper
      style={{ backgroundColor: "transparent" }}
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={autoplay}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      onSwiper={(swiper) => {}}
      onSlideChange={() => {}}>
      {" "}
      {games.slice(n,n+10).map((e, i) =>
        0 < i && i < 10 ? (
          <SwiperSlide key={i}>
            <Container
              className="minicarocel"
              onClick={() => {
                router.push('/games/'+e.id)
              }}>
              <Row
                key={i}
                style={{ justifyContent: "space-evenly", alignItems: "center" }}
                className="minicarocel">
                <Col lg={4} md={5} sm={6}>
                  <h4>Play Now</h4>
                </Col>
                <Col lg={3} md={4} sm={6}>
                  <Image src={e.image} alt="" className="img-fluid img p-3" />
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ) : null
      )}
    </Swiper>
  );
};
export default MiniCarocel;