import React from 'react';
import { Image } from 'react-native';

export type Props = {
    source: any,
    style?: any
    resizeMode?: any
}

const RNImage: React.FC<Props> = (props) => {

    const { source, style, resizeMode } = props;

    return (
        <Image {...props} />
    );
};

export default RNImage;
