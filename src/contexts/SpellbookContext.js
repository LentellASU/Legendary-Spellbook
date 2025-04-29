import React, { createContext, useContext, useState } from "react";

const SpellbookContext = createContext();

export const SpellbookProvider = ({ children }) => {
	const [spellbook, setSpellbook] = useState([]);

	const addToSpellbook = (spell) => {
		if (!spellbook.find((s) => s.name === spell.name)) {
			setSpellbook((prev) => [...prev, spell]);
		}
	};

	const removeFromSpellbook = (spellName) => {
		setSpellbook((prev) => prev.filter((s) => s.name !== spellName));
	};

	return (
		<SpellbookContext.Provider
			value={{ spellbook, addToSpellbook, removeFromSpellbook }}
		>
			{children}
		</SpellbookContext.Provider>
	);
};

export const useSpellbook = () => useContext(SpellbookContext);
