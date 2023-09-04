"use client";
import {  useRouter } from 'next/navigation';
import { Button, Card, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

type props={
  id : number ,
  title:string,
  img:string,
  us:number,
  slid?:boolean
}
const CardGame = ({id, title,img,us,slid}:props) => {
  let router = useRouter();
  return (
    <div className={`${
      slid ? "" : "col-lg-2 col-md-3 col-sm-4 col-6 "
    } mt-5 mb-5 `}>
    <Card className='cardGame' onClick={()=>router.push(`/games/${id}`)}>
      <Card.Img variant="top img-fluid" src={img} style={{height:'90px'}} />
      <Card.Body>
        <Card.Title className='text-center mb-3 fs-6' style={{height:'50px'}}>{title.slice(0,20)}...</Card.Title>
        <Card.Text style={{color:'#30C802'}}>
        <FontAwesomeIcon icon={faUser}/>
        {' '+us}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardGame