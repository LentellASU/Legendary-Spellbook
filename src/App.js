import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SpellList from "./pages/SpellList";
import Home from "./pages/Home";
import SpellbookPage from "./pages/SpellBookPage";
import { SpellbookProvider } from "./contexts/SpellbookContext";
import CreateSpell from "./pages/CreateSpell";

function App() {
	return (
		<>
			<SpellbookProvider>
				<Header />
				<Container maxWidth="lg" sx={{ minHeight: "80vh", mt: 2 }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/spell-list" element={<SpellList />} />
						<Route path="/spellbook" element={<SpellbookPage />} />
						<Route path="/create-spell" element={<CreateSpell />} />
					</Routes>
				</Container>
				<Footer />
			</SpellbookProvider>
		</>
	);
}

export default App;
