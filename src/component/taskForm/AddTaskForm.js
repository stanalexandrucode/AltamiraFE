import "bootstrap/dist/css/bootstrap.css";
import {Form} from 'react-bootstrap';
import './taskForm.css'
import axios from "axios";
import {useState} from "react";
import {useHistory} from 'react-router-dom';

const AddTaskForm = () => {
    const history = useHistory();

    const [values, setValues] = useState({
        typeTask: '', name: '', timeLimit: '', estimatedTime: ''
    });
    const set = name => {
        return ({target: {value}}) => {
            setValues(oldValues => ({...oldValues, [name]: value}));
        }
    };

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear()
    today = yyyy + '-' + mm + '-' + dd;


    const onSubmit = async (e) => {
        e.preventDefault()

            let response = await axios({
                method: 'post',
                url: 'http://localhost:8080/task/add',
                data: {
                    typeTask: values.typeTask,
                    name: values.name,
                    timeLimit: values.timeLimit,
                    estimatedTime: values.estimatedTime
                },
            }).catch((err) => console.log('Error:', err));
            if (response) {
                history.push("/")
            }
    }


    return (
        <>
            <div className="center" style={{marginTop: 120}}>
                <div className="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
                    <form onSubmit={onSubmit}>
                        <Form.Group controlId="exampleForm.ControlSelect1"
                                    value={values.typeTask} onChange={set('typeTask')}>
                            <Form.Label>Tip Task</Form.Label>
                            <Form.Control
                                as="select"
                                type="text"
                                required>
                                <option value="">Select Type</option>
                                <option>Work</option>
                                <option>Home</option>
                                <option>Hobby</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group
                            controlId="formBasicPassword"
                            required
                            value={values.name} onChange={set('name')}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="name"
                                required/>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <label>Time Limit</label>
                            <input
                                value={values.timeLimit} onChange={set('timeLimit')}
                                className="form-control"
                                type="date"
                                id="dev_end_date"
                                min={today}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Estimated Time In Days</Form.Label>
                            <Form.Control
                                value={values.estimatedTime} onChange={set('estimatedTime')}
                                type="number"
                                required
                                min="1"
                                placeholder="Time Limit"/>
                        </Form.Group>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default AddTaskForm;
