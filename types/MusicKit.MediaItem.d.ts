declare namespace MusicKit {
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
    }

    /**
     * A string of information about the album.
     * @getter
     */
    albumInfo: string;

    /**
     * The id of the media item's album.
     * @getter
     */
    albumId?: string;

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
    contentRating: string;

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
     * The URL to an unencrypted preview of the media item.
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
    relationships: unknown;

    /**
     * A Boolean value that indicates whether the item is a cloud upload.
     */
    isCloudUpload: boolean;

    /**
     * Also the ID of the media item.
     * @deprecated
     */
    songId: string;
  }

  /**
   * This class is for attributes
   */
  class MediaItemAttributes {
    /**
     * A constructor that creates a new media item from specified options.
     */
    constructor(options?: MediaItemOptions);

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
    composerName: string;
    /**
     * The current playback progress of the media item.
     */
    currentPlaybackProgress: number;
    /**
     * The current playback time of the media item.
     */
    currentPlaybackTime: number;
    /**
     * The disc number where the media item appears.
     */
    discNumber: number;
    /**
     * The duration of the media item.
     */
    durationInMillis: number;
    /**
     * The end time of the media item.
     */
    endTime: number;
    /**
     * The genre of the media item.
     */
    genreNames: string[];
    /**
     * The ISRC (International Standard Recording Code) for a media item.
     */
    isrc: string;
    /**
     * The kind of the media item.
     */
    kind: string;
    /**
     * The name of the media item.
     */
    name: string;
    /**
     * The playback parameters for the media item.
     */
    playParams: { [key: string]: any };
    /**
     * The previews for the media item.
     */
    previews: any[];
    /**
     * The release date of the media item.
     */
    releaseDate: string;
    /**
     * The remaining playback time of the media item.
     */
    remainingTime: number;
    /**
     * The song id of the media item.
     */
    songId: string;
    /**
     * The cloud Id for the uploaded media item.
     */
    cloudId?: string;
    /**
     * The start time of the media item.
     */
    startTime: number;
    /**
     * The status of the media item.
     */
    status: keyof typeof MusicKit.PlaybackStates;
    /**
     * Is Playing
     */
    isPlaying: boolean;
    /**
     * The track number of the media item.
     */
    trackNumber: number;
    /**
     * The URL of the media item.
     */
    url: { [key: string]: any };
    /**
     * The editorial kind of the media item.
     */
    editorialElementKind?: string
    /**
     * The editorial elements display style.
     */
    displayStyle?: string
  }
}
