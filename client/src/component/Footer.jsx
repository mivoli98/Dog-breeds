import React from 'react';
import '../Styles/footer.css';
import ugly from '../assets/ugly-removebg-preview.png';
import cool from '../assets/cool-removebg-preview.png';
import angry from '../assets/angry-removebg-preview.png';
import ugly1 from '../assets/ugly__1_-removebg-preview.png';
import suprise from '../assets/surprised-removebg-preview.png'

const Footer = () => {
  return (
    <div className="footer" >
      <input type="radio" name="star" id="star1" defaultChecked="checked"/>
      <label htmlFor="star1">
        <img src={cool} alt="Loved It"/>
        <h4>Love It</h4>
      </label>

      <input type="radio" name="star" id="star2"/>
      <label htmlFor="star2">
        <img src={suprise} alt="Likded It"/>
        <h4>Liked It</h4>
      </label>

      <input type="radio" name="star" id="star3"/>
      <label htmlFor="star3">
        <img src={ugly} alt="It's Ok"/>
        <h4>It's Ok</h4>
      </label>

      <input type="radio" name="star" id="star4"/>
      <label htmlFor="star4">
        <img src={ugly1} alt="Disliked It"/>
        <h4>Disliked It</h4>
      </label>

      <input type="radio" name="star" id="star5"/>
      <label htmlFor="star5">
        <img src={angry} alt="Hated It"/>
        <h4>Hated It</h4>
      </label>
      <h2 className="text">Do You Like This Website?</h2>
      
    </div>
  )
}

export default Footer
