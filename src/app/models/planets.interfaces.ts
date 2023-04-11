export interface IPlanetsData {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPlanets[];
}

export interface IPlanets {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}