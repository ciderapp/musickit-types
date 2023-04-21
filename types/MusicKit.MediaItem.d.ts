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
    href: any;

    /**
     * A constructor that creates a new media item from specified options.
     */
    constructor(options?: MediaItemOptions);

    /**
     * Prepares a media item for playback.
     */
    prepareToPlay(): Promise<void>;

    /**
     * A string of information about the album.
     */
    readonly albumInfo: string;
    /**
     * The id of the media item's album.
     */
    albumId?: string;
    /**
     * The title of the album.
     */
    readonly albumName: string;
    /**
     * The artist for a media item.
     */
    readonly artistName: string;
    /**
     * The artwork object for the media item.
     */
    readonly artwork: Artwork;
    /**
     * The artwork image for the media item.
     */
    readonly artworkURL: string;
    /**
     * The attributes object for the media item.
     */
    readonly attributes: any;
    /**
     * A string containing the content rating for the media item.
     */
    readonly contentRating: string;
    /**
     * The disc number where the media item appears.
     */
    readonly discNumber: number;
    /**
     * The identifier for the media item.
     */
    readonly id: string;
    /**
     * A string of common information about the media item.
     */
    readonly info: string;
    /**
     * A Boolean value that indicates whether the item has explicit lyrics or language.
     */
    readonly isExplicitItem: boolean;
    /**
     * A Boolean value that indicated whether the item is playable.
     */
    readonly isPlayable: boolean;
    /**
     * A Boolean value indicating whether the media item is prepared to play.
     */
    readonly isPreparedToPlay: boolean;
    /**
     * The ISRC (International Standard Recording Code) for a media item.
     */
    readonly isrc: string;
    /**
     * The playback duration of the media item.
     */
    readonly playbackDuration: number;
    readonly playlistArtworkURL: string;
    readonly playlistName: string;
    /**
     * The URL to an unencrypted preview of the media item.
     */
    readonly previewURL: string;
    /**
     * The release date of the media item.
     */
    readonly releaseDate?: Date | undefined;
    /**
     * The name of the media item.
     */
    readonly title: string;
    /**
     * The number of the media item in the album's track list.
     */
    readonly trackNumber: number;
    /**
     * The type of the media item.
     */
    readonly type: any;
    /**
     * Relationships of the media item
     */
    readonly relationships: any;
    /**
     * A Boolean value that indicates whether the item is a cloud upload.
     */
    readonly isCloudUpload: boolean;
    readonly _songId: string;
    readonly songId: string;
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
    readonly albumName: string;
    /**
     * The artist for a media item.
     */
    readonly artistName: string;
    /**
     * The artwork object for the media item.
     */
    readonly artwork: Artwork;
    /**
     * The composer for a media item.
     */
    readonly composerName: string;
    /**
     * The current playback progress of the media item.
     */
    readonly currentPlaybackProgress: number;
    /**
     * The current playback time of the media item.
     */
    readonly currentPlaybackTime: number;
    /**
     * The disc number where the media item appears.
     */
    readonly discNumber: number;
    /**
     * The duration of the media item.
     */
    readonly durationInMillis: number;
    /**
     * The end time of the media item.
     */
    readonly endTime: number;
    /**
     * The genre of the media item.
     */
    readonly genreNames: string[];
    /**
     * The ISRC (International Standard Recording Code) for a media item.
     */
    readonly isrc: string;
    /**
     * The kind of the media item.
     */
    readonly kind: string;
    /**
     * The name of the media item.
     */
    readonly name: string;
    /**
     * The playback parameters for the media item.
     */
    readonly playParams: { [key: string]: any };
    /**
     * The previews for the media item.
     */
    readonly previews: any[];
    /**
     * The release date of the media item.
     */
    readonly releaseDate: string;
    /**
     * The remaining playback time of the media item.
     */
    readonly remainingTime: number;
    /**
     * The song id of the media item.
     */
    readonly songId: string;
    /**
     * The start time of the media item.
     */
    readonly startTime: number;
    /**
     * The status of the media item.
     */
    readonly status: keyof typeof MusicKit.PlaybackStates;
    /**
     * Is Playing
     */
    readonly isPlaying: boolean;
    /**
     * The track number of the media item.
     */
    readonly trackNumber: number;
    /**
     * The URL of the media item.
     */
    readonly url: { [key: string]: any };
    /**
     * The editorial kind of the media item.
     */
    readonly editorialElementKind?: number
    /**
     * The editorial elements display style.
     */
    readonly displayStyle: string
  }
}
