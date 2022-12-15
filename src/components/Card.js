import React from 'react'

export default function Card(props) {
  return (
    <div>
      <div className='card'>
        <div className='left'>
          <img src={props.item.imageUrl} alt={props.item.title} />
        </div>
        <div className='right'>
          <div className='caption'>
            <div className='location'>
              <img src='./images/fill-219.png' alt='map icon' />
              <h4>{props.item.location}</h4>
            </div>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <div className='title'>
            <h2>{props.item.title}</h2>
          </div>
          <div className='dates'>
            <span>{props.item.startDate}</span>
            <span>-</span>
            <span>{props.item.endDate}</span>
          </div>
          <div className='description'>
            <p>{props.item.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
