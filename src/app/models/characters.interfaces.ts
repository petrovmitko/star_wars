export interface ICharactersData {
    count: number;
    next: string;
    previous: string;
    results: ICharacters[];
}
  
export interface ICharacters {
  birth_year: string;
  created: Date | string;
  edited: Date | string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  films: string[];
  starships: string[];
  species: string[];
  url: string;
  vehicles: string[];
}