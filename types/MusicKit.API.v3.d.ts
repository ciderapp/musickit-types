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


    "v1/me/library/playlists": MusicKit.Playlists[];
    "v1/me/library/playlists/*": MusicKit.Playlists[];

    "v1/storefronts": MusicKit.Storefronts[];
  }


  // Query Response Template
  interface QueryResponse<T = unknown> {
    data: {
      data?: T;
      resources?: {
        [key: string]: Resource;
      };
      next?: string;
      meta?: {
        total?: number;
      }
    };
    request: unknown;
    response: unknown;
  }

  // Start of the v3 interface
  interface v3 {
    // music<T extends keyof apiRoutes>(route: T, parameters?: QueryParameters): Promise<QueryResponse<apiRoutes[T]>>;

    music<T extends keyof apiRoutes>(route: T | string, parameters?: QueryParameters): Promise<QueryResponse<apiRoutes[T] | any>>;
  }

}