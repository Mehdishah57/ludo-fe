import { QuadrantType } from "../constants/constants"

/**
 * This object contains information about quadrant cells and their addresses
 */

export const cellIndexes = {
    [QuadrantType.Blue]: { column: [0, 6], row: [6, 12], home: [66, 72], lock: [73, 77], won: [77,81] },
    [QuadrantType.Yellow]: { column: [12, 18], row: [18, 24], home: [60, 66], lock: [81, 85], won: [85, 89] },
    [QuadrantType.Green]: { column: [24, 30], row: [30, 36], home: [54, 60], lock: [89, 93], won: [93, 97] },
    [QuadrantType.Red]: { column: [36, 42], row: [42, 48], home: [48, 54], lock: [97, 101], won: [101, 105] },
}

/**
 * This function contains information about cell address and board mappings 
 */
export const getCellAddresses = (quadrant: QuadrantType) => {
    return cellIndexes[quadrant]
}

export const getInitialPosition = (quadrant: QuadrantType) => {
    return cellIndexes[quadrant].column[0]+1
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

/**
 * This function returns indexes of safe cells for given quadrant
 */
export const getSafeQuadrantCells = (quadrant: QuadrantType) => {
    const { column, row } = cellIndexes[quadrant]
    const secondCell = column[0]+1;
    const secondLastCell = row[1]-2;
    return [secondCell, secondLastCell]
}

/**
 * This function returns the background color className for quadrant
 */
export const getBackgroundColorClassName = (quadrant: QuadrantType) => {
    const colors = {
        [QuadrantType.Yellow]: "bg-yellow-500",
        [QuadrantType.Green]: "bg-green-500",
        [QuadrantType.Blue]: "bg-blue-500",
        [QuadrantType.Red]: "bg-red-500"
    }
    return colors[quadrant]
}

/**
 * This function returns the bordercolor className for quadrant
 */
export const getBorderColorClassName = (quadrant: QuadrantType) => {
    const colors = {
        [QuadrantType.Yellow]: "border-yellow-500",
        [QuadrantType.Green]: "border-green-500",
        [QuadrantType.Blue]: "border-blue-500",
        [QuadrantType.Red]: "border-red-500"
    }
    return colors[quadrant]
}
