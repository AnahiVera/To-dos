import React, {useState} from "react";
import { TodoForm } from "./TodoForm";
import { GetApi } from "./GetApi";

//create your first component
const Home = () => {
	
	
	return (
		<div className="text-center">
			<div>
				<GetApi/>
			</div>
		</div>
	);
};

export default Home;
