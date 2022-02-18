import React, { useState } from 'react';
import Project from '../Project';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Karate',
      category: 'interests',
      filename: 'karate.jpg'
    },
    {
      name: 'leah-guitar',
      category: 'interests',
      filename: 'guitar.jpg'
    },
    {
      name: 'outdoors',
      category: 'interests',
      filename: 'outdoors.jpg'
    },
    {
      name: 'rockhounding',
      category: 'interests',
      filename: 'rockhound.jpg'
    },
    {
      name: 'holiday-exchange',
      category: 'portfolio',
      description: 'Front end project using third-party APIs',
      filename: 'holidayex.jpg'
    },
    {
      name: 'horiseon',
      category: 'portfolio',
      description: 'horiseon',
      filename: 'horision.jpg'
    },
    {
      name: 'run-buddy',
      category: 'portfolio',
      description: 'run-buddy',
      filename: 'runbuddy.jpg'
    },
    {
      name: 'take-it-or-leave-it',
      category: 'portfolio',
      description: 'take-it-or-leave-it',
      filename: 'takeorleave.jpg'
    },
    {
      name: 'weather',
      category: 'portfolio',
      description: 'weather',
      filename: 'weather.jpg'
    },
    {
      name: 'HTML/CSS/JS',
      category: 'resume',
      // description: 'HTML/CSS/JS',
      filename: 'htmlcssjs.jpg'
    },
    {
      name: 'MySQL',
      category: 'resume',
      // description: 'MySQL',
      filename: 'MySQL.jpg'
    },
    {
      name: 'React',
      category: 'resume',
      // description: 'React',
      filename: 'react.jpg'
    },
    {
      name: 'MongoDB',
      category: 'resume',
      // description: 'MySQL',
      filename: 'mongodb.jpg'
    },
    {
      name: 'RESTful API',
      category: 'resume',
      // description: 'React',
      filename: 'restful.jpg'
    },
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);
  console.log(currentPhotos)
  console.log(category)
  return (
    <div>
      <div className="d-flex flex-row flex-wrap">
        {currentPhotos.map((image, i) => {
          const { filename, name, description } = image //destructuring
          return(
            <Project
            key={i}
            name={name}
            description={description}
            filename={filename}
            category={category}
            />)
        })}
      </div>
    </div >
  );

}

export default PhotoList;