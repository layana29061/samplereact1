
import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const [Principle, setPrinciple] = useState(0);
  const [Interest, setInterest] = useState(0);
  const [Year, setYear] = useState(0);
  const [Simple_interest, setSimple_interest] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isInterest, setIsInterest] = useState(true);
  const [isYear, setIsYear] = useState(true);
  /* console.log("===============");
  console.log(Principle);
  console.log(Interest);
  console.log(Year); */

  const formSubmit = (e) => {
    e.preventDefault();//to avoid reloading page
    /*  console.log(Principle);
     console.log(Interest);
     console.log(Year);  */

    let result = Principle * Interest * Year / 100;
    setSimple_interest(result);
  }

  function clearForm() {
    setInterest(0);
    setPrinciple(0);
    setSimple_interest(0);
    setYear(0);
  }

  //validating the form
  const validate = (e) => {
    const { value, name } = e.target;//object destructuring
    if (!!value.match(/^[0-9]+$/)) {
      if (name === 'principle') {//here we are using sam validate function for all fiels so we have t set thigs using name otherwise it retive same value on each field.
        setPrinciple(value);
        setIsPrinciple(true);
      }
      else if (name === 'interest') {
        setInterest(value);
        setIsInterest(true);
      }
      else {
        setYear(value);
        setIsYear(true);
      }

    }
    else {
      if (name === 'principle') {
        setPrinciple(value);
        setIsPrinciple(false);
      }
      else if (name === 'interest') {
        setInterest(value);
        setIsInterest(false);
      }
      else {
        setYear(value);
        setIsYear(false);
      }
    }
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
            <TextField name='principle' value={Principle} className='w-100' id="outlined-basic" label="Principle amount" variant="outlined"
              onChange={(e) => validate(e)} />
          </div>

          {/* validating principle amount */}
          {!isPrinciple &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>}

          <div className='mb-3'>
            <TextField name='interest' value={Interest} className='w-100' id="outlined-basic" label="Rate of Interest(%)" variant="outlined"
              onChange={(e) => validate(e)} />
          </div>

          {!isInterest &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>}


          <div className='mb-3'>
            <TextField name='year' value={Year} className='w-100' id="outlined-basic" label="Year(Y)" variant="outlined"
              onChange={(e) => validate(e)} />
          </div>

          {!isYear &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>}


          <Stack direction="row" spacing={2} >
            <Button disabled={!isPrinciple || !isInterest || !isYear} type='submit' className='m-4' variant="contained" color="success">
              Calculate
            </Button>
            <Button type='submit' className='m-4 bg-light text-dark' variant="contained " onClick={clearForm}>
              Reset
            </Button>
          </Stack>
        </form>
      </div >
    </div>
  );
}
export default App;
