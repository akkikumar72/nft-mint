import { NFTStorage } from 'nft.storage';
import { Config } from '../util/config';
import { NFTElementData } from '../types';
import { removeSpaceFromString } from '../util/common';

const token = Config.API_KEY;
const storage = new NFTStorage({ token });

export const uploadMetaData = async (nftData: NFTElementData) => {
    const metadata = await storage.store({
        name: nftData.name,
        quantity: nftData.quantity,
        description: nftData.description,
        image: new File(
            [nftData?.image],
            `${removeSpaceFromString(nftData.name)}.jpg`,
            { type: 'image/jpg' }
        )
    });
    return metadata.ipnft;
};
