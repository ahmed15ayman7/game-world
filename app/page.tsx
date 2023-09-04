'use client';
import {  Container, Row } from "react-bootstrap";
import ControlledCarousel from "./component/Carocel";
import MiniCarocel from "./component/MiniCarocel";
import { TypeAndMore } from "./component/TypeAndMore";
import  SwiperGames  from "./component/SwiperGames";


export default function Home() {
  let classfied=[
    {title:'bestGames',classfy:'Best Games',link:'/games/platforms/bestGames'},
    {title:'PCGames',classfy:'PC',link:'/games/platforms/PC'},
    {title:'P4Games',classfy:'Playstation',link:'/games/platforms/Playstation'},
    {title:'AndroidGames',classfy:'Android',link:'/games/platforms/Android'},
    {title:'iOSGames',classfy:'iOS',link:'/games/platforms/iOS'},
    {title:'NintendoGames',classfy:'Nintendo',link:'/games/platforms/Nintendo'},
    {title:'XboxGames',classfy:'Xbox',link:'/games/platforms/Xbox'},
    {title:'SteamGames',classfy:'Steam',link:'/games/platforms/Steam'},
]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container fluid style={{paddingRight:'0',paddingLeft:'0'}}>
        <div className="lg:ps-40 lg:pe-40">
      <ControlledCarousel/>
        </div>
        {classfied.map((e,i)=><div key={i}>
        {(i+1)%2===0?<MiniCarocel  n={10*i}/>:<></>}
        <div className="p-3">
        <TypeAndMore title={e.classfy} link={e.link} />
      </div>
        <SwiperGames title={e.title} classfy={e.classfy}/>
        </div>
        )
        
      }
    
    <Row style={{justifyContent:'space-evenly'}} className='mt-5'>
    </Row>
      </Container>
      
      
    </main>
  )
}
