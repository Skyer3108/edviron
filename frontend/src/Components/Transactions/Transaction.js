
import { useContext, useEffect, useState } from 'react'
import './transactions.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext'
import UpdateState from '../UpdateStatus/UpdateStatus'

const Transactions = () => {

  const { url } = useContext(StoreContext)
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [statusFilter, setStatusFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1);

  const [openUpdate,setOpenUpdate]=useState(false)
  const [ser, setSer] = useState('')


  const navigate=useNavigate()
  const itemsPerPage = 10;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  const currentItems = filteredData.length > 0 ? filteredData.slice(startIndex, endIndex) : data.slice(startIndex, endIndex);




  const handlePrevPage = () => {
    if (currentPage > 1) { setCurrentPage(currentPage - 1); }
  };


  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };


  const handlePageClick = (page) => {
    setCurrentPage(page);

  };


  //School redirect
  const handelSchool=(collect_id)=>{
    console.log('hello')
    navigate(`/school/${collect_id}`)
  }

  const fetchData = async () => {

    try {

      const res = await axios.get(url + '/api/transaction/get-all-transactions')

      console.log(res)

      setData(res.data.data)
      setFilteredData(res.data.data);
    } catch (err) {

      alert(`ERROR ${err.message}`)
    }

  }

  //logiut
  const handleLogout=()=>{

    alert('Logout Succesfully')
    localStorage.removeItem('authToken')

   navigate('/')
  }


  //status handle

  const handleStatusFilter = (e) => {

    console.log('filter')

    const selectedStatus = e.target.value;
    setStatusFilter(selectedStatus);
    filterData(ser, selectedStatus);

  }

  //handle search
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSer(searchTerm);
    filterData(searchTerm, statusFilter);
  };


  const filterData = (searchTerm, status) => {

    let filtered = data
    if (searchTerm) {
      filtered = filtered.filter((item) =>

        item.collect_id.includes(searchTerm)

      )

    }

    if (status && status !== 'All') {
      filtered = filtered.filter((item) => item.status === status);
    }


    setFilteredData(filtered);
    setCurrentPage(1)

  }




  useEffect(() => {

    fetchData()

  }, [])


  const handleUpdate=()=>{
    setOpenUpdate(!openUpdate)
  }



  return (

    <div className="main-trans">

{
    openUpdate?  <UpdateState handleUpdate={handleUpdate}/>:""
  
}
      

      <div className='main'>
      <div className="head">
        <p className='head-name'>History</p>

       
        <button onClick={handleLogout} className='btn-log'>Logout</button>
      </div>

      <div className="serach">

        <div>
          <input value={ser} onChange={handleSearch} type='text' placeholder="Search(Order Id..)" />
          <button onClick={handleSearch}>Ser</button>
        </div>

        <div className='filter'>
          <select value={statusFilter} onChange={handleStatusFilter}>

            <option value='All'>All</option>

            <option value='SUCCESS'>Success</option>
            <option value='PENDING'>Pending</option>
            <option value='FAILURE'>Failure</option>

          </select>

          <button onClick={handleUpdate} className='btn'>Check  Status By Custom Id</button>
        </div>

      </div>

      <p className='rows'>Rows Per Page 10</p>


      <div className='list'>

        <div className='list-head'>
          <p>Sr.no</p>
          <p>Collect ID</p>
          <p>School Id</p>
          <p>Gateway</p>
          <p>Order Amount</p>
          <p>Payment Method</p>
          <p>Status</p>
          <p>Custom Order Id</p>



        </div>

        {
          currentItems?.map((item, index) => (
            <div key={index} className='list-data'>

              <p>{index + 1}</p>
              <p>{item.collect_id}</p>
              <div className='hover-container'>
              
              <p onClick={()=>handelSchool(item.collect_id)} className='school'>school100{index}</p>
              <span className="message">Click Here to get More Details</span>
                </div>
           
              <p>{item.gateway}</p>
              <p>{item.bank_reference}</p>
              <p>{item.bank_reference}</p>
              <p className={item.status}>{item.status}</p>
              <p>{item.custom_order_id}</p>
            </div>
          ))
        }




      </div>

      <div className='pagi'>

        <div>

          <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>

          {
            [...Array(totalPages).keys()].map((pageNum) => (
              <button key={pageNum} onClick={() => handlePageClick(pageNum + 1)}
                className={currentPage === pageNum + 1 ? 'active' : ''}>
                {pageNum + 1}
              </button>
            ))
          }

          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>

        </div>


      </div>

      </div>
      


    </div>

  )



}

export default Transactions