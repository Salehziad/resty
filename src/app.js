import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter, Navigate, Route, Router } from "react-router-dom";
import './app.css';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results/index';
import Swal from "sweetalert2"; 
import Header from './components/header/Header';
import { Link } from 'react-router-dom';
import Date from './components/Date';
function historyReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case 'ADD_HISTORY':
            const hestory = [
                ...state,payload
            ];
            return hestory;
        case 'CLEAR_HISTORY':
            return initialState ;
        default:
            return state;
    }
}

const addAction = (payLoad) => {
    return {type: 'ADD_HISTORY', payload: payLoad};
};

const clearAction = () => {
    return {type: 'CLEAR_HISTORY', payload: ''};
};

const initialState = [
];
function App() {
    const[state,dispatch] =useReducer(historyReducer, initialState);
    console.log(state);
    const [user,setUser]=useState({
        data: null,
        requestParams: {}
    });
    const[data1,setData]=useState('');

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
useEffect(()=>{
    if(data1){

        let x={
            requestParams:user.requestParams,
            data:data1
        }
        dispatch(addAction(x))
    }
},[data1])
const[showData,setShowDate]=useState(false);
const[id,setId]=useState(null)
    return (
        <BrowserRouter>
            <Header/>
            <p>https://reqres.in/api/posts</p>
            <Form handleApiCall={callApi} sendToParent={setData}/>
            <div className='output'>
            <Results data={data1} name={'sss'} />
            {state?
            <div>
                {
                    state.map((e,i)=>{
                        return (
                            <div key={i}>
                                <p>
                                    {e.requestParams.method}
                                </p>
                                <p>
                                    {e.requestParams.url}
                                </p>
                                <button onClick={()=>{setShowDate(!showData);
                                setId(i)}}>data</button>
                            </div>
                        )
                    })
                }
                {
                    showData?<Date data={state} i={id}/>:null
                }
            </div>:null
                }
            </div>
            <Footer/>
        </BrowserRouter>
    );

}

export default App;
