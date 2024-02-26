import { React, useState } from "react";

export default function BetterSignUp() {
	// const [firstName, setFirstName] = useState('')
	// const [lastName, setLastName] = useState('')

	const [formData, setFormData] = useState({ firstName: "", lastName: "" });

	// const updateFirstName=(evt)=>{
	//     setFirstName(evt.target.value)
	// }

	// const updateLastName=(evt)=>{
	//     setLastName(evt.target.value)
	// }

	const handleChange = (evt) => {
		const changeField = evt.target.name;
		const newValue = evt.target.value;

		// console.log(changeField, newValue)

		setFormData((currData) => {
			currData[changeField] = newValue;
			return { ...currData };
		});
        //check documentation on handling multiple fields
	};

	const handleSubmit = () => {
		console.log(formData);
	};
	return (
		<div>
			<label htmlFor="username">Enter Firstname</label>
			<input
				type="text"
				placeholder="username"
				value={formData.firstName}
				onChange={handleChange}
				name="firstName"
				id="firstName"
			/>
			<label htmlFor="username">Enter Lastname</label>
			<input
				type="text"
				placeholder="username"
				value={formData.lastName}
				onChange={handleChange}
				name="lastName"
				id="lastName"
			/>

			<label htmlFor="password">Enter password</label>
			<input
				type="password"
				placeholder="password"
				value={formData.password}
				onChange={handleChange}
				name="password"
				id="password"
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}
