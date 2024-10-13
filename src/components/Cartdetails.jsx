import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash , faMinus,faPlus} from '@fortawesome/free-solid-svg-icons'
import './cartstyle.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTocart,removeTocart,remove_individual,emptycart } from '../redux/features/cartSlice'
function Cartdetails() {
  //here allcart is the registered reducer inside the store
  //through useSelector we can get the state stored inside the reducer(initial state)
  //const {cart} = useSelector((state)=>state.allCart)
  const {cart}= useSelector((state)=>state.allCart)
   const dispatch = useDispatch()
   const [totalprice , settotalprice] = useState(0)
  // const arr=[0,1]
  const increment=(e)=>{
     dispatch(addTocart(e))
  }
  const remove=(e)=>{
    dispatch(removeTocart(e))
  }
  const decrement =(e)=>{
    dispatch(remove_individual(e))
  }
  const empty=()=>{
    dispatch(emptycart())
  }
  const total =()=>{
    let totalprice=0
    cart.map((element,index)=>{
      totalprice=element.qnty*element.price+totalprice
      
    })
    settotalprice(totalprice)
  }
  //cart can be increasing or decreasing so when any change happens
  //run this function again so use effect
   useEffect(()=>{
     total()
   } , [total])
  return (
       <div className='row justify-content-center m-0'>
         <div className='col-md-8 mt-5 mb-5 cardsdetails'>
           <div className='card'>
             <div className='card-header bg-dark p-3'>
               <div className='card-header-flex'>
                  <h5 className='text-white m-0'>Cart Calculation({cart.length>0 ? cart.length :""})</h5>
                  {
                    cart.length >0 ?<button className='btn btn-danger mt-0 btn-sm ' onClick={empty}><span style={{padding:'4px'}}>empty</span><FontAwesomeIcon icon={faTrash} /></button>
                    : ""
                  }
               </div>
             </div>
             <div className='card-body p-0'>
               {
                cart.length ===0 ? 
                <table className='table cart-table mb-0'> 
                    <tbody>
                        <tr>
                          <td colSpan={6}>
                            <div className='cart-empty'>
                            <FontAwesomeIcon icon={faTrash} />
                            <h3>Your cart is Empty</h3>
                            </div>
                          </td>
                        </tr>
                    </tbody>
                </table> :
                <table className='table cart-table mb-0 table-responsive-sm'>
                  <thead >
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className='text-right'><span id='amount' className='amount'>Amount</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.map((element ,index )=>(
                        <tr>
                          <td>
                            <button className='prdct-delete' onClick={()=>remove(element.id)}> <FontAwesomeIcon icon={faTrash} /></button>
                          </td>
                          <td>
                            <div className='product-img'>
                                   <img src={element.imgdata} alt="" />         
                            </div>
                          </td>
                          <td>
                            <div className='product-name'>
                             <p>{element.dish}</p>
                            </div>
                          </td>
                          <td>{element.price}</td>
                         <td>
                         <div className="prdct-qty-container">
                            <button className='prdct-qty-btn' type='button' onClick={element.qnty <=1 ? ()=>remove(element.id):()=>decrement(element)}>
                            <FontAwesomeIcon icon={faMinus} />
                              </button>
                              <input type="text" className='qty-input-box'  value={element.qnty} disabled/>
                              <button className='prdct-qty-btn' type='button' onClick={()=>increment(element)}>
                            <FontAwesomeIcon icon={faPlus} />
                              </button>
                         </div>
                          </td> 
                        
                          <td className='text-right'>{element.price *element.qnty}</td>
                        
                       
                        </tr>
                  
                      ))
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{cart.length}</span></th>
                      <th className='text-right'>Total Price <span  className='ml-2 mr-2'>:</span><span className='text-danger'>{totalprice}</span></th>
                    </tr>
                  </tfoot>
                </table>
    
               }
             </div>
           </div>
         </div>
       </div>
  )
}

export default Cartdetails