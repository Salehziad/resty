import React, { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import Swal from "sweetalert2"; 

function App() {
    const [user,setUser]=useState({
        data: null,
        requestParams: {}
    });
    // setUser("addedRecipe");
    // console.log(user);
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
    // mock output
    // console.log('req',requestParams);
    const data = {
        count: 2,
        results: [
            {
                name: 'fake thing 1',
                url: 'http://fakethings.com/1'
            }, {
                name: 'fake thing 2',
                url: 'http://fakethings.com/2'
            }
        ]
    };
    if (requestParams) {
        // setUser.data="ffff"
        setUser({...user,data:data,requestParams:requestParams});
        Toast.fire({
            icon: 'success',
            title: 'Your Url request is Succesfully'
          })
    }
}
console.log('ddd',user);
console.log(user.requestParams.method)

    return (
        <React.Fragment>
            <Header/>
            {/* {console.log('ccc',state)} */}
            <div>Request Method:{user.requestParams.method}</div>
            <div>URL: {user.requestParams.url}</div>
            <Form handleApiCall={callApi}/>
            <Results data={user.data}/>
            <Footer/>
        </React.Fragment>
    );

}

export default App;
