import React from 'react'
import { useParams } from 'react-router'

function Fullwanddeets({completewandinfo}) {
const {wandslug} = useParams() 
const wandFinder = completewandinfo.find((wand) => wand.slug === wandslug)
// console.log(wandFinder)
    return (
        <div>

<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">{wandFinder.core}</h5>
    <img width=
    "200px" src={wandFinder.imageUrl} />
    <p class="card-text"> <ul></ul>
        <li>Wood Type: {wandFinder.wood} </li>
        <li>Length(cm): {wandFinder.length} </li>
        </p>
      
    <a href="#" class="btn btn-primary">Purchase</a>
  </div>
</div>

        </div>
    )
}

export default Fullwanddeets
