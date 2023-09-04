'use client'
import CardGame from '@/app/component/CardGame'
import { game, games } from '@/app/redux/games'
import { useParams } from 'next/navigation'

import { Col, Container, Row } from 'react-bootstrap'

const Platform = () => {
    let par =useParams()
    let name = par.name;
    let classfied=(n:string)=>games.filter(e=>e.platforms.includes(n))
    let finallyGames=name==='bestGames'?games.filter(e=>e.users>22000):classfied(name);
  return (
    <main className="">
          <Container>
    <Row style={{justifyContent:'space-evenly'}}>
        <Col className='col-12'>
        <h1 className='text-center' style={{color:'#30C802',textShadow:'1px 1px #000000'}} >{name==='bestGames'?'Best Games':name+' Games'}</h1>
        </Col>
     {finallyGames.map((e:game,i:number)=>
     
<CardGame key={i} id={e.id} img={e.image} title={e.title} us={e.users} />
     )} 

    </Row>
      </Container>
    </main>
  )
}

export default Platform