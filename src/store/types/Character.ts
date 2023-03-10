import { Location } from "./Location"
import { ISOString } from "./ISOString"

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Pick<Location, 'name' | 'url'>;
    location: Pick<Location, 'name' | 'url'>;
    image: string;
    episode: Array<string>;
    url: string;
    created: ISOString;
}