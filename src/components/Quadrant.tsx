import React, { useState } from "react"

import { IQuadrantProps } from "../types/components"
import classNames from "classnames"
import { QuadrantType } from "../constants/constants"
import { getCellAddresses } from "../utils/utils"

const Quadrant: React.FC<IQuadrantProps> = ({
    type,
    cells,
}) => {
    const [address] = useState(getCellAddresses(type))

    return (
        <div className={classNames(
            "w-[50%] h-[50%] relative",
            { "rotate-[90deg]": QuadrantType.Yellow === type },
            { "rotate-[180deg]": QuadrantType.Green === type },
            { "rotate-[0deg]": QuadrantType.Blue === type },
            { "rotate-[270deg]": QuadrantType.Red === type },
        )}>
            {/* Safe House */}
            <div className={classNames(
                "w-[75%] h-[75%] absolute left-0 bottom-0",
                { "bg-yellow-500": QuadrantType.Yellow === type },
                { "bg-green-500": QuadrantType.Green === type },
                { "bg-blue-500": QuadrantType.Blue === type },
                { "bg-red-500": QuadrantType.Red === type },
            )}>
            </div>

            <div className="flex flex-col-reverse left-[75%] h-[75%] bottom-0 absolute">
                {cells.slice(address.column[0], address.column[1]).map((num) => <div key={num} id={num.toString()} className="flex flex-1 w-[35px] border-b-0 border-[1px] border-black bg-white"></div>)}
            </div>

            <div className="flex flex-row-reverse bottom-[75%] h-[35px] w-[75%] left-0 absolute">
                {cells.slice(address.row[0], address.row[1]).map((num) => <div key={num} id={num.toString()} className="flex flex-1 w-[35px] border-l-0 border-[1px] border-black bg-white"></div>)}
            </div>

            <div className="flex flex-col right-[-17.5px] h-[75%] bottom-0 absolute">
                {cells.slice(address.home[0], address.home[1]).map((num, idx) => <div 
                    key={num} 
                    id={num.toString()} 
                    className={classNames(
                        "flex flex-1 w-[35px] border-b-0 border-[1px] border-black",
                        { "bg-yellow-500": QuadrantType.Yellow === type && idx !== 5 },
                        { "bg-green-500": QuadrantType.Green === type && idx !== 5 },
                        { "bg-blue-500": QuadrantType.Blue === type && idx !== 5 },
                        { "bg-red-500": QuadrantType.Red === type && idx !== 5 },
                        { "bg-white ": idx === 5 },
                    )}
                >
                </div>)}
            </div>
        </div>
    )
}

export default Quadrant
