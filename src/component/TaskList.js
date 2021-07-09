import Task from "./Task";
import {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import useSortableData from "./UseSortableData";

const TaskList = () => {
    const [tasksList, setTasksList] = useState([])
    const {items, requestSort, sortConfig, isSorted} = useSortableData(tasksList);


    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };


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
            <div className="addBtn">
                <button
                    onClick={() => requestSort('timeLimit')}
                    className="btn btn-primary"
                >Sort  { isSorted ? "Ascending" : "Descending"}
                </button>

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
                {items.map((item) => {
                    return (
                        <tbody key={item.id} className="table-primary">
                        <Task
                            {...item}
                            handleDelete={handleDelete}
                        />
                        </tbody>
                    );
                })}
            </Table>
        </>
    )

}
export default TaskList;
