import React from "react";

function Project(props){
    return (
        <div className="d-flex flex-row">
          <div>
            <div className="card-body">
              <div className= "label">
              <h5 className="card-title">{props.name}</h5>
              {props.description}
              {/* <p className="description">{props.description}</p> */}
              </div>
              <img src={require(`../../assets/images/${props.category}/${props.filename}`)}
                alt={props.name}
                // className="img-thumbnail"
              />
              
            </div>
          </div>
        </div>
      )
}




export default Project