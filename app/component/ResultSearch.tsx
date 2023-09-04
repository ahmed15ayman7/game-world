import React, { useEffect, useRef, useState } from "react";
import {  Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { AppDispatch, RootState } from "../redux/store";
import { ResultSearch } from "../redux/FilterationSlice";
import { games } from "../redux/games";
import { useRouter } from "next/navigation";



export const BoxSearch = () => {
    
  let dispatch = useDispatch<AppDispatch>();
  let result = useSelector((s:RootState)=>s.search.games);
  let router=useRouter();
  let handelChange = (e:string) => {
    dispatch(ResultSearch({games:games,name:e}))
};
const first = useRef(null)
const [count, setCount] = useState(0)
const [index, setIndex] = useState(0)
let handelKeyEvent=(e:React.KeyboardEvent)=>{
    let key=e.key;
   if(key==='ArrowUp'){
    index!==0 ? setIndex((count+result.length-1)%result.length):null
       count!==0?setCount(count-1):null;
       
    }
    if(key==='ArrowDown'){
        index!==result.length ? setIndex((count+1)%result.length): null
        count!==result.length?setCount(count+1):null;
        
}
    if(key==='Enter'){
        router.push('/games/'+result[count].id)
        e.preventDefault();
}
}

  return (
    <>
      <Form className="form-search  pt-1 mt-lg-1 mt-3 ">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 result-search"
          aria-label="Search"
          onKeyDown={handelKeyEvent}
          onChange={(e) => handelChange(e.target.value)}
        />
        <div className="results rounded-1 d-flex" ref={first}>
            {result.map((e,i)=>
            <div key={i}  onClick={()=>router.push('/games/'+e.id)} style={{cursor:'pointer'}}  className={`item-result mb-1 ${i===index?'active':''}`} >
                <Image src={e.image} alt=''  className="rounded-1"/>
                <h6 className="w-75 text-center text-black">{e.title.slice(0,40)}</h6>
            </div>
                )}
            
        </div>
        {result.length===0?<div className="text-center mt-5">No recent searches</div>:''}
      </Form>
    </>
  );
};
