import { useActionState, useContext, useEffect, useState } from 'react'
import './update.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import React from 'react';


const UpdateState = ({handleUpdate}) => {


    const [Coustum,setCoustum]=useState('')
    const {url}=useContext(StoreContext)

    const [showStatus,setShowStatus]=useState(false)

    const [data,setData]=useState('')

    const [token,setToken]=useState('')
    const handleStatus=async()=>{

        const res=await axios.get(`${url}/api/transaction/get/tranaction-status/${Coustum}`,{
            headers:token
        })

          console.log(res.data.data)
          setData(res.data.data)


    }

    useEffect(()=>{
        const authToken=localStorage.getItem('authToken')

        if(authToken){

            setToken(authToken)
        }
    })


    return (
        <div className="update">

            <div className='login-form'>


                
               <div className="form">
               <p className='heading'>Check Status</p>


{
   data?<p className='status-text'>Status : {data[0].status}</p>  :<input onChange={(e)=>setCoustum(e.target.value)} placeholder='Enter the Coustom Order ID'/>
}
             
              
<br></br>
               <button className='btn-1 btn-save' onClick={handleStatus}>Check</button>

               <button onClick={handleUpdate} className='btn-1 btn-can'>Cancle</button>

               </div>


            </div>

        </div>
    )


}

export default UpdateState