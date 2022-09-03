import { momentLibrary } from "../../utils/momentLibrary";

const MatchStatus = ({ date }) => {
	return (
		<>
			{momentLibrary(date)}
		</>
	)
}

export default MatchStatus;