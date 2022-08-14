import React, { useState } from 'react';

import './app.css';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import Swal from "sweetalert2"; 
import Header from './components/header/Header';

function App() {
    const [user,setUser]=useState({
        data: null,
        requestParams: {}
    });
    const[data1,setData]=useState('');
    let state = {
        data: null,
        requestParams: {}
    };
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

function callApi (requestParams) {
    if (requestParams) {
        setUser({...user,requestParams:requestParams});
        Toast.fire({
            icon: 'success',
            title: 'Your Url request is Succesfully'
          });
    }
}
    return (
        <React.Fragment>
            <Header/>
            {/* <div>Request Method : {user.requestParams.method}</div> */}
            {/* <div>URL : {user.requestParams.url}</div> */}
            <Form handleApiCall={callApi} sendToParent={setData}/>
            {/* {console.log("aaa",x)} */}
            <Results data={data1}/>
            <Footer/>
        </React.Fragment>
    );

}

export default App;
