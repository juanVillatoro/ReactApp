import { Routes, Route } from "react-router-dom";
import Home from '../views/Home';
import Padre from '../components/MyComponent'

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/counter" element={<Padre />}/>
            </Routes>
        </div>
    )
}

export default Router;