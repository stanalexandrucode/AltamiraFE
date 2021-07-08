import {useHistory} from 'react-router-dom';
import TaskList from "./TaskList";
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

                    <TaskList/>
                    <div className="addBtn">
                        <button className="btn btn-primary" onClick={handleGoToTaskFrom}>Add task</button>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Home;
