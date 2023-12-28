import './App.css'
import Home from "./Containers/Home/Home";
import Toolbar from "./Components/UI/Toolbar/Toolbar";
import {Route, Routes} from "react-router-dom";
import AddNewDish from "./Containers/AddNewDish/AddNewDish";
import EditDish from './Containers/EditDish/EditDish';
import UserPage from './Containers/UserPage/UserPage';

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
                <Route path="/edit-dish/:id" element={<EditDish/>}/>
              <Route path="/user-page" element={<UserPage/>}/>
                <Route path="*" element={(<h1>Not found</h1>)}/>
            </Routes>
        </main>

    </>
  )
};

export default App
