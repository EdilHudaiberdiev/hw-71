import './App.css'
import Home from "./Containers/Home/Home";
import Toolbar from "./Components/UI/Toolbar/Toolbar";
import {Route, Routes} from "react-router-dom";
import AddNewDish from "./Containers/AddNewDish/AddNewDish";

const App = () => {

  return (
    <>
        <header>
            <Toolbar/>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin/add-new-dish" element={<AddNewDish/>}/>
                <Route path="*" element={(<h1>Not found</h1>)}/>
            </Routes>
        </main>

    </>
  )
};

export default App
