import React from "react";

function Project(props){
    return (
      
        <div className=" cards d-flex flex-row">
            <a className="card-body" href={props.url} target="_blank" rel="noreferrer" >
              <div className= "label">
              <h4 className="card-title">{props.name}</h4>
              {props.description}
              </div>
              <img src={require(`../../assets/images/${props.category}/${props.filename}`)}
                alt={props.name}
              />
            </a>
        </div>
      )
}




export default Project