import React from "react";

function Project(props){
    return (
        <div >
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <img src={require(`../../assets/images/${props.category}/${props.filename}`)}
                alt={props.name}
                className="img-thumbnail"
              />
            </div>
          </div>
        </div>
      )
}




export default Project