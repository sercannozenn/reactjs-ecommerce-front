import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './assets/css/index.css'
import './assets/css/bootstrap5_additions.css'
import MainLayout from "./layouts/MainLayout.tsx";
import {Routes, Route} from "react-router";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";

function App() {

    return (
        <>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </MainLayout>
        </>
    )
}

export default App
