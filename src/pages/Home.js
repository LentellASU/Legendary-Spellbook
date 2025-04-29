import React from "react";
import { Typography, Box } from "@mui/material";

const Home = () => {
	return (
		<>
			<Box textAlign="center">
				<Typography
					sx={{ color: "maroon", fontFamily: "Papyrus, fantasy" }}
					variant="h2"
				>
					Welcome to the Legendary Spellbook
				</Typography>
				<Typography
					variant="h4"
					sx={{ mt: 2, color: "red", fontFamily: "Papyrus, fantasy" }}
				>
					Build, select, and cast powerful spells.
				</Typography>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "center",  mt: 18 }}>
				<img
					src="https://www.belloflostsouls.net/wp-content/uploads/2024/10/magic-wizard-spell-casting-sorcerer-dnd-powerful-1.jpg"
					alt="A powerful wizard casting a spell"
				></img>
			</Box>
		</>
	);
};

export default Home;
