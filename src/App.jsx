import { useState } from "react";
import Input from "./components/Input";

function App() {
	const [value, setValue] = useState("");

	return (
		<>
			<Input setValue={setValue} />
			<h1>{value}</h1>
		</>
	);
}

export default App;
