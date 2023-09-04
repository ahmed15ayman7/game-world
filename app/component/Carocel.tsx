import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import { game, games } from '../redux/games';
import { useRouter } from 'next/navigation';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const route = useRouter()
  
  const handleSelect = (selectedIndex:any) => {
    setIndex(selectedIndex);
  };
  
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{borderRadius:'25px',boxShadow:'0 0 10px 10px #6E6E6E'}} >
    {games.slice(25,50).map((e:game,i:number)=>
      <Carousel.Item key={i} onClick={()=>route.push('/games/'+e.id)} style={{cursor:'pointer'}}>
        <Image src={e.image}   fluid width={'100%'} alt='' style={{borderRadius:'25px'}}/>
        <Carousel.Caption style={{color:'#fff'}} className='d-none d-md-block d-lg-block'>
          <h3 style={{textShadow:'2px 2px #000'}}>{e.title}</h3>
          <p style={{textShadow:'2px 2px #000'}}>{e.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
          )}
    </Carousel>
  );
}

export default ControlledCarousel;