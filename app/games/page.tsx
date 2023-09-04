"use client"
import CardGame from "@/app/component/CardGame"

import { Container, Row } from "react-bootstrap"

import { game , games} from "../redux/games";


export default function Games () {
  return (
    <main className="">
          <Container>
    <Row style={{justifyContent:'space-evenly'}}>
     {games.map((e:game,i:number)=>
     
<CardGame key={i} id={e.id} img={e.image} title={e.title} us={e.users} />
     )} 

    </Row>
      </Container>
    </main>
  )
}

