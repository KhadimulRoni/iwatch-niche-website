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
      fetch('https://glacial-hamlet-57290.herokuapp.com/users/admin', {
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
      <div style={{ textAlign: 'center', width: '100%', height: '100vh' }}>
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
         <br />
         {success && (
            <Alert severity="success">Admin Successfully Added !</Alert>
         )}
      </div>
   );
};

export default MakeAdmin;
