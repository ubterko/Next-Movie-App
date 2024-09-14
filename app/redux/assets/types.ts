export interface RootObject {
    data:      Data;
    message:   string;
    status:    boolean;
    timestamp: number;
   }
   
   export interface Data {
    list:     List[];
    pageInfo: PageInfo;
   }
   
   export interface List {
    canRateTitle:           CanRateTitle;
    id:                     string;
    isAdult:                boolean;
    latestTrailer:          LatestTrailer;
    originalTitleText:      OriginalTitleText;
    plot:                   Plot;
    primaryImage:           PrimaryImage;
    ratingsSummary:         RatingsSummary;
    releaseDate:            ReleaseDate;
    releaseYear:            ReleaseYear;
    series:                 null;
    titleCertificate:       TitleCertificate | null;
    titleEpisode:           null;
    titleRuntime:           TitleRuntime | null;
    titleText:              OriginalTitleText;
    titleType:              TitleType;
    watchOptionsByCategory: WatchOptionsByCategory;
   }
   
   export interface CanRateTitle {
    isRatable: boolean;
   }
   
   export interface LatestTrailer {
    contentType:          ContentType;
    createdDate:          Date;
    description:          Description;
    id:                   string;
    name:                 Description;
    primaryImage:         PrimaryImage;
    primaryTitleFragment: PrimaryTitleFragment;
    runtime:              Runtime;
   }
   
   export interface ContentType {
    displayName: Description;
    id:          ContentTypeID;
   }
   
   export interface Description {
    value: string;
   }
   
   export enum ContentTypeID {
    Amzn1ImdbVideoContenttypeTrailer = "amzn1.imdb.video.contenttype.trailer",
   }
   
   export interface PrimaryImage {
    id?:         string;
    imageHeight: number;
    imageUrl:    string;
    imageWidth:  number;
   }
   
   export interface PrimaryTitleFragment {
    canRateTitle:      CanRateTitle;
    id:                string;
    isAdult:           boolean;
    originalTitleText: OriginalTitleText;
    primaryImage:      PrimaryImage;
    ratingsSummary:    RatingsSummary;
    releaseYear:       ReleaseYear;
    series:            PrimaryTitleFragmentSeries | null;
    titleEpisode:      TitleEpisode | null;
    titleText:         OriginalTitleText;
    titleType:         TitleType;
   }
   
   export interface OriginalTitleText {
    text: string;
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
   
   export interface PrimaryTitleFragmentSeries {
    series: SeriesSeries;
   }
   
   export interface SeriesSeries {
    canRateTitle:      CanRateTitle;
    id:                string;
    isAdult:           boolean;
    originalTitleText: OriginalTitleText;
    primaryImage:      PrimaryImage;
    ratingsSummary:    RatingsSummary;
    releaseYear:       ReleaseYear;
    titleEpisode:      null;
    titleText:         OriginalTitleText;
    titleType:         TitleType;
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
   
   export interface PlotText {
    plainText: string;
   }
   
   export enum TitleTypeID {
    Movie = "movie",
    TvEpisode = "tvEpisode",
    TvSeries = "tvSeries",
   }
   
   export enum TitleTypeText {
    Movie = "Movie",
    TVEpisode = "TV Episode",
    TVSeries = "TV Series",
   }
   
   export interface TitleEpisode {
    displayableEpisodeNumber: DisplayableEpisodeNumber;
   }
   
   export interface DisplayableEpisodeNumber {
    displayableSeason: DisplayableSeason;
    episodeNumber:     EpisodeNumber;
   }
   
   export interface DisplayableSeason {
    season: string;
    text:   string;
   }
   
   export interface EpisodeNumber {
    episodeNumber: string;
    text:          string;
   }
   
   export interface Runtime {
    unit:  Unit;
    value: number;
   }
   
   export enum Unit {
    Seconds = "SECONDS",
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
    In = "IN",
    Us = "US",
   }
   
   export enum CountryText {
    India = "India",
    UnitedStates = "United States",
   }
   
   export interface TitleCertificate {
    certificateCountry: Country;
    rating:             Rating;
    ratingReason:       null | string;
   }
   
   export enum Rating {
    PG = "PG",
    PG13 = "PG-13",
    R = "R",
    Tv14 = "TV-14",
    TvMa = "TV-MA",
   }
   
   export interface TitleRuntime {
    displayableProperty: TitleRuntimeDisplayableProperty;
    seconds:             number;
   }
   
   export interface TitleRuntimeDisplayableProperty {
    qualifiersInMarkdownList: null;
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
   
   export interface PageInfo {
    endCursor:   string;
    hasNextPage: boolean;
   }