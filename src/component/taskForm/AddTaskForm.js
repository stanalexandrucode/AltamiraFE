import "bootstrap/dist/css/bootstrap.css";
import {Form} from 'react-bootstrap';
import './taskForm.css'
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars';

const AddTaskForm = () => {
    const startValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 14);
    const endValue: Date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15);
    const minDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 8);
    // const maxDate: Date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 20);

    return (
        <>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Tip Task</Form.Label>
                        <Form.Control as="select">
                            <option>Work</option>
                            <option>Home</option>
                            <option>Hobby</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="name"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Data Limita,</Form.Label>
                        <DateRangePickerComponent
                            placeholder="Enter Date Range"
                            // startDate={startValue}
                            endDate={endValue}
                            min={minDate}
                            // max={maxDate}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Durata Estimata</Form.Label>
                        <DateRangePickerComponent
                            placeholder="Enter Date Range"
                            // startDate={startValue}
                            endDate={endValue}
                            min={minDate}
                            // max={maxDate}
                            minDays={1}
                            // maxDays={5}
                        />
                    </Form.Group>
                    <button className="btn btn-primary">Save task</button>
                </Form>
        </>
    );
}
export default AddTaskForm;
