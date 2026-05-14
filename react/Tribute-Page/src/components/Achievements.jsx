import React from 'react'
 import './Achievement.css'

const Achievements = ({Honours}) => {
  return (
    <>
        <h3 className='text-center bg-secondary text-warning py-3 my-2'>Achievements</h3>
        <ul className="list-group list-group-flush">
          {
            Honours.map((honour,index)=>(
              <li className="list-group-item achievementList" key={index}>{honour}</li>
            ))
          }
        </ul>
    </>
  )
}

export default Achievements
