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
      name: 'Take It Or Leave It',
      category: 'portfolio',
      description: 'Interactive full-stack group project.  A social media-type app where people can trade items.  I worked on the back end using Express.js and MySQL.',
      filename: 'takeorleave.jpg'
    },
    {
      name: 'Holiday Exchange',
      category: 'portfolio',
      description: 'Front-end project using third-party APIs.  I was put in charge of the HTML and CSS.',
      filename: 'holidayex.jpg'
    },
    {
      name: 'Weather Dashboard',
      category: 'portfolio',
      description: 'An interactive front-end solo project using a third-Party API and local storage.',
      filename: 'weather.jpg'
    },
    {
      name: 'Horiseon',
      category: 'portfolio',
      description: 'This is a placeholder project from a Module Lesson.',
      filename: 'horision.jpg'
    },
    {
      name: 'Run-buddy',
      category: 'portfolio',
      description: 'This is a placeholder project from a Module Lesson.',
      filename: 'runbuddy.jpg'
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