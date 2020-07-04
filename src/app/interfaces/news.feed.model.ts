
export interface NewsFeedModel {
    hits: Hits[];
    nbHits: number;
    page: number;
    nbPages: number;
    hitsPerPage: number;
    exhaustiveNbHits: boolean;
    query: string;
    params: string;
    processingTimeMS: number;
}

export interface Title {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface Url {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface Author {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface HighlightResult {
    title: Title;
    url: Url;
    author: Author;
}

export interface Hits {
    created_at: Date;
    title: string;
    url: string;
    author: string;
    points: number;
    story_text?: any;
    comment_text?: any;
    num_comments: number;
    story_id?: any;
    story_title?: any;
    story_url?: any;
    parent_id?: any;
    created_at_i: number;
    _tags: string[];
    objectID: string;
    _highlightResult: HighlightResult;
}



