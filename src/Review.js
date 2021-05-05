import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name , job , image , text } = data[index]

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex
      if(index!==data.length-1)
      newIndex=index+1
      else
      newIndex=0

      return newIndex
    }
    )
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex
      if(index!==0)
      newIndex=index-1
      else
      newIndex=data.length-1

      return newIndex
    }
    )
  }
  const randomPerson = () =>{
    setIndex((index) =>{
      let newIndex=Math.floor(Math.random()*data.length)
      return newIndex
    }
    )
  }
  return(
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="button-container">
        <button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
        <button className='next-btn'onClick={nextPerson}><FaChevronRight /></button>
      </div>
      <button className='random-btn' onClick={randomPerson}>Surpirse me</button>
    </article>
  )
};

export default Review;
