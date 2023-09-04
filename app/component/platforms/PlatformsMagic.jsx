import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { items } from "./ItemsMagic";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const PlatformsMagic = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Row
      style={{ justifyContent: "space-evenly" }}
      className="p-lg-5 m-lg-5 pt-lg-1 pt-md-1 p-md-4 m-md-4 p-1 m-1 pt-1 mt-5 ">
      {items.map((item,i) => (
        <div key={i} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2  p-3 ">

        <motion.div
          layoutId={item.id}
          className='item  w-100'
          onClick={() => {
            setSelectedId(item.id);
          }}>
            <motion.img src={item.image} className={'img-fluid rounded-3'} style={{height:'100px',width:'100px'}}/>
          <motion.h3>{item.title}</motion.h3>
          <motion.h5>{item.subtitle}</motion.h5>
        </motion.div>
        </div>
      ))}

      <AnimatePresence>
        {items.map((item,i) =>
          item.id === selectedId
          ? selectedId && (
            <motion.div key={i} className="item-selected" layoutId={selectedId}>
                  <div className="div-details p-3">
                  <motion.img  className={'img-fluid rounded-pill'} alt='' src={item.image} style={{height:'200px',width:'200px'}}/>
                    <motion.h2>{item.title}</motion.h2>
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.p>{item.details}</motion.p>
                    <div>
                      <motion.button  className="btn-more p-1 me-2 rounded-pill">
                    <Link href={item.linkGames} style={{textDecoration:'none'}}>
                        Go To {item.title} Games
                    </Link>
                        </motion.button>
                    {item.link==='#'?null:
                      <motion.button  className="btn-more p-1 rounded-pill ms-2">
                        <motion.a href={item.link} target={'_blank'} style={{textDecoration:'none'}}>
                        Go To {item.title} Website
                    </motion.a>
                        </motion.button>
                    }
                    </div>
                    <motion.button
                      className="btn-more btn rounded-pill"
                      style={{ border: "none !important" }}
                      onClick={() => {
                        setSelectedId(null);
                      }}>
                      <FontAwesomeIcon icon={faXmark} />
                    </motion.button>
                  </div>
                </motion.div>
              )
              : null
              )}
      </AnimatePresence>
    </Row>
  );
};
export default PlatformsMagic;
