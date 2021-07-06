import "bootstrap/dist/css/bootstrap.css";
import {Form} from 'react-bootstrap';

const AddTaskForm = () => {


    return (
        <>
            <div className="form-control">
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Tip Task</Form.Label>
                        <Form.Control as="select">
                            <option>Work</option>
                            <option>Home</option>
                            <option>Hobby</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  type="number" id="replyNumber" min="0" data-bind="value:replyNumber" placeholder="name@example.com"/>
                    </Form.Group>


                </Form>
            </div>
        </>
    );
}
export default AddTaskForm;
