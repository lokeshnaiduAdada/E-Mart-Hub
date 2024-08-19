

import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import MainPage from './store/pages/MainPage';
import WomenPage from './store/pages/WomenPage';
import WatchPage from './store/pages/WatchPage';
import MobilePage from './store/pages/MobilePage';
import SpeakerPage from './store/pages/SpeakerPage';
import MenwearsPage from './store/pages/MenwearsPage';
import KitchenPage from './store/pages/KitchenPage';
import FridgesPage from './store/pages/FridgesPage';
import FurniturePage from './store/pages/FurniturePage';
import TvsPage from './store/pages/TvsPage';
import LaptopsPage from './store/pages/LaptopsPage';
import AcsPage from './store/pages/AcsPage';
import MobileProduct from './store/SingleProductPage/MobileProduct';
import WomenWearProduct from './store/SingleProductPage/WomenWearProduct';
import WatchProduct from './store/SingleProductPage/WatchProduct';
import SpeakerProduct from './store/SingleProductPage/SpeakerProduct';
import MenWearProduct from './store/SingleProductPage/MenWearProduct';
import KitchenProduct from './store/SingleProductPage/KitchenProduct';
import FridgeProduct from './store/SingleProductPage/FridgeProduct';
import FurnitureProduct from './store/SingleProductPage/FurnitureProduct';
import TvProduct from './store/SingleProductPage/TvProduct';
import AcProduct from './store/SingleProductPage/AcProduct';
import LaptopProduct from './store/SingleProductPage/LaptopProduct';
import CartProduct from './store/SingleProductPage/CartProduct';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/womenwear'  element={<WomenPage/>}/>
        <Route path='/watches' element={<WatchPage/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/speakers' element={<SpeakerPage/>}/>
        <Route path='/menwears' element={<MenwearsPage/>}/>
        <Route path='/kitchens' element={<KitchenPage/>}/>
        <Route path='/fridges' element={<FridgesPage/>}/>
        <Route path='/furnitures' element={<FurniturePage/>}/>
        <Route path='/tvs' element={<TvsPage/>}/>
        <Route path='/acs' element={<AcsPage/>}/>
        <Route path='/laptops' element={<LaptopsPage/>}/>
            <Route path='/mobileproduct/:id' element={<MobileProduct/>}/>
            <Route path='/womenwearproduct/:id' element={<WomenWearProduct/>}/>
            <Route path='/watchproduct/:id' element={<WatchProduct/>}/>
            <Route path='/speakerproduct/:id' element={<SpeakerProduct/>}/>
            <Route path='/menwearproduct/:id' element={<MenWearProduct/>}/>
            <Route path='/kitchenproduct/:id' element={<KitchenProduct/>}/>
            <Route path='/fridgeproduct/:id' element={<FridgeProduct/>}/>
            <Route path='/furnitureproduct/:id' element={<FurnitureProduct/>}/>
            <Route path='/tvproduct/:id' element={<TvProduct/>}/>
            <Route path='/acproduct/:id' element={<AcProduct/>}/>
            <Route path='/laptopproduct/:id' element={<LaptopProduct/>}/>
          <Route path='/cart' element={<CartProduct/>}></Route>
      </Routes> 
    </div>
  )
}
export default App;