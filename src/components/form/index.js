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
        const formData = {
            method: obtions,
            url: e.target[0].value
        };
        props.handleApiCall(formData);
        // let url = 'https://reqres.in/api/posts';
        let url = e.target[0].value;
        axios.get(url)
      .then(res => {
        const persons = res.data;
        props.sendToParent(persons)
      }).catch((err)=>{
        console.log(err);
      });

      e.target[0].value = null;
  }
    
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
