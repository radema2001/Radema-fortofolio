
import React from "react";
import data from './data'
import CardProject from "./CardProject";
import './Project.css';

function Project() {
 
  return (
    <div className="content" id='Project'>
      <h1 className="judul">Project</h1>
      <div className="Card">
     {data.map(d =>(
      <CardProject
      judul={d.judul}
      subjudul={d.subjudul}
      deskripsi ={d.deskripsi}
      />

     ))}
     </div>
    </div>
  );
}

export default Project;
