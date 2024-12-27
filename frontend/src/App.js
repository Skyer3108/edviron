
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Transactions from './Components/Transactions/Transaction';

import { useEffect, useState } from 'react';
import Login from './Components/Login/Login';
import SchoolData from './Components/SchoolData/SchoolData';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToken=(token)=>{

    console.log('jjj')
    localStorage.setItem('authToken',token)

    setIsLoggedIn(true)

  }

  

  useEffect(()=>{

    const token=localStorage.getItem('authToken')

    if(token){
      setIsLoggedIn(true); 
    }

  },[])

  let one=1
  return (
    <div className="App">

      
      <Routes>

        <Route  path='/' element={<Login  handleToken={handleToken}/>}/>
  
 <Route path='/transactions' element={isLoggedIn?<Transactions/>:<Login   handleToken={handleToken}/>} />

 <Route path='/school/:collect_id' element={isLoggedIn?<SchoolData/>:<Login   handleToken={handleToken}/>}/>
      </Routes>
   
    
    </div>
  );
}

export default App;
