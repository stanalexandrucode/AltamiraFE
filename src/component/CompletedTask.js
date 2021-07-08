import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {Form} from "react-bootstrap";
import axios from "axios";

const CompletedTask = () => {
    const [nrOfDays, setNrOfDays] = useState();

    const history = useHistory();

    const handleUpdate = async (e) => {
        e.preventDefault()
        let response = await axios({
            method: 'post',
            url: `http://localhost:8080/task/update/${param.id}`,
            data: {nrOfDays},
        }).catch((err) => console.log('Error:', err));
        if (response) {
            history.push("/")
        }
    }

    const param = useParams();


    return (
        <div className="center" style={{marginTop: 120}}>
            <div className="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Time Spent on Task in Days</Form.Label>
                    <Form.Control
                        onChange={e => setNrOfDays(e.target.value)}
                        type="number" min="0"/>
                    <button className="btn btn-primary" onClick={e => handleUpdate(e)}>Save</button>
                </Form.Group>
            </div>
        </div>

    );
}

export default CompletedTask;
