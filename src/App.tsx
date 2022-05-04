import React, { useState } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import { NftElement } from './components/nftMintForm';
import { NFTElementData } from './types';
import Blur from './components/landing/blur';

function App() {
    const [nft, setNft] = useState<NFTElementData>({
        name: '',
        description: '',
        quantity: 1,
        image: ''
    });

    const handleChanges = (value: NFTElementData) => {
        setNft(value);
    };

    return (
        <Box position={'relative'}>
            <Container
                as={Flex}
                maxW={`7xl`}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}
            >
                <NftElement value={nft} onChange={handleChanges} />
            </Container>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                style={{ filter: 'blur(70px)' }}
            />
        </Box>
    );
}

export default App;
