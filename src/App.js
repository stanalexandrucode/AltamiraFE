import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import Routes from "./routing/Routes";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    return (
        <>
            <ToastContainer/>
            <main>
                <Routes/>
            </main>
        </>
    );
}

export default App;

