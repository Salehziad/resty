import React, {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './form.css';
function FORM(props) {
    const [showBody,
        setShowBody] = useState(null);
        let[obtions,setObtions]=useState('GET')
    const handleSubmit = async(e) => {
        e.preventDefault();
        //CALL THE METHOD
        const formData = {
            method: obtions,
            url: e.target[0].value
        };
        console.log(e)
        props.handleApiCall(formData);
        // let requestOptions={};
        // e.target[1].value==='GET'?requestOptions= {
        //     method: e.target[1].value,
        //     headers:  {
        //             "access-control-allow-origin": "*",
        //             "Content-type": "application/json; charset=UTF-8"
        //         }
        // }
        // :requestOptions={
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ title: e.target[1].value })
        // }
        // let url = 'https://reqres.in/api/posts';
        let url = e.target[0].value;
        // let response = await fetch(url, requestOptions);
        // let x = await response.json();
        axios.get(url)
      .then(res => {
        const persons = res.data;
        console.log(persons);
        // setData(persons)
        props.sendToParent(persons)
        // console.log(persons);
      }).catch((err)=>{
        console.log(err);
      });

      e.target[0].value = null;
  }
        // console.log(props)
    
    const handleObtions = (e) => {
        setObtions(e.target.value)
        e.target.value === 'POST' || e.target.value === 'PUT'
            ? setShowBody(true)
            : setShowBody(false);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 first">
                    {/* <Form.Label>Url</Form.Label> */}
                    <Form.Control type='text' placeholder="Enter Url"/>
                </Form.Group>
                {showBody
                    ? <Form.Group className="mb-3 second">
                            {/* <Form.Label>Body</Form.Label> */}
                            <Form.Control type='text' placeholder="Enter Body"/>
                        </Form.Group>
                    : null}
                <Form.Group className="mb-3 select">
                    {/* <Form.Label>Select Method</Form.Label> */}
                    <Form.Select onChange={handleObtions}>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                    </Form.Select>
                </Form.Group>
                <Button className='btn' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default FORM;
