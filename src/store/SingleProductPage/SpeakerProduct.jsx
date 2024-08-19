import React from 'react'
import './singleproduct.css'
import { speakerData } from '../data/speaker';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SpeakerProduct = () => {
    
    const {id} = useParams();

    const speakerproduct = speakerData.find((item)=>item.id==id);
  return (
    <>
        <Navbar></Navbar>
        <div className="singleproduct_section">
            <div className="singleproduct_image">
                <img src={speakerproduct.image} style={{width:'40%', textAlign:'center'}}></img>
            </div>
            <div className="singleproduct_details">
                <h2>Brand Name: {speakerproduct.brand}</h2>
                <h3>Model : {speakerproduct.model}</h3>
                <h4>Price: {speakerproduct.price}</h4>
            </div>
        </div>
    </>
  )
}

export default SpeakerProduct