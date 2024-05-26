import React, { useState } from 'react'

import Hero from './Hero/Hero'
import Why from './Why/Why'
import Citi from './Citi/Citi'
import Display from './Display/Display'

const App = () => {
const [category,setCategory]= useState("All");
  return (
    <div>

    <Hero/>
    <Why/>
    <Citi category={category} setCategory={setCategory}/>
    <Display category={category} />
    
</div>
  )
}

export default App
