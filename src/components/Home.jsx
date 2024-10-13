import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './Cartdata';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTocart } from '../redux/features/cartSlice';
function Home() {
     const dispatch = useDispatch()
     const send = (e)=>{
          dispatch(addTocart(e))
     }
    const [cartdata , setcartdata] = useState(Cardsdata)
  return (
    <section className='iteam_section mt-4 container'>
      <h2 className='px-4' style ={{fontWeight:400}}> 
            Restaurents in vizag open now
      </h2>
      <div className='row mt-2 d-flex justify-content-around align-items-center'>
      {cartdata.map((element,index)=>(
          <Card style={{width:'22rem' , border:'none'}} className='hove mb-4 ' key={index}>
          <Card.Img variant='top' className='cd' src={element.imgdata}/>

          <div className='card_body'>
             <div className='upper_data d-flex justify-content-between align-items-center'>

               <h4 className='mt-2'>{element.dish}</h4>
               <span>{element.rating}</span>
             </div>
            
             <div className='lower_data d-flex justify-content-between'>
                <h5>{element.address}</h5>
                <span>{element.price}</span>
             </div>
             <div className="extra"></div>
             <div className='last_data d-flex justify-content-between align-items-center'>
                <img src={element.arrimg} alt="" className='limg'/>
                <Button style={{width:'150px', background:'#ff3054db' , border:'none'}} variant='outline-light'
                className='mt-2 mb-2' onClick={()=>send(element)}>
                    Add To Cart
                    
                </Button>
                <img src={element.delimg} alt="" className='limg' />
             </div>
          </div>
      </Card>
      ))}
        
      </div>
    </section>
  )
}

export default Home