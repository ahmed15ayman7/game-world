'use client'
import PlayNow from '@/app/component/playButton/PlayButton';
import { game, games } from '@/app/redux/games';
import { faCircleDollarToSlot, faCircleInfo, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'next/navigation'
import React from 'react'
import { Button, Col, Container, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

const Game = () => {
    let parm =useParams();
    
  return (
    <Container>

        {games.filter((e:game)=>+parm.id===e.id).map((e:game,i:number)=><div key={i}>
        <Row  className='mb-5' style={{justifyContent:'space-evenly'}}>

            <Col  lg={7} className='mb-4'>
                <Image src={e.image} alt='' fluid width={'100%'} style={{borderRadius:'10px'}}></Image>
            </Col>
            
            <Col  lg={8} className='order-lg-last text-center'><h5>{e.title}</h5></Col>
            <Col  lg={2} className='order-lg-first'>
                <OverlayTrigger
                        placement={'right'}
                        overlay={
                            <Tooltip id={`tooltip-right`}>
                                <strong>{e.instructions}</strong>
                            </Tooltip>
                            }
                            >
                            <Button variant='' className='mb-2'><FontAwesomeIcon icon={faCircleInfo} color={'#0A0A98'} size={'xl'} /></Button>
                    </OverlayTrigger>
            <h6 className='mb-3 mt-3'>Platforms:</h6>
            <h6 className='mb-4' style={{color:'green'}}>{e.platforms}</h6> 
            {e.worth==='N/A'?<h5 style={{color:'#2AC803'}}><FontAwesomeIcon icon={faCircleDollarToSlot} /> Free</h5>:<h5 style={{color:'#C83803'}}><FontAwesomeIcon icon={faCircleDollarToSlot} /> {e.worth}</h5>}
            <h5 className='mt-3 mb-5' ><FontAwesomeIcon icon={faUser} /> {e.users}</h5>
            
            </Col>
            <Col  lg={3}>
                <h6>Description:</h6><p>{e.description}</p>
            </Col>
        </Row>
            <Row  style={{justifyContent:'space-evenly'}}>
            <Col lg={3}>
                <a style={{textDecoration:'none',display:'flex',justifyContent:'center'}} target='_blank' href={e.open_giveaway_url}>

        <PlayNow/>
                </a>
            </Col>
        </Row>
        </div>
        )}
            
    </Container>
  )
}

export default Game