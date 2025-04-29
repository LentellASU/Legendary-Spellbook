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

		// Retrieve existing spells from localStorage
		const existingSpells = JSON.parse(localStorage.getItem("userSpells")) || [];

		// Add new spell to existing spells
		existingSpells.push(newSpell);

		// Save updated spells array back to localStorage
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

	return (
		<Box sx={{ maxWidth: "600px", mx: "auto", my: 4 }}>
			<Typography variant="h4" gutterBottom>
				Create New Spell
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					fullWidth
					required
					margin="normal"
					name="name"
					label="Spell Name"
					value={spell.name}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					required
					margin="normal"
					name="level"
					label="Level (number)"
					type="number"
					value={spell.level}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					required
					margin="normal"
					name="school"
					label="School"
					value={spell.school}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					required
					margin="normal"
					name="casting_time"
					label="Casting Time"
					value={spell.casting_time}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					required
					margin="normal"
					name="range"
					label="Range"
					value={spell.range}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					required
					margin="normal"
					name="components"
					label="Components (comma separated)"
					value={spell.components}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					required
					margin="normal"
					name="duration"
					label="Duration"
					value={spell.duration}
					onChange={handleChange}
				/>
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
				/>

				<Button type="submit" variant="contained" sx={{ mt: 2 }}>
					Add Spell
				</Button>
			</form>
		</Box>
	);
};

export default CreateSpell;
