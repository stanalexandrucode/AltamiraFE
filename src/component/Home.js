import {useHistory} from 'react-router-dom';
import {Table} from "react-bootstrap";
import TaskList from "./TaskList";
import {Dropdown, DropdownButton} from "react-bootstrap";
import "./Home.css"


const Home = () => {
    const history = useHistory();
    const handleGoToTaskFrom = () => {
        history.push("/addNewTask")
    }


    return (
        <>

            <div className="nameUser">
                <h3>Stan Alexandru</h3>
            </div>
            <div className="center">
                <h1>To do List</h1>
            </div>
            <div className="center">
                <div className="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
                    <div className="addBtn">
                        <DropdownButton id="dropdown-basic-button" title="Sort Task By">
                            <Dropdown.Item href="#/action-1">Descending</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ascending</Dropdown.Item>

                        </DropdownButton>
                    </div>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Tip Task</th>
                            <th>Expired Time Limit</th>
                            <th>Estimated Time</th>
                            <th>Remaining Days</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <TaskList/>
                    </Table>
                    <div className="addBtn">
                        <button className="btn btn-primary" onClick={handleGoToTaskFrom}>Add task</button>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Home;
