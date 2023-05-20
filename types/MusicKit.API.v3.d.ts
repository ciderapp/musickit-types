/// <reference path="MusicKit.API.d.ts" />

declare namespace MusicKit {

    // Query Response Template
    interface QueryResponse {
        data: {
            data?: unknown;
            resources?: {
                [key: string]: Resource;
            };
        };
        request: unknown;
        response: unknown;
    }


    // Start of the v3 interface
    interface v3 {
        music(path: string, parameters?: QueryParameters): Promise<QueryResponse>;
    }
    
}