import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { StoreContext } from "../../Context/StoreContext"
import axios from "axios"
import './school.css'
const SchoolData=()=>{

    const {url}=useContext(StoreContext)

    const {collect_id}=useParams()
    const [details,setDetails]=useState(null)
    console.log(collect_id)

    const fetchDetails=async()=>{

        const res=await axios.get(`${url}/api/details/status/${collect_id}`)

        console.log(res.data.data[0])
        setDetails(res.data.data[0])

    }

    useEffect(()=>{
        

        fetchDetails()

    },[collect_id])

    if (details === null) {
        return <div>Loading...</div> 
      }

    return(
        <div className="school-details">
<div className="container">

     <p className="heading">Transaction Detail of {collect_id}</p> 

    <p className="detail">Payment Method:{details.payment_method}</p>
    <p className="detail">Gateway : {details.gateway}</p>
    <p className="detail">Status : {details.status}</p>
    <p className="detail">Transaction Amount : {details.transaction_amount}</p> 
            
            
            <p className="detail">Bank Reference : {details.bank_refrence}</p>

</div>
        </div>
    )


}

export default SchoolData