import React, { useState } from 'react';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'karate',
      category: 'interests',
      description: 'karate',
      filename: 'karate.jpg'
    },
    {
      name: 'leah-guitar',
      category: 'interests',
      description: 'leah-guitar',
      filename: 'guitar.jpg'
    },
    {
      name: 'outdoors',
      category: 'interests',
      description: 'outdoors',
      filename: 'outdoors.jpg'
    },
    {
      name: 'rockhounding',
      category: 'interests',
      description: 'rockhounding',
      filename: 'rockhound.jpg'
    },
    {
      name: 'holiday-exchange',
      category: 'portfolio',
      description: 'holiday-exchange',
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
      name: 'Test',
      category: 'about',
      description: 'a pic of me',
      filename: 'ProfilePic.jpg'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);
  console.log(currentPhotos)
  console.log(category)
  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => {
          const { filename, name, description } = image //destructuring
          return (
            <div key={i} >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <img src={require(`../../assets/images/${category}/${filename}`)}
                    alt={name}
                    className="img-thumbnail"
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div >
  );

}

export default PhotoList;