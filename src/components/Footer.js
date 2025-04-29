import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "black",
				color: "white",
				textAlign: "center",
				py: 2,
				mt: 4,
				position: "fixed",
				width: "100%",
				bottom: 0,
				left: 0
			}}
		>
			<Typography sx={{ fontFamily: "Papyrus, fantasy" }} variant="body2">
				"Magic is not a tool. It is a way of life." - Eldrin the Wise
			</Typography>
			<Typography sx={{ fontFamily: "Papyrus, fantasy" }} variant="body2">
				© 2025 Legendary Spellbook
			</Typography>
		</Box>
	);
};

export default Footer;
