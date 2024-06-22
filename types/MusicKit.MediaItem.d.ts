declare namespace MusicKit {

  /**
   * The attributes for the media item.
   */
  interface MediaItemAttributes {
    /**
     * The current playback time of the media item.
     */
    currentPlaybackTime?: number;

    /**
     * The remaining playback time of the media item.
     */
    remainingTime?: number;

    /**
     * The title of the album.
     */
    albumName: string;

    /**
     * The artist for a media item.
     */
    artistName: string;

    /**
     * The artwork object for the media item.
     */
    artwork: Artwork;

    /**
     * The composer for a media item.
     */
    composerName?: string;

    /**
     * The disc number where the media item appears.
     */
    discNumber?: number;

    /**
     * The duration of the media item.
     */
    durationInMillis: number;

    /**
     * The genre of the media item.
     */
    genreNames: string[];

    /**
     * The ISRC (International Standard Recording Code) for a media item.
     */
    isrc?: string;

    /**
     * The kind of the media item.
     */
    kind?: string;

    /**
     * The name of the media item.
     */
    name: string;

    /**
     * The playback parameters for the media item.
     */
    playParams: PlayParameters;

    /**
     * The previews for the media item.
     */
    previews?: Preview[];

    /**
     * The release date of the media item.
     */
    releaseDate: string;

    /**
     * The cloud Id for the uploaded media item.
     */
    cloudId?: string;

    /**
     * The status of the media item.
     */
    status: keyof typeof MusicKit.PlaybackStates;

    /**
     * The track number of the media item.
     */
    trackNumber?: number;
    /**
     * The URL of the media item.
     */
    url?: string;

    /**
     * The editorial kind of the media item.
     */
    editorialElementKind?: string;

    /**
     * The description and notes for editorial usage.
     */
    editorialNotes?: EditorialNotes;

    /**
     * The editorial artwork for the media item.
     */
    editorialArtwork?: EditorialArtwork;

    /**
     * The editorial elements display style.
     */
    displayStyle?: string;

    /**
     * The Url to the artist's page.
     */
    artistUrl?: string;

    /**
     * Undocumented Items, not in the Apple Music API docs, and don't really know what they are.
     * @undocumented
     */
    attribution?: string;
    contentRating?: ContentRating;
    hasLyrics: boolean;
    movementCount?: number;
    movementName?: string;
    movementNumber?: number;
    workName?: string;
    lastModifiedDate?: string;
    supportsSings?: boolean;
    description?: DescriptionAttribute;
    trackCount?: number;
    curatorName?: string;
    curatorSocialHandle?: string;
    audioTraits?: string[];
    isChart?: boolean;
    playlistType?:
      | "editorial"
      | "external"
      | "personal-mix"
      | "replay"
      | "user-shared";
    editorialVideo?: EditorialVideo;
    versionHash?: string;
    trackTypes?: Array<"music-videos" | "songs">;
  }

  /**
   * The options to use when defining a media item.
   */
  interface MediaItemOptions {
    /**
     * The attributes for the media item.
     */
    attributes?: MediaItemAttributes;
    /**
     * The identifier for the media item.
     */
    id?: string | undefined;
    /**
     * The type for the media item.
     */
    type?: any;
  }

  /**
   * This property describes a media item.
   */
  type Descriptor = MediaItem | string;

  /**
   * This property describes the playback parameters for a media item or resource.
   */
  interface PlayParameters {
    id: string;
    kind: string;
    isLibrary?: boolean;
    globalId?: string;
    catalogId?: string;
    reportingId?: string;
    reporting?: boolean;
    versionHash?: string;
    displayType?: number;
  }

  /**
   * This class represents a single media item.
   */
  class MediaItem {
    /**
     * A constructor that creates a new media item from specified options.
     */
    constructor(options?: MediaItemOptions);

    /**
     * Prepares a media item for playback.
     */
    prepareToPlay(): Promise<void>;

    /**
     * Asset Url for the MediaItem
     */
    assetURL: string;

    /**
     * The attributes object for the media item.
     */
    attributes: MediaItemAttributes;
    channels?: number;
    cloudId?: string;
    contentType?: string;
    dispatchNamespace?: string;

    /**
     * The flavor of the media item. Can be used to determine the bitrate of the media item.
     */
    flavor: string;
    hlsMetadata: unknown;

    /**
     * The URL to the media item.
     */
    href: string;

    /**
     * The identifier for the media item.
     */
    id: string;

    /**
     * Asset URLs for the media item.
     */
    keyURLs?: {
      "hls-key-cert-url": string;
      "hls-key-server-url": string;
      "widevine-cert-url"?: string;
    };

    /**
     * A string of information about the album.
     * @getter
     */
    albumInfo: string;

    /**
     * The title of the album.
     * @getter
     */
    albumName: string;

    /**
     * The artist for a media item.
     * @getter
     */
    artistName: string;

    /**
     * The artwork object for the media item.
     * @getter
     */
    artwork: Artwork;

    /**
     * The artwork image for the media item.
     * @getter
     */
    artworkURL: string;

    /**
     * A string containing the content rating for the media item.
     * @getter
     */
    contentRating: "explicit" | undefined;

    /**
     * The disc number where the media item appears.
     * @getter
     */
    discNumber: number;

    /**
     * A string of common information about the media item.
     */
    info: string;

    /**
     * A Boolean value that indicates whether the item has explicit lyrics or language.
     */
    isExplicitItem: boolean;

    /**
     * A Boolean value that indicated whether the item is playable.
     */
    isPlayable: boolean;

    /**
     * A Boolean value indicating whether the media item is prepared to play.
     */
    isPreparedToPlay: boolean;

    /**
     * The ISRC (International Standard Recording Code) for a media item.
     */
    isrc: string;

    /**
     * The playback duration of the media item.
     */
    playbackDuration: number;
    playlistArtworkURL: string;
    playlistName: string;

    /**
     * Th e URL to an unencrypted preview of the media item.
     */
    previewURL: string;

    /**
     * The release date of the media item.
     */
    releaseDate?: Date | undefined;

    /**
     * The name of the media item.
     */
    title: string;

    /**
     * The number of the media item in the album's track list.
     */
    trackNumber: number;

    /**
     * The type of the media item.
     */
    type: string;

    /**
     * Relationships of the media item
     */
    relationships: Relationships;

    /**
     * A Boolean value that indicates whether the item is a cloud upload.
     */
    isCloudUpload: boolean;

    /**
     * Also the ID of the media item.
     */
    songId: string;

    // Unknown / Self-Defined Methods
    ageGatePolicy: unknown;
    assets: MediaItemAsset[];
    canPlay: boolean;
    container: Container;
    context: Context;
    defaultPlayable: unknown;
    hasContainerArtwork: string;
    hasOffersHlsUrl: boolean;
    hasPlaylistContainer: Resource;
    isAOD: boolean;
    isAlgoStation: boolean;
    isAssetScrubbingDisabled: boolean;
    isCloudItem: boolean;
    isEqual: (e: MediaItem) => boolean;
    isLinearStream: boolean;
    isLiveAudioStation: boolean;
    isLiveRadioStation: boolean;
    isLiveVideoStation: boolean;
    isLoading: boolean;
    isPlayableMediaType: boolean;
    isPlaying: boolean;
    isRadioEpisode: boolean;
    isRadioStation: boolean;
    isReady: boolean;
    isRestricted: boolean;
    isSong: boolean;
    isUTS: boolean;
    isUnavailable: boolean;
    needsPlayParams: boolean;
    normalizedType: string;
    notSupported: () => void;
    offers: unknown;
    offersHlsUrl: unknown;
    playEvent: unknown;
    playParams: PlayParameters;
    playRawAssetURL: boolean;
    playbackData: (e: MediaItem) => void;
    rating: number | undefined;
    rawAssetUrl: string | undefined;
    resetState: () => void;
    restrict: () => void;
    state: number;
    supportsLinearScrubbing: boolean;
  }
}
