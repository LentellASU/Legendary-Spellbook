import React, { useState } from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import { useSpellbook } from "../contexts/SpellbookContext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";

const SpellbookPage = () => {
	const { spellbook } = useSpellbook();
	const spellsPerPage = 6;
	const [page, setPage] = useState(0);

	const totalPages = Math.ceil(spellbook.length / spellsPerPage);
	const paginatedSpells = spellbook.slice(
		page * spellsPerPage,
		(page + 1) * spellsPerPage
	);

	const leftPageSpells = paginatedSpells.slice(0, 3);
	const rightPageSpells = paginatedSpells.slice(3, 6);

	const renderSpellCard = (spell) => (
		<motion.div
			key={spell.index}
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Card
				sx={{
					backgroundColor: "rgba(255, 248, 220, 0.8)",
					borderRadius: 2,
					boxShadow: 3,
					textAlign: "center",
					mb: 2,
					width: "80%",
					margin: "30px auto",
				}}
			>
				<CardContent>
					<Box
						component="img"
						src={`/images/spell-icons/default.svg`}
						alt={spell.name}
						sx={{ width: "64px", height: "64px", margin: "0 auto 8px" }}
						onError={(e) => {
							e.target.src = "/images/spell-icons/default.svg";
						}}
					/>
					<Typography
						variant="subtitle1"
						sx={{ fontWeight: "bold", fontFamily: "Papyrus, fantasy" }}
					>
						{spell.name}
					</Typography>
					<Typography sx={{ fontFamily: "Papyrus, fantasy" }} variant="body2">
						Level {spell.level}
					</Typography>
				</CardContent>
			</Card>
		</motion.div>
	);

	return (
		<Box
			sx={{
				backgroundImage: "url(/images/open-spellbook-bg.jpg)",
				backgroundSize: "cover",
				backgroundPosition: "center",
				minHeight: "65vh",
				padding: "40px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Typography
				variant="h3"
				sx={{ mb: 4, color: "#f5deb3", fontFamily: "Papyrus, fantasy" }}
			>
				My Spellbook
			</Typography>

			{/* Book Pages */}
			<motion.div
				key={page}
				initial={{ rotateY: 90, opacity: 0 }}
				animate={{ rotateY: 0, opacity: 1 }}
				exit={{ rotateY: -90, opacity: 0 }}
				transition={{ duration: 0.5 }}
				style={{ width: "100%" }}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						width: "100%",
						maxWidth: "1000px",
						padding: "0 20px",
					}}
				>
					<Box sx={{ width: "50%" }}>{leftPageSpells.map(renderSpellCard)}</Box>
					<Box sx={{ width: "50%" }}>
						{rightPageSpells.map(renderSpellCard)}
					</Box>
				</Box>
			</motion.div>

			{/* Page Navigation */}
			<Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
				<IconButton
					onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
					disabled={page === 0}
					sx={{ color: "#f5deb3" }}
				>
					<ArrowBackIosNewIcon />
				</IconButton>
				<Typography variant="body1" sx={{ mx: 2, color: "#f5deb3" }}>
					Page {page + 1} of {totalPages}
				</Typography>
				<IconButton
					onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
					disabled={page === totalPages - 1}
					sx={{ color: "#f5deb3" }}
				>
					<ArrowForwardIosIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

export default SpellbookPage;
