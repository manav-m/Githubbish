export interface RepoDetails {
    id: number;
    name: string;

    // adding this to avoid having to list out every single key. Typically should be listed out
    [key: string]: any;
}

export interface File {
    path: string;
    mode: string;
    type: string;
    sha: string;
    size: number;
    url: string;
}

export interface FileDetail {
    sha: string;
    node_id: string;
    size: number;
    url: string;
    content: string;
    encoding: string;
}