import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Link,
    CloseButton,
    Box,
    Text,
    useDisclosure,
    Spacer
} from '@chakra-ui/react';
import React from 'react';
import { getNFTaddress } from '../../util/common';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface SuccessAlertProps {
    result: string;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ result }) => {
    const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
    return isOpen ? (
        <Alert
            status="success"
            minWidth="max-content"
            alignItems="center"
            gap="2">
            <AlertIcon />
            <Box>
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription maxWidth="sm">
                  <Text>
                    Your NFT has been pinned to IPFS as{' '}
                    <Link href={getNFTaddress(result)} isExternal>
                      {result} <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Text>
                </AlertDescription>
            </Box>
            <Spacer />
            <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
                onClick={onClose}
            />
        </Alert>
    ) : null;
};

export default SuccessAlert;
