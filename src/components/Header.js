import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<AppBar sx={{ backgroundColor: "black" }} position="static" color="primary">
			<Toolbar>
				<Typography
					variant="h6"
					sx={{ flexGrow: 1, fontFamily: "Papyrus, fantasy" }}
				>
					Legendary Spellbook
				</Typography>
				<Box>
					<Button
						sx={{
							fontFamily: "Papyrus, fantasy",
							fontFamily: "Papyrus, fantasy",
							transition: "all 0.3s ease",
							"&:hover": {
								color: "#4cc9f0",
								textShadow:
									"0 0 10px #4cc9f0, 0 0 20px #4cc9f0, 0 0 30px #4cc9f0",
							},
						}}
						color="inherit"
						component={Link}
						to="/"
					>
						Home
					</Button>
					<Button
						sx={{
							fontFamily: "Papyrus, fantasy",
							fontFamily: "Papyrus, fantasy",
							transition: "all 0.3s ease",
							"&:hover": {
								color: "#4cc9f0",
								textShadow:
									"0 0 10px #4cc9f0, 0 0 20px #4cc9f0, 0 0 30px #4cc9f0",
							},
						}}
						color="inherit"
						component={Link}
						to="/spell-list"
					>
						Spells
					</Button>
					<Button
						sx={{
							fontFamily: "Papyrus, fantasy",
							fontFamily: "Papyrus, fantasy",
							transition: "all 0.3s ease",
							"&:hover": {
								color: "#4cc9f0",
								textShadow:
									"0 0 10px #4cc9f0, 0 0 20px #4cc9f0, 0 0 30px #4cc9f0",
							},
						}}
						color="inherit"
						component={Link}
						to="/create-spell"
					>
						Create
					</Button>
					<Button
						sx={{
							fontFamily: "Papyrus, fantasy",
							fontFamily: "Papyrus, fantasy",
							transition: "all 0.3s ease",
							"&:hover": {
								color: "#4cc9f0",
								textShadow:
									"0 0 10px #4cc9f0, 0 0 20px #4cc9f0, 0 0 30px #4cc9f0",
							},
						}}
						color="inherit"
						component={Link}
						to="/spellbook"
					>
						Spellbook
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
