import React, { useState } from "react";
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
} from "@mui/material";

const Filters = ({ onFilterChange, onSortChange }) => {
	const [selectedSchool, setSelectedSchool] = useState("");
	const [selectedCastingTime, setSelectedCastingTime] = useState("");
	const [selectedRange, setSelectedRange] = useState("");

	const handleSchoolChange = (event) => {
		setSelectedSchool(event.target.value);
		onFilterChange("school", event.target.value);
	};

	const handleCastingTimeChange = (event) => {
		setSelectedCastingTime(event.target.value);
		onFilterChange("casting_time", event.target.value);
	};

	const handleRangeChange = (event) => {
		setSelectedRange(event.target.value);
		onFilterChange("range", event.target.value);
	};

	return (
		<div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
			{/* School Filter */}
			<FormControl sx={{ minWidth: 120 }}>
				<InputLabel>School</InputLabel>
				<Select value={selectedSchool} onChange={handleSchoolChange}>
					<MenuItem value="">All</MenuItem>
					<MenuItem value="Abjuration">Abjuration</MenuItem>
					<MenuItem value="Conjuration">Conjuration</MenuItem>
					<MenuItem value="Divination">Divination</MenuItem>
					<MenuItem value="Enchantment">Enchantment</MenuItem>
					<MenuItem value="Evocation">Evocation</MenuItem>
					<MenuItem value="Illusion">Illusion</MenuItem>
					<MenuItem value="Necromancy">Necromancy</MenuItem>
					<MenuItem value="Transmutation">Transmutation</MenuItem>
				</Select>
			</FormControl>

			{/* Casting Time Filter */}
			<FormControl sx={{ minWidth: 120 }}>
				<InputLabel>Casting Time</InputLabel>
				<Select value={selectedCastingTime} onChange={handleCastingTimeChange}>
					<MenuItem value="">All</MenuItem>
					<MenuItem value="1 action">1 Action</MenuItem>
					<MenuItem value="1 bonus action">1 Bonus Action</MenuItem>
					<MenuItem value="1 reaction">1 Reaction</MenuItem>
					<MenuItem value="1 minute">1 Minute</MenuItem>
					<MenuItem value="10 minutes">10 Minutes</MenuItem>
					<MenuItem value="1 hour">1 Hour</MenuItem>
				</Select>
			</FormControl>

			{/* Range Filter */}
			<FormControl sx={{ minWidth: 120 }}>
				<InputLabel>Range</InputLabel>
				<Select value={selectedRange} onChange={handleRangeChange}>
					<MenuItem value="">All</MenuItem>
					<MenuItem value="Touch">Touch</MenuItem>
					<MenuItem value="Self">Self</MenuItem>
					<MenuItem value="30 feet">30 Feet</MenuItem>
					<MenuItem value="60 feet">60 Feet</MenuItem>
					<MenuItem value="120 feet">120 Feet</MenuItem>
					<MenuItem value="500 feet">500 Feet</MenuItem>
					<MenuItem value="Unlimited">Unlimited</MenuItem>
				</Select>
			</FormControl>

			{/* Sorting Buttons */}
			<Button variant="contained" onClick={() => onSortChange("asc")}>
				Sort Ascending
			</Button>
			<Button variant="contained" onClick={() => onSortChange("desc")}>
				Sort Descending
			</Button>
		</div>
	);
};

export default Filters;
