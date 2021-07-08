import {Link} from "react-router-dom";

const Task = ({id, tipTask, name, durataLimita, durataEstimata, handleDelete, completed}) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    function dateDiffInDays(a, b) {
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }


    let today: Date;
    today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear()
    today = yyyy + '-' + mm + '-' + dd;

    const a = new Date(today),
        b = new Date(durataLimita),
        difference = dateDiffInDays(a, b);

    const getTypeName = () => {
        if (tipTask === "Work") return "#00A170";
        if (tipTask === "Home") return "#9BB7D4";
        if (tipTask === "Hobby") return "#F7CAC9";
    }

    const typeColorStyle = () => {
        const myStyle = {
            backgroundColor: getTypeName()
        };
        return myStyle;
    }


    return (
        <>
            <tr>
                <td>
                    {completed ? name :
                        <Link to={`/task/${id}`}>
                            <span>{name}</span>
                        </Link>}
                </td>
                <td style={typeColorStyle()}>{tipTask}</td>
                <td style={{backgroundColor: difference <= 0 && !completed ? "red" : ""}}>{durataLimita}</td>
                <td>{durataEstimata}</td>
                <td>{difference}</td>
                <td> {completed ? "done" : "ongoing"}  </td>
                <td>
                    <button disabled={completed} className={`btn btn-${completed ? "success" : "danger"}`}
                            onClick={() => handleDelete(id)}> {completed ? "Completed" : "Delete"}
                    </button>
                </td>
            </tr>
        </>
    );
}
export default Task;
