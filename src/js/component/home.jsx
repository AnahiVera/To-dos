import React, {useState} from "react";
import { TodoForm } from "./TodoForm";


//create your first component
const Home = () => {
	
	
	return (
		<div className="text-center">
			<div>
				<TodoForm />
			</div>
		</div>
	);
};

export default Home;
