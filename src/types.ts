export interface NFTElementData {
    name: string;
    description: string;
    quantity: number;
    image: string | ArrayBuffer | BlobPart;
}

export interface NFTResponse {
    cid: string;
    created?: string;
    size?: number;
    status?: string;
}
