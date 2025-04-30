import React, { useState, useEffect } from "react";
import {
	Box,
	Grid,
	Typography,
	TextField,
	MenuItem,
	Select,
	InputLabel,
	FormControl,
	Button,
} from "@mui/material";
import spellsData from "../data/spells.json";
import SpellCard from "../components/SpellCard";
import CreateSpell from "./CreateSpell";


const SpellList = () => {
	const [spells, setSpells] = useState([]);
	const [search, setSearch] = useState("");
	const [selectedLevel, setSelectedLevel] = useState("");
	const [selectedSchool, setSelectedSchool] = useState("");
	const [selectedCastingTime, setSelectedCastingTime] = useState("");
	const [selectedRange, setSelectedRange] = useState("");
	const [sortOrder, setSortOrder] = useState("asc");

	useEffect(() => {
		// Load existing JSON spells
		let allSpells = [...spellsData];

		// Fetch user-created spells from localStorage
		const userSpells = JSON.parse(localStorage.getItem("userSpells")) || [];

		// Combine spells
		allSpells = [...allSpells, ...userSpells];

		setSpells(allSpells);
	}, []);

	const handleSearchChange = (e) => setSearch(e.target.value);
	const handleLevelChange = (e) => setSelectedLevel(e.target.value);
	const handleSchoolChange = (e) => setSelectedSchool(e.target.value);
	const handleCastingTimeChange = (e) => setSelectedCastingTime(e.target.value);
	const handleRangeChange = (e) => setSelectedRange(e.target.value);
	const handleSortChange = () =>
		setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));

	const filteredSpells = spells
		.filter((spell) => spell.name.toLowerCase().includes(search.toLowerCase()))
		.filter((spell) =>
			selectedLevel ? spell.level === parseInt(selectedLevel) : true
		)
		.filter((spell) =>
			selectedSchool ? spell.school.name === selectedSchool : true
		)
		.filter((spell) =>
			selectedCastingTime ? spell.casting_time === selectedCastingTime : true
		)
		.filter((spell) => (selectedRange ? spell.range === selectedRange : true))
		.sort((a, b) => {
			if (sortOrder === "asc") return a.name.localeCompare(b.name);
			else return b.name.localeCompare(a.name);
		});
	

	return (
		<Box
			sx={{
				backgroundColor: "black",
				color: "#4cc9f0",
				p: 3,
				minHeight: "100vh",
			}}
		>
			<Typography
				sx={{ fontFamily: "Papyrus, fantasy", mb: 3 }}
				variant="h4"
				gutterBottom
			>
				Spell List
			</Typography>

			<Grid container spacing={2} mb={3}>
				<Grid item xs={12} md={4}>
					<TextField
						fullWidth
						label="Search Spells"
						variant="outlined"
						value={search}
						onChange={handleSearchChange}
						sx={{
							input: { color: "#4cc9f0" },
							label: { color: "#4cc9f0" },
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: "#4cc9f0",
								},
								"&:hover fieldset": {
									borderColor: "#4cc9f0",
								},
								"&.Mui-focused fieldset": {
									borderColor: "#4cc9f0",
								},
							},
						}}
					/>
				</Grid>

				<Grid item xs={6} md={2}>
					<FormControl fullWidth>
						<InputLabel sx={{ color: "#4cc9f0" }}>Level</InputLabel>
						<Select
							value={selectedLevel}
							label="Level"
							onChange={handleLevelChange}
							sx={{
								color: "#4cc9f0",
								".MuiOutlinedInput-notchedOutline": { borderColor: "#4cc9f0" },
							}}
						>
							<MenuItem
								value=""
								sx={{
									color: "#4cc9f0",
								}}
							>
								All
							</MenuItem>
							{[...Array(10).keys()].map((level) => (
								<MenuItem
									sx={{
										color: "#4cc9f0",
									}}
									key={level}
									value={level}
								>
									{level}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={6} md={2}>
					<FormControl fullWidth>
						<InputLabel sx={{ color: "#4cc9f0" }}>School</InputLabel>
						<Select
							value={selectedSchool}
							label="School"
							onChange={handleSchoolChange}
							sx={{
								color: "#4cc9f0",
								".MuiOutlinedInput-notchedOutline": { borderColor: "#4cc9f0" },
							}}
						>
							<MenuItem
								value=""
								sx={{
									color: "#4cc9f0",
								}}
							>
								All
							</MenuItem>
							{[...new Set(spells.map((spell) => spell.school.name))].map(
								(school) => (
									<MenuItem
										sx={{
											color: "#4cc9f0",
										}}
										key={school}
										value={school}
									>
										{school}
									</MenuItem>
								)
							)}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={6} md={2}>
					<FormControl fullWidth>
						<InputLabel sx={{ color: "#4cc9f0" }}>Casting Time</InputLabel>
						<Select
							value={selectedCastingTime}
							label="Casting Time"
							onChange={handleCastingTimeChange}
							sx={{
								color: "#4cc9f0",
								".MuiOutlinedInput-notchedOutline": { borderColor: "#4cc9f0" },
							}}
						>
							<MenuItem
								value=""
								sx={{
									color: "#4cc9f0",
								}}
							>
								All
							</MenuItem>
							{[...new Set(spells.map((spell) => spell.casting_time))].map(
								(time) => (
									<MenuItem
										sx={{
											color: "#4cc9f0",
										}}
										key={time}
										value={time}
									>
										{time}
									</MenuItem>
								)
							)}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={6} md={2}>
					<FormControl fullWidth>
						<InputLabel sx={{ color: "#4cc9f0" }}>Range</InputLabel>
						<Select
							value={selectedRange}
							label="Range"
							onChange={handleRangeChange}
							sx={{
								color: "#4cc9f0",
								".MuiOutlinedInput-notchedOutline": { borderColor: "#4cc9f0" },
							}}
						>
							<MenuItem
								value=""
								sx={{
									color: "#4cc9f0",
								}}
							>
								All
							</MenuItem>
							{[...new Set(spells.map((spell) => spell.range))].map((range) => (
								<MenuItem
									sx={{
										color: "#4cc9f0",
									}}
									key={range}
									value={range}
								>
									{range}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={12} md={1}>
					<Button fullWidth variant="outlined" onClick={handleSortChange}>
						{sortOrder === "asc" ? "A-Z" : "Z-A"}
					</Button>
				</Grid>
			</Grid>

			<Grid container spacing={3}>
				{filteredSpells.map((spell) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={spell.index}>
						<SpellCard spell={spell} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default SpellList;
