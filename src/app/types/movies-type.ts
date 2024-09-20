// movies-type.ts
export interface IMovies extends IBasicMovie {
  genre_ids: number[];
}

// movie-type.ts
export interface IMovie extends IBasicMovie {
  belongs_to_collection: string | null;
  budget: number;
  genres: IGenre[];
  homepage: string;
  imdb_id: string;
  origin_country: string[];
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
}

// movie 기본 정보
interface IBasicMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// movie 장르 정보
interface IGenre {
  id: number;
  name: string;
}

// movie 제작사 정보
interface IProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

// movie 제작국가 정보
interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

// movie 언어 정보
interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
