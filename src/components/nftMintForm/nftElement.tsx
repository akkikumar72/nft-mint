import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import FileUpload from './fileUpload';

import { UploadForm } from './uploadForm';
import { NFTElementData } from '../../types';
import { uploadMetaData } from '../../api/uploadApi';
import SuccessAlert from '../alert/successAlert';
import { btnText, descriptionNFT, TandC } from '../../util/constants';

interface NFTElementProps {
    value: NFTElementData;
    onChange: (value: NFTElementData) => void;
}

export const NftElement: React.FC<NFTElementProps> = ({ value, onChange }) => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
    const [_, setError] = useState(false);

    const init = () => {
        setData('');
        setLoading(true);
        setLoading(false);
    };

    const handleSubmit = async () => {
        init();
        setLoading(true);
        try {
            const result = await uploadMetaData(value);
            setData(result);
        } catch (e) {
            setError(true);
        }
        onChange({
            ...value,
            image: '',
            description: '',
            quantity: 0,
            name: ''
        });
        setLoading(false);
    };

    return (
        <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            boxShadow={'2xl'}
            maxW={`7xl`}>
            {data && <SuccessAlert result={data} />}
            <Box as={'form'} display={{ md: 'flex' }}>
                <Flex flexShrink={0}>
                    <FileUpload
                        value={value.image}
                        onChange={(image) => onChange({ ...value, image })}
                    />
                </Flex>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <Stack spacing={4} mb={2}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Mint your{' '}
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text">
                                NFT!
                            </Text>
                        </Heading>
                        <Text
                            color={'gray.500'}
                            fontSize={{ base: 'sm', sm: 'md' }}>
                            {descriptionNFT}
                        </Text>
                    </Stack>
                    <UploadForm value={value} onChange={onChange} />
                    <Text fontSize={{ base: 'sm', sm: 'xs' }} mt={'10'}>
                        {TandC}
                    </Text>
                    <Button
                        mt={5}
                        w={'full'}
                        bgGradient="linear(to-r, red.400,pink.400)"
                        color={'white'}
                        _hover={{
                            bgGradient: 'linear(to-r, red.400,pink.400)',
                            boxShadow: 'xl'
                        }}
                        variant="solid"
                        isLoading={loading}
                        loadingText="Submitting"
                        onClick={handleSubmit}>
                        {btnText}
                    </Button>
                </Box>
            </Box>
        </Stack>
    );
};
