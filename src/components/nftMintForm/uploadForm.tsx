import React from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    VStack,
    Textarea
} from '@chakra-ui/react';
import { NFTElementData } from '../../types';

export interface UploadFormProps {
    value: NFTElementData;
    onChange: (value: NFTElementData) => void;
}

export const UploadForm: React.FC<UploadFormProps> = ({ value, onChange }) => {
    return (
        <VStack gap={2}>
            <FormControl>
                <FormLabel size="sm">Title</FormLabel>
                <Input
                    value={value.name}
                    onChange={(event) =>
                        onChange({ ...value, name: event?.target.value })
                    }
                    placeholder="Title of NFT"
                    bg={'gray.100'}
                    border={0}
                    color={'gray.700'}
                    _placeholder={{
                        color: 'gray.500'
                    }}
                />
            </FormControl>

            <FormControl>
                <FormLabel size="sm">Description</FormLabel>
                <Textarea
                    value={value.description}
                    onChange={(event) =>
                        onChange({ ...value, description: event?.target.value })
                    }
                    placeholder="Description"
                    bg={'gray.100'}
                    border={0}
                    color={'gray.700'}
                    _placeholder={{
                        color: 'gray.500'
                    }}
                />
            </FormControl>
            <FormControl>
                <FormLabel size="sm">Quantity</FormLabel>
                <NumberInput
                    defaultValue={15}
                    min={1}
                    max={20}
                    bg={'gray.100'}
                    value={value.quantity}
                    onChange={(_, quantity) =>
                        onChange({ ...value, quantity })
                    }>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
        </VStack>
    );
};
