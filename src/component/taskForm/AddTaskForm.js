import "bootstrap/dist/css/bootstrap.css";
import {Form} from 'react-bootstrap';
import './taskForm.css'
import axios from "axios";
import {useState} from "react";
import {useHistory} from 'react-router-dom';

const AddTaskForm = () => {

    const [tipTask, setTipTask] = useState();
    const [name, setName] = useState();
    const [durataLimita, setDurataLimita] = useState();
    const [durataEstimata, setDurataEstimata] = useState();

    const history = useHistory();

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear()
    today = yyyy + '-' + mm + '-' + dd;


    const handleAdd = async (e) => {
        e.preventDefault()
        let response = await axios({
            method: 'post',
            url: 'http://localhost:8080/task/add',
            data: {tipTask, name, durataLimita, durataEstimata},
        }).catch((err) => console.log('Error:', err));
        if (response) {
            history.push("/")
        }
    }
    // <Form.Control type="text" ref={lastNameRef} required/>
    return (
        <>
            <div className="center" style={{marginTop: 120}}>
                <div className="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1"
                                    onChange={e => setTipTask(e.target.value)}>
                            <Form.Label>Tip Task</Form.Label>
                            <Form.Control as="select"
                                          type="text" required
                            >
                                <option>Work</option>
                                <option>Home</option>
                                <option>Hobby</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword"
                                    onChange={e => setName(e.target.value)}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="name" required/>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <label>Data limita</label>
                            <input
                                onChange={e => setDurataLimita(e.target.value)}
                                className="form-control"
                                type="date" id="dev_end_date"
                                min={today}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Durata limita in zile</Form.Label>
                            <Form.Control
                                onChange={e => setDurataEstimata(e.target.value)}
                                type="number" min="0" placeholder="Durata"/>
                        </Form.Group>

                        <button className="btn btn-primary" onClick={e => handleAdd(e)}>Save task</button>
                    </Form>
                </div>
            </div>
        </>
    );
}
export default AddTaskForm;
