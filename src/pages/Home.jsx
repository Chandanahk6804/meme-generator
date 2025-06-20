import React from 'react'
import { useEffect, useState } from 'react';
import {getMemes} from '../api'
import MemeCard from '../components/Card';


const Home = () => {
  const [memes,setMemes] = useState([])
  useEffect(()=>{
    getMemes().then((data)=>{
        //console.log(data)
        setMemes(data.data.memes)})
    
  },[])
  return (
    <div className='row'>
        {
            memes.map((meme)=>(
                <div className='col-md-4 mb-4'>
                <MemeCard id={meme.id} url={meme.url} name={meme.name}/>
                </div>
            ))
        }
    </div>
  )
}

export default Home