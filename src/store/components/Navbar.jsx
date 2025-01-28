import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
const Navbar = ({dataToParent}) => {

  const [search,setSearch] = useState("");
  const [searchItem,setSearchItem]=useState("");
  const navigate = useNavigate();

  const {cartitems} = useContext(UserContext);

  const [popup,setPopUp] = useState(false)
  
  const handlePopup=()=>{
    const newPopupState = !popup;
    setPopUp(newPopupState);
    dataToParent(newPopupState);
  }

  const searchHandle = (e) => {
    const value = e.target.value;
    setSearch(value);

    //const normalizedValue = value.trim().toLowerCase()
    if (value.trim().toLowerCase() === "laptops") {
      navigate("/laptops");
    }
    else if (value.trim().toLowerCase() === "womens wear") {
      navigate("/womenwear");
    }
    else if (value.trim().toLowerCase() === "watches") {
      navigate("/watches");
    }
    else if (value.trim().toLowerCase() === "mobiles") {
      navigate("/mobiles");
    }
    else if (value.trim().toLowerCase() === "speakers") {
      navigate("/speakers");
    }
    else if (value.trim().toLowerCase() === "mens wear") {
      navigate("/menwears");
    }
    else if (value.trim().toLowerCase() === "kitchen") {
      navigate("/kitchens");
    }
    else if (value.trim().toLowerCase() === "fridges") {
      navigate("/fridges");
    }
    else if (value.trim().toLowerCase() === "furnitures") {
      navigate("/furnitures");
    }
    else if (value.trim().toLowerCase() === "tvs") {
      navigate("/tvs");
    }
    else if(value.trim().toLowerCase() === "acs") {
      navigate("/acs");
    }
  }

  return (
    <>
      <div className="Navbar_section">
        <div className="title">
          <h1>
            <Link to='/' style={{ textDecoration: 'none',color:'white' }}>E-Commerce</Link>
          </h1>
        </div>
        <div className="search">
          <form >
            <input type='search' 
                    placeholder='Search for Items'
                    onChange={searchHandle}
                    value={search}></input>
          </form>
        </div>
        <div className="user">
          <button onClick={handlePopup}>
            SignIn
          </button>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>
            <div className="cart">
              cart {cartitems.length}
            </div>
          </Link>
        </div>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to='/womenwear' style={{ textDecoration: 'none',color:'dodgerblue' }}>Women's Wear</Link>
          </li>
          <li>
            <Link to='/watches' style={{ textDecoration: 'none',color:'dodgerblue' }}>Watches</Link>
          </li>
          <li>
            <Link to='/mobiles' style={{ textDecoration: 'none',color:'dodgerblue' }}> Mobiles</Link>
          </li>
          <li>
            <Link to='/speakers' style={{ textDecoration: 'none',color:'dodgerblue' }}>Speaker's</Link>
          </li>
          <li>
            <Link to='/menwears' style={{ textDecoration: 'none',color:'dodgerblue' }}>Men's Wear</Link>
          </li>
          <li>
            <Link to='/kitchens' style={{ textDecoration: 'none',color:'dodgerblue' }}>Kitchen</Link>
          </li>
          <li>
            <Link to='/fridges' style={{ textDecoration: 'none',color:'dodgerblue' }}>Fridges</Link>
          </li>
          <li>
            <Link to='/furnitures' style={{ textDecoration: 'none',color:'dodgerblue' }}>Furnitures</Link>
          </li>
          <li>
            <Link to='/tvs' style={{ textDecoration: 'none',color:'dodgerblue' }}>Tv's</Link>
          </li>
          <li>
            <Link to='/acs' style={{ textDecoration: 'none',color:'dodgerblue' }}>AC's</Link>
          </li>
          <li>
            <Link to='/laptops' style={{ textDecoration: 'none',color:'dodgerblue' }}>Laptop's</Link>
          </li>
        </ul>
      </div>
      {/* <h1>{search}</h1> */}
    </>
  )
}

export default Navbar;