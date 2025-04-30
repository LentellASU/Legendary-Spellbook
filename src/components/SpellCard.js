import React, { useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	IconButton,
	Dialog,
	DialogTitle,
	DialogContent,
	Tooltip,
	Box,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { motion } from "framer-motion";
import { useSpellbook } from "../contexts/SpellbookContext";

const SpellCard = ({ spell }) => {
	const [open, setOpen] = useState(false);
	const { spellbook, addToSpellbook, removeFromSpellbook } = useSpellbook();

	const isBookmarked = spellbook.some((s) => s.name === spell.name);

	const handleBookmarkToggle = () => {
		if (isBookmarked) {
			removeFromSpellbook(spell.name);
		} else {
			addToSpellbook(spell);
		}
	};

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Card
				sx={{
					background: "#f8f1e5",
					border: "2px solid #8b5e3c",
					borderRadius: "16px",
					boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
					transition: "all 0.3s ease-in-out",
					transform: "translateY(0)",
					"&:hover": {
						transform: "translateY(-8px)",
						boxShadow: "0 8px 20px rgba(76, 201, 240, 0.7)", // neon blue shadow
						borderColor: "#4cc9f0",
					},
					marginBottom: 2,
					width: "260px",
					height: "180px",
				}}
			>
				<CardContent>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography variant="h6" sx={{ fontFamily: "Papyrus, fantasy" }}>
							{spell.name}
						</Typography>
						<Box>
							<Tooltip
								title={
									isBookmarked ? "Remove from Spellbook" : "Add to Spellbook"
								}
							>
								<IconButton onClick={handleBookmarkToggle}>
									{isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
								</IconButton>
							</Tooltip>
							<Tooltip title="View Details">
								<IconButton onClick={handleOpen}>
									<InfoIcon />
								</IconButton>
							</Tooltip>
						</Box>
					</Box>
					<Typography
						sx={{ fontFamily: "Papyrus, fantasy" }}
						variant="body2"
						color="text.secondary"
					>
						Level {spell.level} {spell.school}
					</Typography>
				</CardContent>
			</Card>

			<Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
				<DialogTitle sx={{ fontFamily: "Papyrus, fantasy" }}>
					{spell.name}
				</DialogTitle>
				<DialogContent dividers>
					<Typography
						sx={{ fontFamily: "Papyrus, fantasy" }}
						variant="subtitle1"
						gutterBottom
					>
						<strong>Level:</strong> {spell.level ?? "N/A"}
					</Typography>
					<Typography
						sx={{ fontFamily: "Papyrus, fantasy" }}
						variant="subtitle1"
						gutterBottom
					>
						<strong>School:</strong> {spell.school ?? "N/A"}
					</Typography>
					<Typography
						sx={{ fontFamily: "Papyrus, fantasy" }}
						variant="subtitle1"
						gutterBottom
					>
						<strong>Casting Time:</strong> {spell.casting_time ?? "N/A"}
					</Typography>
					<Typography
						sx={{ fontFamily: "Papyrus, fantasy" }}
						variant="subtitle1"
						gutterBottom
					>
						<strong>Range:</strong> {spell.range ?? "Self"}
					</Typography>
					<Typography sx={{ fontFamily: "Papyrus, fantasy" }} variant="body2">
						{spell.description.join(" ") ?? "No description available."}
					</Typography>
				</DialogContent>
			</Dialog>
		</motion.div>
	);
};

export default SpellCard;
