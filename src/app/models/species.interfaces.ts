export interface ISpeciesData {
    count: number;
    next: string | null;
    previous: string | null;
    results: ISpecies[];
}

export interface ISpecies {
    name: string;
    classification: number;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    films: string[];
    people: string[];
    created: string;
    edited: string;
    url: string;
}