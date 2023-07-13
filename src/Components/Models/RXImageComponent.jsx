import React from 'react';

const ImageComponent = ({ imageUrl }) => {
    const { image, isLoading, error } = useImageLoader(imageUrl);

    if (isLoading) {
        return (
            <div
                style={{
                    width: 'auto',
                    height: 'auto',
                    background: 'linear-gradient(-45deg, #eee, #ddd)',
                    animation: 'gradientAnimation 1s ease-in-out infinite',
                }}
            />
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <img alt="" src={image} />;
};

export default ImageComponent;