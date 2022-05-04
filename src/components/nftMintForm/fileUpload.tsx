import React, { ReactNode, useCallback, useMemo } from 'react';
import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { convertToKB } from '../../util/common';

export interface FileUploadProps {
    value: string | ArrayBuffer | BlobPart;
    onChange: (value: string | ArrayBuffer | BlobPart) => void;
}
const FileUpload: React.FC<FileUploadProps> = ({ value, onChange }) => {
    const onDrop = useCallback((acceptedFiles: any) => {
        if (acceptedFiles.length > 0) {
            const fr = new FileReader();
            fr.onload = () => {
                onChange(acceptedFiles[0]);
            };
            fr.readAsArrayBuffer(acceptedFiles[0]);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
        useDropzone({
            accept: {
                'image/*': ['.jpeg', '.png']
            },
            onDrop
        });

    const imageSrc = useMemo(() => {
        if (value) {
            return URL.createObjectURL(new Blob([value]));
        }
        return null;
    }, [value]);

    const fileList = (files: FileWithPath[]): ReactNode =>
        files.map((file) => (
            <Box ml="3" key={file.path}>
                <Text fontWeight="bold"> {file.path}</Text>
                <Text fontSize="sm">{convertToKB(file.size)} KB</Text>
            </Box>
        ));

    return (
        <Flex align="center" flexDirection="column" padding={2}>
            <Box
                {...getRootProps()}
                border="1px dashed"
                bgGradient="linear(to-r, gray.100,gray.200)"
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                h={'sm'}
                w={'sm'}>
                <input {...getInputProps()} />
                <Center h={'sm'}>
                    {!isDragActive && (
                        <>
                            <Text fontSize={'sm'} width={'100%'} align="center">
                                Drop the files here ...
                            </Text>
                        </>
                    )}
                </Center>
            </Box>
            {imageSrc && (
                <Flex
                    mt={2}
                    border="1px dashed"
                    w={'100%'}
                    borderRadius="lg"
                    justifyContent={'start'}
                    alignItems={'center'}>
                    <Image
                        src={imageSrc}
                        alt="uploadNFT"
                        boxSize="100px"
                        objectFit="cover"
                    />
                    {fileList(acceptedFiles)}
                </Flex>
            )}
        </Flex>
    );
};

export default FileUpload;
