import React from 'react'
import Swal from "sweetalert2"; 

export default function Date(props) {
    let newData = props.data[props.i];
  return (
    <div>
                <pre >{newData.data ? JSON.stringify(newData.data, undefined, 2) : null}</pre>
    </div>
  )
}
