export const convertToKB = (bytes: number) => {
    return Math.round(bytes / 1024);
};
export const getNFTaddress = (cid: string) => {
    return `https://ipfs.io/ipfs/${cid}/metadata.json`;
};
export const removeSpaceFromString = (str: string) => {
    return str.replace(/\s/g, '');
};
