import { createContext } from "react";

const SoccerContext = createContext();

export function SoccerProvider({ children }) {
	return (
		<SoccerContext.Provider value={{ text: 'Pesho'}}>
			{children}
		</SoccerContext.Provider>
	)
}

export default SoccerContext;