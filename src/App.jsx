import React from 'react'
import { FlexContent, Hero , Sales, Story , Foot,Nav, Cart} from './components'
import {story,footerAPI, highlight,sneaker, heroapi, popularsales, toprateslaes } from './data/data.js'
const App = () => {
  return (
    <>
    <Nav/>
    <Cart/>
    <main className='flex flex-col gap-12 relative'>
      <Hero heroapi={heroapi}/>
      <Sales endpoint={popularsales} ifExists/>
      <FlexContent endpoint={highlight} ifExists/>
      <Sales endpoint={toprateslaes}/>
      <FlexContent endpoint={sneaker}/>
      <Story story={story}/>

    </main>
    <Foot footerAPI={footerAPI}/>

    </> )
}

export default App;