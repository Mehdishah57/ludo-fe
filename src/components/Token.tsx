import React, { useLayoutEffect, useRef, useState } from "react"
import classNames from "classnames"

import { cellIndexes, getBackgroundColorClassName, getInitialPosition, getNextQuadrant } from "../utils/utils"

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

    const moveToken = () => {
        if(!tokenRef.current) return;
        const parent = document.getElementById(currentPosition.toString())
        if(!parent) return;
        parent.appendChild(tokenRef.current)
        const currentPaths = cellIndexes[currentQuadrant]
        const [homeStart, homeEnd] = currentPaths.home
        const isInHomePaths = currentPosition >= homeStart && currentPosition <= homeEnd
        if(isInHomePaths) {
            if(currentPosition === currentPaths.home[0]) {
                setCurrentPosition(currentPaths.won[1]-1)
            }
            if(quadrant === currentQuadrant && currentPosition !== currentPaths.home[0]) {
                if(currentPosition === currentPaths.home[1]-1) {
                    setCurrentPosition(currentPaths.home[1]-2)
                }
                else {
                    setCurrentPosition(prev => prev - 1)
                }
            }
            else if(currentPosition === currentPaths.home[1]-1) {
                setCurrentPosition(currentPaths.column[0])
            }
        }
        else {
            if(currentPosition >= currentPaths.column[0] && currentPosition < currentPaths.row[1]-1) {
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
                "w-[35px] h-[35px] absolute z-10 shadow-xl rounded-full cursor-pointer border-2 border-white",
                getBackgroundColorClassName(quadrant),
            )}
        >
        </div>
    )
}

export default Token
