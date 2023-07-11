declare namespace MusicKit {
  /**
   * An object that represents a unique identifier for a music item.
   * https://developer.apple.com/documentation/musickit/musicitemid
   */
  type MusicItemID = string;

  /**
   * The rating of the content that potentially plays while playing a resource.
   * A nil value means no rating is available for this resource.
   * https://developer.apple.com/documentation/musickit/contentrating
   */
  type ContentRating = 'clean' | 'explicit' | null;

  /**
   * A to-one or to-many relationship from one resource object to others.
   * https://developer.apple.com/documentation/applemusicapi/relationship
   */
  interface Relationship<Data> {
    href?: string;
    next?: string;
    data: Data[];
    meta?: Record<string, any>;
  }

  /**
   * A to-one or to-many relationship view from one resource object to others representing interesting associations.
   * https://developer.apple.com/documentation/applemusicapi/view
   */
  interface View<Data> {
    href?: string;
    next?: string;
    attributes?: {
      title: string;
    };
    data: Data[];
    meta?: Record<string, any>;
  }

  /**
   * A resource—such as an album, song, or playlist.
   * https://developer.apple.com/documentation/applemusicapi/resource
   */
  interface Resource {
    id: string;
    type: string;
    href: string;
    attributes?: Record<string, any>;
    relationships?: Record<string, Relationship<Resource> | Array<Relationship<Resource>>> | any;
    meta?: Record<string, any>;
    views?: Record<string, View<Resource>>;
  }

  /**
   * Interface representing the potential attributes for a resource object.
   */
  interface ResourceAttributes {
    readonly albumName: string;
    readonly artistName: string;
    readonly artwork: Artwork;
    readonly attribution?: string;
    readonly composerName?: string;
    readonly contentRating?: ContentRating;
    readonly discNumber?: number;
    readonly durationInMillis: number;
    readonly editorialNotes?: EditorialNotes;
    readonly genreNames: string[];
    readonly hasLyrics: boolean;
    readonly isrc?: string;
    readonly movementCount?: number;
    readonly movementName?: string;
    readonly movementNumber?: number;
    readonly name: string;
    readonly playParams?: PlayParameters;
    readonly previews?: Preview[];
    readonly releaseDate?: string;
    readonly trackNumber?: number;
    readonly url?: string;
    readonly workName?: string;
    readonly artistUrl?: string;
    readonly currentPlaybackProgress?: number;
    readonly currentPlaybackTime?: number;
    readonly endTime?: number;
    readonly kind?: string;
    readonly remainingTime?: number;
    readonly songId?: string;
    readonly startTime?: number;
    readonly isPlaying?: boolean;
    readonly editorialElementKind?: string
    readonly displayStyle?: string
    readonly editorialArtwork?: { [key in editorialArtworkTypes]: EditorialArtwork };
    readonly lastModifiedDate?: string;
    readonly supportsSings?: boolean;
    readonly description?: DescriptionAttribute;
    readonly trackCount?: number;
    readonly curatorName?: string;
    readonly curatorSocialHandle?: string;
    readonly audioTraits?: string[];
    readonly isChart?: boolean;
    readonly playlistType?: 'editorial' | 'external' | 'personal-mix' | 'replay' | 'user-shared';
    readonly editorialVideo?: { [key in EditorialVideoTypes]: EditorialVideo };
    readonly versionHash?: string;
    readonly trackTypes?: Array<'music-videos' | 'songs'>;
  }

  /**
   * A resource object that represents a storefront, an Apple Music and iTunes Store territory that the content is available in.
   * https://developer.apple.com/documentation/applemusicapi/storefronts
   */
  interface Storefronts extends Resource {
    type: 'storefronts';
    attributes?: {
      defaultLanguageTag: string;
      explicitContentPolicy: 'allowed' | 'opt-in' | 'prohibited';
      name: string;
      supportedLanguageTags: string[];
    };
  }

  /**
   * A resource object that represents a music genre.
   * https://developer.apple.com/documentation/applemusicapi/genres
   */
  interface Genres extends Resource {
    type: 'genres';
    attributes?: {
      name: string;
      parentId?: string;
      parentName?: string;
    };
  }

  /**
   * A resource object that represents a song.
   * https://developer.apple.com/documentation/applemusicapi/songs-um8
   */
  interface Songs extends Resource {
    id: MusicItemID;
    type: 'songs';
    attributes: {
      albumName: string;
      artistName: string;
      artwork: Artwork;
      attribution?: string;
      composerName?: string;
      contentRating?: ContentRating;
      discNumber?: number;
      durationInMillis: number;
      editorialNotes?: EditorialNotes;
      genreNames: string[];
      hasLyrics: boolean;
      isrc?: string;
      movementCount?: number;
      movementName?: string;
      movementNumber?: number;
      name: string;
      playParams?: PlayParameters;
      previews: Preview[];
      releaseDate?: string;
      trackNumber?: number;
      url: string;
      workName?: string;
      artistUrl?: string;
    };
    relationships?: {
      albums?: Relationship<Albums>;
      artists?: Relationship<Artists>;
      genres?: Relationship<Genres>;
      station?: Relationship<Stations>;
      composers?: Relationship<Artists>;
      library?: Relationship<LibraryAlbums>;
      'music-videos'?: Relationship<MusicVideos>;
    };
  }


  /**
   * A resource object that represents a music video.
   * https://developer.apple.com/documentation/applemusicapi/musicvideos/
   */
  interface MusicVideos extends Resource {
    id: MusicItemID;
    type: 'music-videos';
    attributes?: {
      albumName?: string;
      artistName: string;
      artwork: Artwork;
      contentRating?: ContentRating;
      durationInMillis: number;
      editorialNotes?: EditorialNotes;
      genreNames: string[];
      has4K: boolean;
      hasHDR: boolean;
      isrc?: string;
      name: string;
      playParams?: PlayParameters;
      previews: Preview[];
      releaseDate?: string;
      trackNumber?: number;
      url: string;
      videoSubType?: 'preview';
      workId?: string;
      workName?: string;
      artistUrl?: string;
    };
    relationships: {
      albums: Relationship<Albums>;
      genres: Relationship<Genres>;
      library: Relationship<LibraryAlbums>;
      songs: Relationship<Songs>;
    };
    views: {
      'more-by-artist': View<MusicVideos>;
      'more-in-genre': View<MusicVideos>;
    };
  }

  /**
   * A resource object that represents an Apple curator.
   * https://developer.apple.com/documentation/applemusicapi/applecurators/
   */
  interface AppleCurators extends Resource {
    type: 'apple-curators';
    attributes?: {
      artwork: Artwork;
      editorialNotes?: EditorialNotes;
      kind: 'Curator' | 'Genre' | 'Show';
      name: string;
      shortName?: string;
      showHostName?: string;
      url: string;
    };
    relationships: {
      playlists: Relationship<Playlists>;
    };
  }

  /**
   * A resource object that represents a curator.
   * https://developer.apple.com/documentation/applemusicapi/curators-uja
   */
  interface Curators extends Resource {
    type: 'curator';
    attributes?: {
      artwork: Artwork;
      editorialNotes?: EditorialNotes;
      name: string;
      url: string;
    };
    relationships: {
      playlists: Relationship<Playlists>;
    };
  }

  /**
   * A resource object that represents a station.
   * https://developer.apple.com/documentation/applemusicapi/stations/
   */
  interface Stations extends Resource {
    type: 'stations';
    attributes?: {
      artwork: Artwork;
      durationInMillis: number;
      editorialNotes: EditorialNotes;
      episodeNumber: number;
      contentRating?: ContentRating;
      isLive: boolean;
      name: string;
      playParams: PlayParameters;
      stationProviderName: string;
      url: string;
    };
  }

  /**
   * A resource object that represents a record label.
   * https://developer.apple.com/documentation/applemusicapi/recordlabels/
   */
  interface RecordLabels extends Resource {
    id: MusicItemID;
    type: 'record-labels';
    attributes?: {
      artwork: Artwork;
      description: DescriptionAttribute;
      name: string;
      url: string;
    };
    views: {
      'latest-releases': View<Albums>;
      'top-releases': View<Albums>;
    };
  }

  /**
   * A resource object that represents an album.
   * https://developer.apple.com/documentation/applemusicapi/albums-uib
   */
  interface Albums extends Resource {
    type: 'albums';
    attributes?: {
      artistName: string;
      artistUrl?: string;
      artwork: Artwork;
      contentRating?: ContentRating;
      Possible?: ContentRating;
      copyright?: string;
      editorialNotes?: EditorialNotes;
      genreNames: string[];
      isCompilation: boolean;
      isComplete: boolean;
      isMasteredForItunes: boolean;
      isSingle: boolean;
      name: string;
      playParams?: PlayParameters;
      recordLabel?: string;
      releaseDate?: string;
      trackCount: number;
      dateAdded?: string;
      upc?: string;
      url: string;
    };
    relationships: {
      artists: Relationship<Artists>;
      genres: Relationship<Genres>;
      tracks: Relationship<MusicVideos | Songs>;
      library: Relationship<LibraryAlbums>;
      'record-labels': Relationship<RecordLabels>;
    };
    views: {
      'appears-on': View<Playlists>;
      'other-versions': View<Albums>;
      'related-albums': View<Albums>;
      'related-videos': View<MusicVideos>;
    };
  }

  /**
   * A resource object that represents a library album.
   * https://developer.apple.com/documentation/applemusicapi/libraryalbums/
   */
  interface LibraryAlbums extends Resource {
    type: 'library-albums';
    attributes?: {
      artistName: string;
      artwork: Artwork;
      contentRating?: ContentRating;
      dateAdded?: string;
      name: string;
      playParams?: PlayParameters;
      releaseDate?: string;
      trackCount: number;
      genreNames: string[];
    };
    relationships: {
      artists: Relationship<Artists>;
      catalog: Relationship<Playlists>;
      tracks: Relationship<MusicVideos | Songs>;
    };
  }

  /**
   * A resource object that represents a library song.
   * https://developer.apple.com/documentation/applemusicapi/librarysongs/
   */
  interface LibrarySongs extends Resource {
    id: MusicItemID;
    type: 'library-songs';
    attributes?: {
      albumName: string;
      artistName: string;
      artwork: Artwork;
      attribution?: string;
      composerName?: string;
      contentRating?: ContentRating;
      discNumber?: number;
      durationInMillis: number;
      editorialNotes?: EditorialNotes;
      genreNames: string[];
      hasLyrics: boolean;
      isrc?: string;
      movementCount?: number;
      movementName?: string;
      movementNumber?: number;
      name: string;
      playParams?: PlayParameters;
      previews: Preview[];
      releaseDate?: string;
      trackNumber?: number;
      url: string;
      workName?: string;
      artistUrl?: string;
    };
    relationships?: {
      albums?: Relationship<Albums>;
      artists?: Relationship<Artists>;
      genres?: Relationship<Genres>;
      station?: Relationship<Stations>;
      composers?: Relationship<Artists>;
      library?: Relationship<LibraryAlbums>;
      'music-videos'?: Relationship<MusicVideos>;
    };
  }

  /**
   * A resource object that represents a library playlist.
   * https://developer.apple.com/documentation/applemusicapi/libraryplaylists/
   */
  interface LibraryPlaylists extends Resource {
    id: MusicItemID;
    type: 'library-playlists' | 'library-playlist-folders';
    attributes?: {
      trackCount?: number;
      canDelete: boolean;
      canEdit: boolean;
      dateAdded: string;
      description: DescriptionAttribute;
      artwork?: Artwork;
      hasCatalog: boolean;
      isPublic: boolean;
      name: string;
      playParams: PlayParameters;
    };
    relationships?: {
      catalog: Relationship<Playlists>;
      tracks: Relationship<MusicVideos | Songs>;
    };
  }

  /**
   * A resource object that represents an artist of an album where an artist can be one or more persons.
   * https://developer.apple.com/documentation/applemusicapi/artists-uip
   */
  interface Artists extends Resource {
    type: 'artists';
    attributes?: {
      editorialNotes?: EditorialNotes;
      genreNames: string[];
      name: string;
      url: string;
      inFavorites?: boolean;
    };
    relationships: {
      albums: Relationship<Albums>;
      genres: Relationship<Genres>;
      'music-videos': Relationship<MusicVideos>;
      playlists: Relationship<Playlists>;
      station: Relationship<Stations>;
      catalog?: Relationship<Artists>;
    };
    views: {
      'appears-on-albums': View<Albums>;
      'compilation-albums': {
        href?: string;
        next?: string;
        attributes: {
          title: string;
        };
        data: Albums[];
      };
      'featured-albums': View<Albums>;
      'featured-playlists': View<Playlists>;
      'full-albums': View<Albums>;
      'latest-release': View<Albums>;
      'live-albums': View<Albums>;
      'similar-artists': View<Artists>;
      singles: View<Albums>;
      'top-music-videos': View<MusicVideos>;
      'top-songs': View<Songs>;
    };
  }

  /**
   * A resource object that represents a catalog playlist.
   * https://developer.apple.com/documentation/applemusicapi/playlists-ulf
   */
  interface Playlists extends Resource {
    id: MusicItemID;
    type: 'playlists';
    attributes?: {
      lastModifiedDate: string;
      supportsSings: boolean;
      description: DescriptionAttribute;
      artwork: Artwork;
      url: string;
      playParams: PlayParameters;
      trackCount?: number;
      curatorName: string;
      curatorSocialHandle?: string;
      audioTraits: string[];
      editorialArtwork: { [key in editorialArtworkTypes]: EditorialArtwork };
      name: string;
      isChart: boolean;
      playlistType: 'editorial' | 'external' | 'personal-mix' | 'replay' | 'user-shared';
      editorialVideo: { [key in EditorialVideoTypes]: EditorialVideo };
      editorialNotes?: EditorialNotes;
      versionHash?: string;
      trackTypes: Array<'music-videos' | 'songs'>;
    };
    relationships?: {
      curator?: Relationship<Activities | AppleCurators | Curators>;
      library?: Relationship<LibraryPlaylists>;
      tracks?: Relationship<MusicVideos | Songs>;
    };
    views: {
      'featured-artists': View<Artists>;
      'more-by-curator': View<Playlists>;
    };
  }

  /**
   * A resource object that represents an activity curator.
   * https://developer.apple.com/documentation/applemusicapi/activities-ui5
   */
  interface Activities extends Resource {
    type: 'activities';
    attributes?: {
      artwork: Artwork;
      editorialNotes?: EditorialNotes;
      name: string;
      url: string;
    };
    relationships: {
      playlists: Relationship<Playlists>;
    };
  }

  /**
   * A resource object that represents recommended resources for a user calculated using their selected preferences.
   * https://developer.apple.com/documentation/applemusicapi/personalrecommendation
   */
  interface PersonalRecommendation extends Resource {
    type: 'personal-recommendation';
    attributes?: {
      kind: 'music-recommendations' | 'recently-played' | 'unknown';
      nextUpdateDate: string;
      reason: {
        stringForDisplay: string;
      };
      resourceTypes: string[];
      title: {
        stringForDisplay: string;
      };
    };
    relationships?: {
      contents: Array<Relationship<Resource>>;
    };
  }


  interface SocialProfile extends Resource {
    type: 'social-profiles';
    attributes: {
      artwork: Artwork;
      handle: string;
      isPrimary: boolean;
      isVerified: boolean;
      name: string;
      url: string;
    };
  }

  interface PlayParameters {
    id: string;
    kind: string;
    isLibrary?: boolean;
    globalId?: string;
    versionHash?: string;
  }

  /**
   * An object that represents editorial notes.
   * https://developer.apple.com/documentation/musickit/editorialnotes
   */
  interface EditorialNotes {
    hashValue?: number;
    name?: string;
    short?: string;
    standard?: string;
    tagline?: string;
  }

  /**
   * An object that represents artwork for a music item.
   * https://developer.apple.com/documentation/musickit/artwork
   */
  interface Artwork {
    bgColor: string;
    height: number;
    width: number;
    textColor1: string;
    textColor2: string;
    textColor3: string;
    textColor4: string;
    url: string;
  }

  /**
   * The type of editorial artwork for a music item.
   */
  type editorialArtworkTypes = 'superHeroTall' | 'storeFlowcase' | 'subscriptionHero' | "subscriptionCover" | "staticDetailSquare" | "staticDetailTall" | "brandLogo" | "superHeroWide"

  /**
   * An object that represents artwork for a music item.
   * @Note - This is not documented in the Apple Music API docs.
   */
  interface EditorialArtwork extends Artwork {
    hasP3: boolean;
  }

  /**
   * The types of editorial videos for a music item.
   */
  type EditorialVideoTypes = 'motionSquareVideo1x1' | 'motionTallVideo3x4' | 'motionDetailTall' | 'motionDetailSquare'

  /**
   * An object that represents the editorial video for a music item.
   * @Note - This is not documented in the Apple Music API docs.
   */
  interface EditorialVideo {
    previewFrame: Artwork;
    video: string
  }

  /**
   * An object that represents a preview for resources.
   * https://developer.apple.com/documentation/applemusicapi/preview
   */
  interface Preview {
    artwork: Artwork;
    url: string;
    hlsUrl: string;
  }

  /**
   * An object that represents a description attribute.
   * https://developer.apple.com/documentation/applemusicapi/descriptionattribute/
   */
  interface DescriptionAttribute {
    short: string;
    standard: string;
    long?: string;
  }

  interface SearchResult<T> {
    data: T[];
    href?: string;
    next?: string;
  }

  interface SearchChartResult<T> {
    chart: string;
    data: T[];
    href?: string;
    name: string;
    next?: string;
  }

  type QueryParameters = Record<string, any>;

  type QueryOptions = {
    includeResponseMeta?: boolean;
    fetchOptions?: RequestInit;
  }

  /**
   * The parameters that can be passed to an API call
   * @note This contains wildcard types for whenever https://github.com/microsoft/TypeScript/issues/41160 is resolved.
   */
  interface v3Routes {
    "v1/me/library/songs": MusicKit.Songs[];
    "v1/me/library/songs/*": MusicKit.Songs[];

    "v1/me/library/albums": MusicKit.Albums[];
    "v1/me/library/artists": MusicKit.Artists[];

    "/v1/me/recent/played": MusicKit.Songs[] | MusicKit.Albums[];

    "v1/me/library/playlists": MusicKit.Playlists[];
    "v1/me/library/playlists/*": MusicKit.Playlists[];

    "v1/me/library/search": MusicKit.Songs[] | MusicKit.Albums[] | MusicKit.Artists[] | MusicKit.Playlists[];

    "v1/storefronts": MusicKit.Storefronts[];
  }

  type ResourceTypes = "songs" | "albums" | "artists" | "playlists" | "storefronts" | "library-playlists" | "library-songs" | "library-albums" | "library-artists" | "curator" | "social-profiles" | "apple-curators";

  type ResourceMap = {
    "songs": { [key: string]: MusicKit.Songs };
    "albums": { [key: string]: MusicKit.Albums };
    "artists": { [key: string]: MusicKit.Artists };
    "playlists": { [key: string]: MusicKit.Playlists };
    "storefronts": { [key: string]: MusicKit.Storefronts };
    "library-playlists": { [key: string]: MusicKit.LibraryPlaylists };
    "library-songs": { [key: string]: MusicKit.LibrarySongs };
    "library-albums": { [key: string]: MusicKit.LibraryAlbums };
    "library-artists": { [key: string]: MusicKit.Artists };
    "curator": { [key: string]: MusicKit.Curators };
    "social-profiles": { [key: string]: MusicKit.SocialProfile };
    "apple-curators": { [key: string]: MusicKit.AppleCurators };

  }

  // Query Response Template
  interface QueryResponse<T = unknown> {
    data: {
      data: T;
      resources: ResourceMap;
      results: QueryResult;
      next: string;
      meta: {
        total: number;
      }
    };
    request: unknown;
    response: unknown;
  }

  interface QueryResult {
    activities?: SearchResult<Activities>;
    albums?: SearchResult<Albums>;
    'apple-curators'?: SearchResult<AppleCurators>;
    artists?: SearchResult<Artists>;
    curators?: SearchResult<Curators>;
    'music-videos'?: SearchResult<MusicVideos>;
    playlists?: SearchResult<Playlists>;
    'record-labels'?: SearchResult<RecordLabels>;
    stations?: SearchResult<Stations>;
    songs?: SearchResult<Songs>;
    top?: {
      data: Array<
        | Activities
        | Albums
        | AppleCurators
        | Artists
        | Curators
        | MusicVideos
        | Playlists
        | RecordLabels
        | Songs
        | Stations
      >;
    };
  }

  // Start of the v3 interface
  interface v3 {
    // music<T extends keyof v3Routes>(route: T, parameters?: QueryParameters, options?: QueryOptions): Promise<QueryResponse<v3Routes[T]>>;

    music<T extends keyof v3Routes>(route: T | string, parameters?: QueryParameters, options?: QueryOptions): Promise<QueryResponse<v3Routes[T] | any>>;
  }

  /**
   * This class represents the Apple Music API.
   */
  interface API {
    /**
     * Search for resources, using the v3 REST API.
     */
    v3: v3;

    /**
     * An instance of the Cloud library.
     */
    library: Library;

    /**
     * The storefront used for making calls to the API.
     */
    storefrontId: string;

    /**
     * Apple Music Social Profile for the currently authenticated user.
     */
    personalSocialProfile(): Promise<SocialProfile>;

    /**
     * Fetch one or more activities using their identifiers.
     *
     * @param ids An array of activity identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    activities(ids: string[], parameters?: QueryParameters): Promise<Activities[]>;

    /**
     * Fetch an activity using its identifier.
     *
     * @param id An activity identifier.
     * @param parameters A query params object that is serialized and passed
     * directly to the Apple Music API.
     */
    activity(id: string, parameters?: QueryParameters): Promise<Activities>;

    /**
     * Add a catalog resource to a user's library.
     */
    addToLibrary(parameters?: any): Promise<void>;

    /**
     * Fetch an album using its identifier.
     *
     * @param id An album identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    album(id: string, parameters?: QueryParameters): Promise<Albums>;

    /**
     * Fetch one or more albums using their identifiers.
     *
     * @param ids An array of album identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    albums(ids: string[], parameters?: QueryParameters): Promise<Albums[]>;

    /**
     * Fetch an Apple curator using its identifier.
     *
     * @param id An Apple curator identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    appleCurator(id: string, parameters?: QueryParameters): Promise<Curators>;

    /**
     * Fetch one or more Apple curators using their identifiers.
     *
     * @param ids An array of Apple curator identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    appleCurators(ids: string[], parameters?: QueryParameters): Promise<AppleCurators[]>;

    /**
     * Fetch an artist using its identifier.
     *
     * @param id An artist identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    artist(id: string, parameters?: QueryParameters): Promise<Artists>;

    /**
     * Fetch one or more artists using their identifiers.
     *
     * @param ids An array of artist identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    artists(ids: string[], parameters?: QueryParameters): Promise<Artists[]>;

    /**
     * Fetch one or more charts.
     *
     * @param types An array of chart types.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     * https://developer.apple.com/documentation/applemusicapi/chartresponse
     */
    charts(
      types: string[],
      parameters?: QueryParameters,
    ): Promise<{
      results: {
        albums: Array<SearchChartResult<Albums>>;
        'music-videos': Array<SearchChartResult<MusicVideos>>;
        playlists: Array<SearchChartResult<Playlists>>;
        songs: Array<SearchChartResult<Songs>>;
      };
    }>;

    /**
     * Fetch a curator using its identifier.
     *
     * @param id A curator identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    curator(id: string, parameters?: QueryParameters): Promise<Curators>;

    /**
     * Fetch one or more curators using their identifiers.
     *
     * @param ids An array of curator identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    curators(ids: string[], parameters?: QueryParameters): Promise<Curators[]>;

    /**
     * Fetch a genre using its identifier.
     *
     * @param id An array of
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    genre(id: string, parameters?: QueryParameters): Promise<Genres>;

    /**
     * Fetch one or more genres using their identifiers.
     *
     * @param ids An array of genre identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    genres(ids: string[], parameters?: QueryParameters): Promise<Genres[]>;

    /**
     * Fetch the resources in heavy rotation for the user.
     *
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     * https://developer.apple.com/documentation/applemusicapi/paginatedresourcecollectionresponse
     */
    historyHeavyRotation(parameters?: QueryParameters): Promise<{
      next?: string;
      data: Resource[];
    }>;

    /**
     * Fetch a music video using its identifier.
     *
     * @param id An array of video identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    musicVideo(id: string, parameters?: QueryParameters): Promise<MusicVideos>;

    /**
     * Fetch one or more music videos using their identifiers.
     *
     * @param ids An array of music video identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    musicVideos(ids: string[], parameters?: QueryParameters): Promise<MusicVideos[]>;

    /**
     * Fetch a playlist using its identifier.
     *
     * @param id A playlist identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    playlist(id: string, parameters?: QueryParameters): Promise<Playlists>;

    /**
     * Fetch one or more playlists using their identifiers.
     *
     * @param ids An array of playlist identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    playlists(ids: string[], parameters?: QueryParameters): Promise<Playlists[]>;

    /**
     * Fetch the recently played resources for the user.
     *
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    recentPlayed(parameters?: QueryParameters): Promise<Resource[]>;

    /**
     * Fetch a recommendation using its identifier.
     *
     * @param id A recommendation identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    recommendation(id: string, parameters?: QueryParameters): Promise<PersonalRecommendation>;

    /**
     * Fetch one or more recommendations using their identifiers.
     *
     * @param ids An array of recommendation identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    recommendations(ids: string[], parameters?: QueryParameters): Promise<PersonalRecommendation[]>;

    /**
     * Search the catalog using a query.
     *
     * @param term The term to search.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     * https://developer.apple.com/documentation/applemusicapi/searchresponse
     */
    search(
      term: string,
      parameters?: QueryParameters,
    ): Promise<{
      results: {
        activities?: SearchResult<Activities>;
        albums?: SearchResult<Albums>;
        'apple-curators'?: SearchResult<AppleCurators>;
        artists?: SearchResult<Artists>;
        curators?: SearchResult<Curators>;
        'music-videos'?: SearchResult<MusicVideos>;
        playlists?: SearchResult<Playlists>;
        'record-labels'?: SearchResult<RecordLabels>;
        stations?: SearchResult<Stations>;
        songs?: SearchResult<Songs>;
        top?: {
          data: Array<
            | Activities
            | Albums
            | AppleCurators
            | Artists
            | Curators
            | MusicVideos
            | Playlists
            | RecordLabels
            | Songs
            | Stations
          >;
        };
      };
    }>;

    /**
     * Fetch the search term results for a hint.
     *
     * @param term The term to search.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     * https://developer.apple.com/documentation/applemusicapi/searchhintsresponse
     */
    searchHints(
      term: string,
      parameters?: QueryParameters,
    ): Promise<{
      results: {
        terms: string[];
      };
    }>;

    /**
     * Fetch a song using its identifier.
     *
     * @param id An array of identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    song(id: string, parameters?: QueryParameters): Promise<Songs>;

    /**
     * Fetch one or more songs using their identifiers.
     *
     * @param ids An array of song identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    songs(ids: string[], parameters?: QueryParameters): Promise<Songs[]>;

    /**
     * Fetch a station using its identifier.
     *
     * @param id A station identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    station(id: string, parameters?: QueryParameters): Promise<Stations>;

    /**
     * Fetch one or more stations using their identifiers.
     *
     * @param ids An array of station identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    stations(ids: string[], parameters?: QueryParameters): Promise<Stations[]>;

    /**
     * Fetch a storefront using its identifier.
     *
     * @param id A storefront identifier.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    storefront(id: string, parameters?: QueryParameters): Promise<Storefronts>;

    /**
     * Fetch one or more storefronts using their identifiers.
     *
     * @param ids An array of storefront identifiers.
     * @param parameters A query parameters object that is serialized and passed
     * directly to the Apple Music API.
     */
    storefronts(ids: string[], parameters?: QueryParameters): Promise<Storefronts[]>;


  }
}
