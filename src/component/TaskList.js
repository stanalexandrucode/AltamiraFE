import Task from "./Task";
import {useEffect, useState} from "react";
import axios from "axios";

const TaskList = () => {
    const [tasksList, setTasksList] = useState([])

    const fetchData = async () => {
        let url = "http://localhost:8080/task/getAll";
        const response = await axios
            .get(url)
            .catch((err) => console.log('Error:', err));
        if (response && response.data) {
            return response.data.sort((a, b) => a.taskCreatedAt > b.taskCreatedAt ? -1 : 1)
        }
    }

    const showTasks = async () => {
        await fetchData().then(r => setTasksList(r));
    };

    const handleDelete = async (id) => {
        let taskListFilter = tasksList.filter((task) => task.id !== id);
        await axios({
            method: 'delete',
            url: `http://localhost:8080/task/delete/${id}`,
        }).catch((err) => console.log('Error:', err));
        setTasksList(taskListFilter);
    }


    useEffect(() => {
        showTasks();
    }, []);

    return (
        <>
            {tasksList.map((item) => {
                return (
                    <tbody key={item.id} className="table-primary">
                    <Task
                        {...item}
                        handleDelete={handleDelete}
                    />
                    </tbody>
                );
            })}
        </>
    );
}
export default TaskList;
