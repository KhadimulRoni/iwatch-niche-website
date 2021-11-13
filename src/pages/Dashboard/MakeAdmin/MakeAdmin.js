import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
   const [email, setEmail] = useState('');

   const handleOnBlur = e => {
      setEmail(e.target.value);
   };
   const handleOnSubmit = e => {
      const user = { email };
      //    we can use Axios instead of this system
      fetch('http://localhost:5000/users/admin', {
         method: 'PUT',
         header: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(user),
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
         });

      e.preventDefault();
   };
   return (
      <div>
         <h2>This is make admin page</h2>
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
            <Button type="submit" variant="contained">
               Make Admin
            </Button>
         </form>
      </div>
   );
};

export default MakeAdmin;
