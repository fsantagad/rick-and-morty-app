import { ISOString } from "./ISOString";

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string | number;
    residents: Array<string>;
    url: string;
    created: ISOString;
}