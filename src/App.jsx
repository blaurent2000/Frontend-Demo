import './App.css';
import ToDoList from './pages/ToDoList';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Next from '@mui/icons-material/NavigateNext';
import Prev from '@mui/icons-material/NavigateBefore';
import { useState } from 'react';
import PredictiveMaintenanceSimulator from './pages/PredictiveMaintenanceSimulator';
import Calculator from './pages/Calculator';

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="body-background h-screen flex items-center justify-center">
      <BrowserRouter>
        <Menu />
        <div className='fixed top-50'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/to-do-list" element={<ToDoList taskList={taskList} setTaskList={setTaskList} />} />
            <Route path="/predictive-maintenance-simulator" element={<PredictiveMaintenanceSimulator />} />
          </Routes>
        </div>
        {/* <div className="absolute bottom-10 flex justify-center items-center gap-4">
					<Prev
					color="primary"
					sx={{ fontSize: 50 }}
					className="hover:scale-110 ease-out hover:text-pink-600 duration-300 text-4xl"
					/>
					<Next
					color="primary"
					sx={{ fontSize: 50 }}
					className="hover:scale-110 ease-out hover:text-pink-600 duration-300"
					/>
				</div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
