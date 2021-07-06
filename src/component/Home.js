import TaskList from "./TaskList";
import {useHistory} from 'react-router-dom';


const Home = () => {
    const history = useHistory();
    const handleGoToTaskFrom = () => {
        history.push("/addNewTask")
    }
    return (
        <>
            <div>
                <h3>Stan Alexandru</h3>
            </div>
            <div>
                <p>To do List</p>
            </div>
            <div>
                <TaskList/>
            </div>
            <button onClick={handleGoToTaskFrom}>Add task</button>
        </>
    );
}
export default Home;
