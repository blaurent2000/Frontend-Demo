import { useState } from "react";
import Delete from '@mui/icons-material/Delete';
import { TextField } from "@mui/material";

function ToDoList(props) {
  const [newTask, setNewTask] = useState('');

  function addNewTask() {
	if (newTask.trim() !== '') {
	  props.setTaskList([...props.taskList,  {text: newTask, completed : false}]);
	  setNewTask('');
	}
  }

  function removeTask(index) {
	props.setTaskList(props.taskList.filter((_,i) => i !== index))
  }

  function toggleCheckBox(index) {
	props.setTaskList(
		props.taskList.map((task, i) => 
		i === index ? {...task, completed: !task.completed} : task
	  ) 
	);
  }

  return (
	<div className="">
		<h1 className="text-4xl text-white mb-6">
			To Do List
		</h1>
		<div className=" overflow-x-visible">
  			<div className="flex flex-row justify-between mb-4">
				<TextField
				className="w-96 p-1 bg-white rounded"
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
				color="secondary"
				variant="filled"
				label="Add Task"
				type="text"
				/>
				<button
				className="bg-neutral-900  rounded hover:scale-110 overflow-visible ease-out mx-2 duration-300 hover:bg-pink-800"
				onClick={addNewTask}
				>
				Add Task
				</button>
			</div>
			<div className="overflow-y-auto h-96 w-full">
			{props.taskList &&
				props.taskList.map((task, index) => (
				<li key={index} className="text-white flex overflow-x-hidden  flex-row my-2 justify-between gap-2">
					<input
					type="checkbox"
					className="hover:bg-pink-800 ease-out duration-300"
					checked={task.completed}
					onChange={() => toggleCheckBox(index)}
					/>
					<p className="text-xl overflow-auto">{task.text}</p>
					<Delete
					color="primary"
					className="hover:scale-110 ease-out duration-300"
					onClick={() => removeTask(index)}
					sx={{
						transition: "color 0.3s ease",
						"&:hover": {
						color: "#BE185D",
						},
					}}
					/>
				</li>
				))
			}
			</div>
			</div>
		</div>
  );
}

export default ToDoList;