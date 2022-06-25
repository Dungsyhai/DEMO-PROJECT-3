import React from 'react'
import currencyFormatter from "currency-formatter";
import {useSelector} from "react-redux";
export const Cashout = () => {
   const {totalPrice} = useSelector(state => state.CartReducer);
  return (
    <div>
      <form autoComplete="off" className='form-cashout'>
      <h1>Cashout</h1>
         <label htmlFor="name">Name</label>
            <input type="text" className='form-control' required/>
         <br />
         <label htmlFor="email">Email</label>
         <input type="email" className='form-control' required/>
         <br />
         <label htmlFor="Cell No">Số Điện thoại</label>
         <input type="number" className='form-control' required/>
         <br />
         <label htmlFor="Delivery Address">Địa chỉ</label>
         <input type="text" className='form-control' required />
         <br />
         <div className='price-to-pay'>Tổng số tiền: 
            <span>{currencyFormatter.format( totalPrice, {code: 'VND'})}</span>
            <button type="submit" className='submit'>Đặt hàng</button>
         </div>
         
      </form>
    </div>
  )
}
