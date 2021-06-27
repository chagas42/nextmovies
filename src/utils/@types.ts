interface ResultsProps {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface ItemsProps {
  results: ResultsProps[];
}

export interface CategoryProps {
  slug: string;
  title: string; 
  items: ItemsProps;
}

interface GenresProps {
    name:string; 
    id:number;
}

export interface FeaturedProps { 
    backdrop_path:string; 
    first_air_date: Date; 
    genres: GenresProps[];  
    original_name:string; 
    vote_average:string; 
    number_of_seasons:number; 
    overview:string;
    id:number;
}