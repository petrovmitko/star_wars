export interface IAppStore {
  loading: boolean;
  characters: ICharactersData;
}

export interface ICharactersData {
  count: number;
  next: string;
  previous: string;
  results: ICharacters[];
}

export interface ICharacters {
  birth_year: string;
  created: Date;
  edited: Date;
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