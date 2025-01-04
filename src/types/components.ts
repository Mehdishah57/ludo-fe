import { QuadrantType } from "../constants/constants";

export interface IQuadrantProps {
    type: QuadrantType;
    cells: number[];
}

export interface ITokenProps {
    quadrant: QuadrantType;
}
