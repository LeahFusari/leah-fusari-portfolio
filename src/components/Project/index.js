import React from "react";

function Project(props){
    return (
      
        <div className="d-flex flex-row">
            <a className="card-body" href={props.url} target="_blank" rel="noreferrer" >
              <div className= "label">
              <h4 className="card-title">{props.name}</h4>
              {props.description}
              {/* <p className="description">{props.description}</p> */}
              </div>
              <img src={require(`../../assets/images/${props.category}/${props.filename}`)}
                alt={props.name}
                // className="img-thumbnail"
              />
            </a>
        </div>
      )
}




export default Project