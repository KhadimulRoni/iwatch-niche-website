import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
   const [email, setEmail] = useState('');
   const [success, setSuccess] = useState(false);

   const handleOnBlur = e => {
      setEmail(e.target.value);
   };
   const handleOnSubmit = e => {
      const user = { email };
      //    we can use Axios instead of this system
      fetch('http://localhost:5000/users/admin', {
         method: 'PUT',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(user),
      })
         .then(res => res.json())
         .then(data => {
            if (data.modifiedCount) {
               console.log(data);
               setSuccess(true);
            }
         });

      e.preventDefault();
   };
   return (
      <div>
         <h2>MAKE ADMIN</h2>
         <form onSubmit={handleOnSubmit}>
            <TextField
               style={{
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  width: '50%',
                  margin: '15px 0',
               }}
               label="Email"
               type="email"
               onBlur={handleOnBlur}
               variant="filled"
            />
            <br />
            <Button className="w-25" type="submit" variant="contained">
               SUBMIT
            </Button>
         </form>
         {success && (
            <Alert severity="success">Admin Successfully Added !</Alert>
         )}
      </div>
   );
};

export default MakeAdmin;
