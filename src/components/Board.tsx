import { QuadrantType } from "../constants/constants"
import Quadrant from "./Quadrant"
import Token from "./Token"

const Board = () => {
    const cells = [...Array(18*4).keys()]

    return (
        <div className="w-full h-[450px] md:h-[650px] bg-white relative flex flex-wrap overflow-hidden">
            {Object.values(QuadrantType).map(type => <Quadrant key={type} type={type} cells={cells} />)}
            <Token quadrant={QuadrantType.Blue} />
        </div>
    )
}

export default Board
