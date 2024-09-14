export interface weeKTopRootObj {
    data:      Datum[];
    message:   string;
    status:    boolean;
    timestamp: number;
   }
   
   export interface Datum {
    canRateTitle:           CanRateTitle;
    chartMeterRanking:      ChartMeterRanking;
    id:                     string;
    isAdult:                boolean;
    originalTitleText:      OriginalTitleText;
    plot:                   Plot;
    primaryImage:           PrimaryImage;
    ratingsSummary:         RatingsSummary;
    releaseDate:            ReleaseDate;
    releaseYear:            ReleaseYear;
    series:                 null;
    titleCertificate:       TitleCertificate;
    titleEpisode:           null;
    titleRuntime:           TitleRuntime;
    titleText:              OriginalTitleText;
    titleType:              TitleType;
    watchOptionsByCategory: WatchOptionsByCategory;
   }
   
   export interface CanRateTitle {
    isRatable: boolean;
   }
   
   export interface ChartMeterRanking {
    currentRank: number;
    rankChange:  RankChange;
   }
   
   export interface RankChange {
    changeDirection: ChangeDirection;
    difference:      number;
   }
   
   export enum ChangeDirection {
    Down = "DOWN",
    Flat = "FLAT",
    Up = "UP",
   }
   
   export interface OriginalTitleText {
    text: string;
   }
   
   export interface Plot {
    author:         null;
    correctionLink: Link;
    id:             string;
    plotText:       PlotText;
    reportingLink:  Link;
   }
   
   export interface Link {
    url: string;
   }
   
   export interface PlotText {
    plainText: string;
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
   
   export interface ReleaseDate {
    country:           Country;
    day:               number;
    month:             number;
    releaseAttributes: OriginalTitleText[];
    restriction:       null;
    year:              number;
   }
   
   export interface Country {
    id:   CountryID;
    text: CountryText;
   }
   
   export enum CountryID {
    Us = "US",
   }
   
   export enum CountryText {
    UnitedStates = "United States",
   }
   
   export interface ReleaseYear {
    endYear: number | null;
    year:    number;
   }
   
   export interface TitleCertificate {
    certificateCountry: Country;
    rating:             string;
    ratingReason:       null | string;
   }
   
   export interface TitleRuntime {
    displayableProperty: TitleRuntimeDisplayableProperty;
    seconds:             number;
   }
   
   export interface TitleRuntimeDisplayableProperty {
    qualifiersInMarkdownList: null;
   }
   
   export interface TitleType {
    canHaveEpisodes:     boolean;
    categories:          Category[];
    displayableProperty: TitleTypeDisplayableProperty;
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
   
   export interface TitleTypeDisplayableProperty {
    value: PlotText;
   }
   
   export enum TitleTypeID {
    Movie = "movie",
    TvSeries = "tvSeries",
   }
   
   export enum TitleTypeText {
    Movie = "Movie",
    TVSeries = "TV Series",
   }
   
   export interface WatchOptionsByCategory {
    categorizedWatchOptionsList: CategorizedWatchOptionsList[];
   }
   
   export interface CategorizedWatchOptionsList {
    watchOptions: WatchOption[];
   }
   
   export interface WatchOption {
    description:      Description;
    link:             string;
    provider:         Provider;
    shortDescription: Description | null;
    title:            Description;
   }
   
   export interface Description {
    value: string;
   }
   
   export interface Provider {
    categoryType:   CategoryType;
    description:    Description | null;
    id:             string;
    logos:          Logos;
    name:           Description;
    refTagFragment: string;
   }
   
   export enum CategoryType {
    RentOrBuy = "RENT_OR_BUY",
    Subscription = "SUBSCRIPTION",
   }
   
   export interface Logos {
    icon:  Icon;
    slate: Icon;
   }
   
   export interface Icon {
    height: number;
    url:    string;
    width:  number;
   }
   