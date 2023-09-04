import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BoxSearch } from "./ResultSearch";


const Search = () => {
  const [selectedId, setSelectedId] = useState(null)
  let items=[{id:100}]
  let keys=['po']
    let handelKeyEvent=(e)=>{
        let key=e.key;
        keys.push(key);
        keys.slice(-2).join(' ')==='Meta k'?setSelectedId(100):null
        key==='Escape'?setSelectedId(null):null
        
   }
    useEffect(() => {
      document.addEventListener('keyup',handelKeyEvent,true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <motion.div>
      <motion.div
        layoutId={100}
        className="d-flex box-search  ps-2 pe-2 pt-1 pb-1 "
        onClick={() => {
          setSelectedId(100)
        }}>
        <motion.div className="me-2">
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </motion.div>
        <motion.div className="ps-1 pe-2">
          <motion.span>Search</motion.span>
        </motion.div>
        <motion.div>
          <motion.kbd className="me-1">⌘</motion.kbd>
          <motion.kbd>K</motion.kbd>
        </motion.div>
      </motion.div>

      <AnimatePresence>
      {items.map((item,i) =>
          item.id === selectedId
          ? selectedId && (
        <motion.div key={i} className="item-selected search pt-5" layoutId={selectedId}>
          <div className="div-details mt-5 p-3 pb-5">
            <div className="box-result-search w-100 d-flex">
            <BoxSearch id={setSelectedId}/>
            </div>

            <div className="help-search d-flex">
              <div className="">
                <kbd  style={{fontSize:'21px',height:'30px'}} >⏎</kbd>
                <span className="">to select</span>
              </div>
              <div className="">
                <kbd className="" style={{fontSize:'21px',height:'30px'}} >↑</kbd>
                <kbd className="" style={{fontSize:'21px',height:'30px'}} >↓</kbd>
                <span className="">to navigate</span>
              </div>
              <div className="">
                <kbd className="" style={{fontSize:'10px',height:'30px'}} >esc</kbd>
                <span className="">to close</span>
              </div>
              
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
        </motion.div>):null)}
      </AnimatePresence>
    </motion.div>
  );
};

export default Search;
