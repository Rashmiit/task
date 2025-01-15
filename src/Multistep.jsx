// import React, { useState } from 'react'

// function Multistep() {
//   const[item,setItem]=useState("")
//   const[add,setAdd]=useState([])
//   const addItem=()=>{
//     if(item){
//       setAdd([...add,item])
//     }
//   }
//   const handleItem=(e)=>{
//     setItem(e.target.value)
//   }

//   return (
//     <div>
//       <h1>Multi-Step form</h1>
//       <label>Name</label>
//       <input type='text' placeholder='Enter your Name' value={item} onChange={handleItem} ></input><br></br>
//       <button onChange={addItem}>Next{setAdd}</button>
//       <label>Email</label>
//       <input type='text' placeholder='Enter your Name' value={item} onChange={handleItem} ></input><br></br>
//       <button>Back</button>
//       <button>Next</button>

//     </div>
//   )
// }

// export default Multistep



import React, { useState } from 'react';

function Multistep() {
  const [step, setStep] = useState(1); // Track current step
  const [name, setName] = useState(''); // Track name input
  const [email, setEmail] = useState(''); // Track email input

  // Go to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>

      {step === 1 && (
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button onClick={prevStep}>Back</button>
          <button onClick={() => (`Name: ${name}, Email: ${email}`)}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Multistep;
