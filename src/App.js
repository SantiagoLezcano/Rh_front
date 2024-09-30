import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./employee/EmployeeList";
import Navigation from "./templates/navigation";
import AddEmployee from "./employee/AddEmployee";
import EditEmployee from "./employee/EditEmployee";

function App() {
  return (
    <div className="container text-center"> 
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<EmployeeList/>}/>
          <Route exact path='/add' element={<AddEmployee/>}/>
          <Route exact path='/edt/:id' element={<EditEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
