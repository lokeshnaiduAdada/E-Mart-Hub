


import React from 'react'
import './product.css'
import { useState } from 'react'
import Mobile from './Mobile'
import Computer from './Computer'
import Tv from './Tv'
import Ac from './Ac'
import Furniture from './Furniture'
import Fridge from './Fridge'
import Kitchen from './Kitchen'
import Men from './Men'
import Speaker from './Speaker'
import Watch from './Watch'
import Women from './Women'

const Products = () => {
  
  const [showElectronics,setShowElectronics] = useState(false);
  const [showFashions,setFashions] = useState(false);
  const [showWatches,setShowWatches] = useState(false);
  const [showFurniture,setShowFurniture] = useState(false);

  // const handleDataFromChild=(data)=>{
  //   setShowElectronics(data);
  // };

  const handleElectronicsCheckedBox=(e)=>{
    setShowElectronics(e.target.checked);
  }

  const handleFashionsCheckedBox=(e)=>{
    setFashions(e.target.checked);
  }

  const handleWatchesCheckedBox=(e)=>{
    setShowWatches(e.target.checked)
  }

  const handleFurnitureCheckedBox=(e)=>{
    setShowFurniture(e.target.checked);
  }

  return (
    <>
      <div className='product_section'>
        <div className="selectedcomponent">
          <label>
            <h3>Filters</h3>
            <hr style={{justifyContent:'center'}}></hr>
            <input type='checkbox'
            checked={showElectronics}
            onChange={handleElectronicsCheckedBox}
            ></input>
            Electronics
            <br></br>
            <input type='checkbox'
            checked={showFashions}
            onChange={handleFashionsCheckedBox}
            ></input>
            Fashions
            <br></br>
            <input type='checkbox'
            checked={showWatches}
            onChange={handleWatchesCheckedBox}></input>
            Watches
            <br></br>
            <input type='checkbox'
            checked={showFurniture}
            onChange={handleFurnitureCheckedBox}></input>
            Furniture
          </label>
        </div>
        <hr></hr>
        <div className='showcomponents_checkbox'>
          {showElectronics && (
            <>
              <Mobile key={"mobile"}/>
              <Computer key={"computer"}/>
              <Tv key={"tv"}/>
              <Ac key={"Ac"}/>
              <Kitchen key={"kitchen"}/>
              <Fridge key={"fridge"}/>
              <Speaker key={"speaker"}/>
            </>
          )}
          {showFashions && (
            <>
              <Men key={"men"}/>
              <Women key={"women"}/>
            </>
          )}
          {showWatches && (
            <>
              <Watch key={"watch"}/>
            </>
          )}
          {showFurniture && (
            <>
              <Furniture key={"furniture"}/>
            </>
          )}
          {!showElectronics & !showFashions & !showWatches & !showFurniture &&(
            <>
              <Mobile key={"mobile_default"}/>
              <Computer key={"computer_default"}/>
              <Tv key={"tv_default"}/>
              <Ac key={"Ac_default"}/>
              <Furniture key={"furniture_default"}/>
              <Men key={"men_default"}/>
              <Watch key={"watch_default"}/>
              <Women key={"women_default"}/>
              <Kitchen key={"kitchen_default"}/>
              <Fridge key={"fridge_default"}/>
              <Speaker key={"speaker_default"}/>
            </>
        )}
        </div>
    </div>
    </>
  )
}

export default Products