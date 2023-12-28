
import './App.css';
import { TextField} from '@mui/material';
import Stack from '@mui/material/Stack';
import {Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const [Principle,setPrinciple]=useState(0);
  const [Interest,setInterest]=useState(0);
  const [Year,setYear]=useState(0);
  const [Simple_interest,setSimple_interest]=useState(0);
  /* console.log("===============");
  console.log(Principle);
  console.log(Interest);
  console.log(Year); */

  const formSubmit=(e)=>{
    e.preventDefault();//to avoid reloading page
   /*  console.log(Principle);
    console.log(Interest);
    console.log(Year);  */

    let result=Principle*Interest*Year/100;
    setSimple_interest(result);
  }

  function clearForm() {
    setInterest(0);
    setPrinciple(0);
    setSimple_interest(0);
    setYear(0);
  }

  return (
    <div className='d-flex justify-content-center align-items-center' >

      <div style={{ backgroundColor: 'white', width: '350px' }} className='h-100 d-flex align-items-center  m-5 p-2 flex-column rounded '>
        <h2>Simple Interest App</h2>
        <p>Calculate your simple interest Early</p>

        <div style={{ height: '120px' }} className='w-75 flex-column justify-content-center align-items-center bg-warning d-flex align-items-center m-3 rounded '>
          <h2>{'\u20B9'}{Simple_interest}</h2>
          <p>Total simple interest</p>
        </div>

        <form action="" className='mt-3 ' onSubmit={formSubmit}>
          <div className='mb-3'>
            <TextField value={Principle} className='w-100' id="outlined-basic" label="Principle amount" variant="outlined" 
            onChange={(e)=>setPrinciple(e.target.value)} />
          </div>
          <div className='mb-3'>
            <TextField value={Interest} className='w-100' id="outlined-basic" label="Rate of Interest(%)" variant="outlined"
            onChange={(e)=>setInterest(e.target.value)} />
          </div>
          <div className='mb-3'>
            <TextField value={Year} className='w-100' id="outlined-basic" label="Year(Y)" variant="outlined" 
            onChange={(e)=>setYear(e.target.value)}/>
          </div>

          <Stack direction="row" spacing={2} >
            <Button type='submit' className='m-4' variant="contained" color="success">
              Calculate
            </Button>
            <Button type='submit' className='m-4 bg-light text-dark'  variant="contained " onClick={clearForm}>
              Reset
            </Button>
          </Stack>
        </form>
      </div >
    </div>
  );
}
export default App;
