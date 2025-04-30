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
	const displayTotalPages = Math.max(totalPages, 1);
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
			whileHover={{ scale: 1.05 }}
		>
			<Card
				sx={{
					backgroundColor: "rgba(255, 248, 220, 0.8)",
					borderRadius: 2,
					boxShadow: "0 0 10px rgba(76, 201, 240, 0.3)",
					textAlign: "center",
					mb: 2,
					width: "80%",
					margin: "30px auto",
					transition: "transform 0.3s ease, box-shadow 0.3s ease",
					"&:hover": {
						boxShadow: "0 0 20px #4cc9f0",
						transform: "translateY(-4px)",
					},
				}}
			>
				<CardContent>
					<Box
						component="img"
						src={`${process.env.PUBLIC_URL}/images/spell-icons/default.svg`}
						alt={spell.name}
						sx={{ width: "64px", height: "64px", margin: "0 auto 8px" }}
						onError={(e) => {
							e.target.src = `${process.env.PUBLIC_URL}/images/spell-icons/default.svg`;
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
			className="book-frame lightning-container"
			sx={{
				backgroundImage: `url(${process.env.PUBLIC_URL}/images/open-spellbook-bg.jpg)`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				minHeight: "70vh",
				padding: "40px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				mt: 10,
				borderRadius: 2,
				position: "relative",
			}}
		>
			{spellbook.length > 0 && (
				<>
					<Box className="magic-orb" />
					<Box className="magic-orb2" />
					<div className="lightning-flash" />
					<div className="lightning-ring ring-one" />
					<div className="lightning-ring ring-two" />
					<div className="lightning-ring ring-three" />
					<div className="lightning-ring ring-four" />
				</>
			)}

			<Typography
				variant="h3"
				sx={{ mb: 4, color: "#4cc9f0", fontFamily: "Papyrus, fantasy" }}
			>
				My Spellbook
			</Typography>

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

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					mt: 3,
					position: "absolute",
					bottom: "40px",
					background: "rgba(0, 0, 0, 0.7)",
					px: 3,
					py: 1,
					borderRadius: 2,
					boxShadow: "0 0 15px #4cc9f0",
				}}
			>
				<IconButton
					onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
					disabled={page === 0 || spellbook.length === 0}
					sx={{ color: "#4cc9f0" }}
				>
					<ArrowBackIosNewIcon />
				</IconButton>
				<Typography
					variant="body1"
					sx={{ mx: 2, color: "#4cc9f0", fontFamily: "Papyrus, fantasy" }}
				>
					Page {spellbook.length === 0 ? 0 : page + 1} of{" "}
					{spellbook.length === 0 ? 0 : displayTotalPages}
				</Typography>
				<IconButton
					onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
					disabled={page >= totalPages - 1 || spellbook.length === 0}
					sx={{ color: "#4cc9f0" }}
				>
					<ArrowForwardIosIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

export default SpellbookPage;
