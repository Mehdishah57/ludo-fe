import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import classNames from "classnames"

import { QuadrantType } from "../constants/constants"

import { cellIndexes, getInitialPosition, getNextQuadrant } from "../utils/utils"

import { ITokenProps } from "../types/components"

const Token: React.FC<ITokenProps> = ({
    quadrant
}) => {
    const [currentPosition, setCurrentPosition] = useState(getInitialPosition(quadrant))
    const [currentQuadrant, setCurrentQuadrant] = useState(quadrant)
    const tokenRef = useRef<HTMLDivElement>(null)
    
    useLayoutEffect(() => {
        if(!tokenRef.current) return;
        const parent = document.getElementById(currentPosition.toString())
        if(parent) {
            parent.appendChild(tokenRef.current)
        }
    }, [])

    useEffect(() => {}, [])

    const moveToken = () => {
        if(!tokenRef.current) return;
        const parent = document.getElementById(currentPosition.toString())
        if(!parent) return;
        parent.appendChild(tokenRef.current)
        const currentPaths = cellIndexes[currentQuadrant]
        const [homeStart, homeEnd] = currentPaths.home
        const isInHomePaths = currentPosition >= homeStart && currentPosition <= homeEnd
        if(isInHomePaths) {
            if(currentPosition === currentPaths.home[1]-1) {
                setCurrentPosition(currentPaths.column[0])
            }
        }
        else {
            if(currentPosition >= currentPaths.column[0] && currentPosition < currentPaths.row[1]) {
                setCurrentPosition(prev => prev + 1)
            }
            else if(currentPosition === currentPaths.row[1]-1) {
                const nextQuadrant = getNextQuadrant(currentQuadrant)
                const nextPaths = cellIndexes[nextQuadrant]
                setCurrentQuadrant(nextQuadrant)
                setCurrentPosition(nextPaths.home[1]-1)
            }                
        }
    }

    return (
        <div 
            onClick={moveToken} 
            ref={tokenRef} 
            className={classNames(
                "w-[35px] h-[35px] absolute z-10 shadow-lg rounded-full cursor-pointer",
                { "bg-yellow-500": QuadrantType.Yellow === quadrant },
                { "bg-green-500": QuadrantType.Green === quadrant },
                { "bg-blue-500": QuadrantType.Blue === quadrant },
                { "bg-red-500": QuadrantType.Red === quadrant },
            )}
        >
        </div>
    )
}

export default Token
