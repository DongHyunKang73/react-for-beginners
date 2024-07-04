import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Movie from "./components/Movie";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/hello"} element={<h1>Hello Hi</h1>} />
                <Route path={"/react-for-beginners"} element={<Home />} />
                <Route path={"/movie/:id"} element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
