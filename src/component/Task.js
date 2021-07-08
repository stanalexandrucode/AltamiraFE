import {Link} from "react-router-dom";

const Task = ({id, tipTask, name, durataLimita, durataEstimata, handleDelete, completed}) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    function dateDiffInDays(a, b) {
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }


    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear()
    today = yyyy + '-' + mm + '-' + dd;

    const a = new Date(today),
        b = new Date(durataLimita),
        difference = dateDiffInDays(a, b);


    return (
        <>
            <tr>
                <td>
                    <Link to={`/task/${id}`}>
                        <span>{name}</span>
                    </Link>
                </td>
                <td>{tipTask}</td>
                <td>{durataLimita}</td>
                <td>{durataEstimata}</td>
                <td>{difference}</td>
                <td> {completed ? "done" : "ongoing"}  </td>
                <td>
                    <button disabled={completed} className={`btn btn-${completed ? "success" : "danger"}`} onClick={() => handleDelete(id)}> {completed ? "Completed" : "Delete"}
                    </button>
                </td>
            </tr>
        </>
    );
}
export default Task;
