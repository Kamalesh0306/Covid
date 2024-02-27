import { MDBContainer, MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: 'rgb(17, 16, 16)' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgb(17, 16, 16)' }}>
        © 2024 Copyright: 
        <a className='text-white' href='https://mdbootstrap.com/'>
           ASH 🩵
        </a>
      </div>
    </MDBFooter>
  );
}
