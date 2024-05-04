import React, { useState } from 'react'
import './Home.css'
import Header from '../../componetns/Header/Header'
import ExploreMenu from '../../componetns/ExploreMenu/ExploreMenu'
import FoodDispaly from '../../componetns/FoodDisplay/FoodDispaly'
import Footer from '../../componetns/Footer/Footer'
import AppDownload from '../../componetns/AppDownload/AppDownload'


const Home = () => {

  const [category,setCategory]=useState("All");
  return (
    <div>
    <Header />
    <ExploreMenu category={category} setCategory={setCategory} />
    <FoodDispaly category={category} />
    <AppDownload />
    </div>
  )
}

export default Home