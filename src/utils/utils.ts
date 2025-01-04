import { QuadrantType } from "../constants/constants"

/**
 * This object contains information about quadrant cells and their addresses
 */

export const cellIndexes = {
    [QuadrantType.Blue]: { column: [0, 6], row: [6, 12], home: [66, 72] },
    [QuadrantType.Yellow]: { column: [12, 18], row: [18, 24], home: [60, 66] },
    [QuadrantType.Green]: { column: [24, 30], row: [30, 36], home: [54, 60] },
    [QuadrantType.Red]: { column: [36, 42], row: [42, 48], home: [48, 54] },
}

/**
 * This function contains information about cell address and board mappings 
 */
export const getCellAddresses = (quadrant: QuadrantType) => {
    return cellIndexes[quadrant]
}

export const getInitialPosition = (quadrant: QuadrantType) => {
    const initialPositionMap = {
        [QuadrantType.Blue]: 1,
        [QuadrantType.Yellow]: 13,
        [QuadrantType.Green]: 25,
        [QuadrantType.Red]: 37,
    }
    return initialPositionMap[quadrant]
}

/**
 * This function returns the next possible quadrant for a token
 */
export const getNextQuadrant = (currentQuadrant: QuadrantType) => {
    const orderedQuadrantList = [QuadrantType.Blue, QuadrantType.Yellow, QuadrantType.Green, QuadrantType.Red]
    let index = orderedQuadrantList.findIndex(quadrant => quadrant === currentQuadrant)
    index++;
    if(index > 3) index = index % orderedQuadrantList.length
    return orderedQuadrantList[index]
}
