/// <reference path="MusicKit.API.d.ts" />

declare namespace MusicKit {

  /**
   * The parameters that can be passed to an API call
   * @note This contains wildcard types for whenever https://github.com/microsoft/TypeScript/issues/41160 is resolved.
   */
  interface apiRoutes {
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

  type ResourceTypes = "songs" | "albums" | "artists" | "playlists" | "storefronts" | "library-playlists" | "library-songs" | "library-albums" | "library-artists";

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
  }

  // Query Response Template
  interface QueryResponse<T = unknown> {
    data: {
      data: T;
      resources: ResourceMap;
      next: string;
      meta: {
        total: number;
      }
    };
    request: unknown;
    response: unknown;
  }

  // Start of the v3 interface
  interface v3 {
    // music<T extends keyof apiRoutes>(route: T, parameters?: QueryParameters, options?: QueryOptions): Promise<QueryResponse<apiRoutes[T]>>;

    music<T extends keyof apiRoutes>(route: T | string, parameters?: QueryParameters, options?: QueryOptions): Promise<QueryResponse<apiRoutes[T] | any>>;
  }

}
