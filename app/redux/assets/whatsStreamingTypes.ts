export interface whatsStreamingRootObj {
 data:      Datum[];
 message:   string;
 status:    boolean;
 timestamp: number;
}

export interface Datum {
 edges:        Edge[];
 providerName: string;
}

export interface Edge {
 title: Title;
}

export interface Title {
 canRateTitle:      CanRateTitle;
 id:                string;
 isAdult:           boolean;
 originalTitleText: TitleText;
 primaryImage:      PrimaryImage;
 ratingsSummary:    RatingsSummary;
 releaseYear:       ReleaseYear;
 titleEpisode:      null;
 titleText:         TitleText;
 titleType:         TitleType;
}

export interface CanRateTitle {
 isRatable: boolean;
}

export interface TitleText {
 text: string;
}

export interface PrimaryImage {
 id:          string;
 imageHeight: number;
 imageUrl:    string;
 imageWidth:  number;
}

export interface RatingsSummary {
 aggregateRating: number;
 topRanking:      TopRanking | null;
 voteCount:       number;
}

export interface TopRanking {
 rank: number;
}

export interface ReleaseYear {
 endYear: number | null;
 year:    number;
}

export interface TitleType {
 canHaveEpisodes:     boolean;
 categories:          Category[];
 displayableProperty: DisplayableProperty;
 id:                  TitleTypeID;
 isEpisode:           boolean;
 isSeries:            boolean;
 text:                TitleTypeText;
}

export interface Category {
 id:    ValueEnum;
 text:  CategoryText;
 value: ValueEnum;
}

export enum ValueEnum {
 Movie = "movie",
 Tv = "tv",
}

export enum CategoryText {
 Movie = "Movie",
 Tv = "TV",
}

export interface DisplayableProperty {
 value: Value;
}

export interface Value {
 plainText: PlainText;
}

export enum PlainText {
 Empty = "",
 TVMiniSeries = "TV Mini Series",
 TVSeries = "TV Series",
}

export enum TitleTypeID {
 Movie = "movie",
 TvMiniSeries = "tvMiniSeries",
 TvSeries = "tvSeries",
}

export enum TitleTypeText {
 Movie = "Movie",
 TVMiniSeries = "TV Mini Series",
 TVSeries = "TV Series",
}
