import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";


export const TypeAndMore = ({ title, link }:{title:string, link:string}) => {
  return (
    <div
      className="w-100 d-flex justify-content-between mt-4"
      style={{ color: "#30C802" }}>
      <h5>{title}</h5>
     
        <Button variant="" className="btn-more">
          <Link href={link} style={{ textDecoration: "none" }}>
            More
          </Link>
        </Button>
    
    </div>
  );
};
