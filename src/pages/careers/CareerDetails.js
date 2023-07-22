import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
  const { id } = useParams()
  const career = useLoaderData()
  return (
    <div className="career-details">
      <h2>Career Details for{career.title}</h2>
      <p>Starting salary:{career.salary}</p>
      <p>Location: {career.location}</p>
      <div className='details'>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos officiis aperiam earum eum vel quas odio optio, distinctio ab sunt unde incidunt ipsum omnis amet magnam accusantium aut! Excepturi, cupiditate iusto!

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem, non odit saepe facere voluptas esse mollitia illo fuga exercitationem id dicta iusto eaque numquam quaerat ad! Fugit velit beatae laudantium.

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem, non odit saepe facere voluptas esse mollitia illo fuga exercitationem id dicta iusto eaque numquam quaerat ad! Fugit velit beatae laudantium.
        </p>
      </div>
    </div>
  )
}

// loader function
export const CareerDetailsLoader = async({params}) => {
  const {id} = params
  // console.log(typeof id)
  const res = await fetch(`http://localhost:3000/careeers/${id}`)
  if(!res.ok){
    throw Error('Could not find that career')
  }
  return res.json()
}