import React, {useState} from "react";

const Home = () => {
	const [input, setInput] = useState("")
	const [task, setTask] = useState([])


	return (
		<div className="container-fluid">
			<h1>My To-do List</h1>
			<table className="table table-hover">
				<thead>
				<tr>
				<th colSpan="2">
				<input
					type="text"
					placeholder="What badassery are we up to today?"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyUp={(e) => {
						if (e.key === "Enter") {
							setTask(task.concat([input]));
							setInput("");
						}}}/>
				</th>
				</tr>
				</thead>
				<tbody>
					{task.map((t, index) => (
						<tr>
							<td>{t}{""}</td>
							<td style={{textAlign: "right"}}>
								<i class="fa fa-times" aria-hidden="true"
								onClick={() => setTask(
									task.filter((t, indexNum) => {index != indexNum}
								))}
								></i>
							</td>
						</tr>
					))}
					<tr>
						<td scope="row" colSpan="2" className="tasksLeft">
							{task.length === 1? `${task.length} task left` : `${task.length} tasks left`}
						</td> 
					</tr>
				</tbody>
			</table>	
		</div>
	);
};

export default Home;
