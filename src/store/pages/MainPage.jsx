


import React, { useEffect } from 'react'
import { useState } from 'react'

import Navbar from '../components/Navbar'
import Products from '../components/Products'
import SignIn from '../Authentication/SignIn'

const MainPage = () => {
  const [dataFromChild, setDataFromChild] = useState(false);

  const [Filter,setFilter] = useState("0px")

  const handleDataFromChild=(data)=>{
    setDataFromChild(data);
  };

  const handleDataFromSigninChildren=()=>{
    setDataFromChild(false);
  }
  useEffect(()=>{
    setFilter(dataFromChild ? "6px" : "0px");
  },[dataFromChild])

  return(
  <>
    {/* <div style={{ filter: `blur(${dataFromChild})` }}>
      <Navbar dataToParent={handleDataFromChild}/> */}
      <div style={{ filter: `blur(${Filter})` }}>
        <Navbar dataToParent={handleDataFromChild}/>
        <Products />
    </div>
    {
      dataFromChild && <SignIn dataFromSigninChildren={handleDataFromSigninChildren}/>
    }
    
  </>
  )
}

export default MainPage;