function Input({ setValue }) {
	return (
		<div>
			<input onChange={(e) => setValue(e.target.value)} type="text" placeholder="masukan kata kata" />
		</div>
	);
}

export default Input;
