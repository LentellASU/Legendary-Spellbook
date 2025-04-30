import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const CreateSpell = () => {
	const [spell, setSpell] = useState({
		name: "",
		level: "",
		school: "",
		casting_time: "",
		range: "",
		components: "",
		duration: "",
		description: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setSpell((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newSpell = {
			...spell,
			level: Number(spell.level),
			components: spell.components.split(",").map((c) => c.trim()),
			description: [spell.description],
		};

		const existingSpells = JSON.parse(localStorage.getItem("userSpells")) || [];
		existingSpells.push(newSpell);
		localStorage.setItem("userSpells", JSON.stringify(existingSpells));

		alert("Spell added successfully!");
		setSpell({
			name: "",
			level: "",
			school: "",
			casting_time: "",
			range: "",
			components: "",
			duration: "",
			description: "",
		});
	};

	const inputStyle = {
		input: { color: "#4cc9f0" },
		label: { color: "#4cc9f0" },
		fieldset: { borderColor: "#4cc9f0" },
		"& .MuiOutlinedInput-root:hover fieldset": {
			borderColor: "#4cc9f0",
		},
		"& .MuiOutlinedInput-root.Mui-focused fieldset": {
			borderColor: "#4cc9f0",
			boxShadow: "0 0 8px #4cc9f0",
		},
	};

	return (
		<Box
			sx={{
				maxWidth: "600px",
				mx: "auto",
				my: 8,
				p: 4,
				backgroundColor: "black",
				borderRadius: 2,
				boxShadow: "0 0 12px rgba(76, 201, 240, 0.3)",
			}}
		>
			<Typography
				variant="h4"
				gutterBottom
				sx={{ color: "#4cc9f0", fontFamily: "Papyrus, fantasy" }}
			>
				Create New Spell
			</Typography>
			<form onSubmit={handleSubmit}>
				{[
					{ name: "name", label: "Spell Name" },
					{ name: "level", label: "Level (number)", type: "number" },
					{ name: "school", label: "School" },
					{ name: "casting_time", label: "Casting Time" },
					{ name: "range", label: "Range" },
					{ name: "components", label: "Components (comma separated)" },
					{ name: "duration", label: "Duration" },
				].map(({ name, label, type }) => (
					<TextField
						key={name}
						fullWidth
						required
						margin="normal"
						name={name}
						label={label}
						type={type || "text"}
						value={spell[name]}
						onChange={handleChange}
						sx={inputStyle}
					/>
				))}

				<TextField
					fullWidth
					required
					margin="normal"
					name="description"
					label="Description"
					multiline
					rows={4}
					value={spell.description}
					onChange={handleChange}
					sx={inputStyle}
				/>

				<Button
					type="submit"
					variant="contained"
					sx={{
						mt: 3,
						backgroundColor: "#4cc9f0",
						color: "#000",
						fontWeight: "bold",
						fontFamily: "Papyrus, fantasy",
						boxShadow: "0 0 10px #4cc9f0",
						"&:hover": {
							backgroundColor: "#3bb8e0",
							boxShadow: "0 0 15px #4cc9f0",
						},
					}}
				>
					Add Spell
				</Button>
			</form>
		</Box>
	);
};

export default CreateSpell;
