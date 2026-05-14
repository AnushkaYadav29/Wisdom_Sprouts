import React from 'react'
import FilmFareAwardsArr from '../data'

const FilmFareAwards = () => {
  return (
    <>
      <h2 className='tect-center bg-secondary text-warning py-3 my-3'>FilmFare Awards</h2>
      <table className="table table-success table-striped-columns">
          <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Year</th>
      <th scope="col">Category</th>
      <th scope="col">Song</th>
      <th scope="col">Result</th>

    </tr>
  </thead>

  <tbody>
    {
      FilmFareAwardsArr.map((filmFare,i)=>(
      <tr key={filmFare.id} >
      <th scope="row">{i+1}</th>
      <td>{filmFare.Year}</td>
      <td>{filmFare.Categort}</td>
      <td>{filmFare.Song}</td>
      <td>{filmFare.Result}</td>
    </tr>
      ))
    
   
}
  </tbody>
      </table>
    </>
  )
}

export default FilmFareAwards