import React from 'react';

// Import images from the assets folder

export default function ImagePreview() {

    const [currentIndex, setCurrentIndex] = React.useState(5);
    const images = import.meta.glob('../assets/*.jpg', {eager: true});
    const imageList = Object.values(images).map(image => image.default);


    return <>
        <div className="image-preview-div">
            <img
                src={imageList[currentIndex]}
                alt={`preview-${currentIndex}`}
                className="previewImage"
                onClick={() => setCurrentIndex((currentIndex + 1) % imageList.length)}
                style={{cursor: "pointer"}}
            />
        </div>

        {/*Buttons*/}

        <div className={"imageButtonBox"}>
            <button
                className="imageButton"
                onClick={() => setCurrentIndex((currentIndex - 1 + imageList.length) % imageList.length)}
            >
                &lt;
            </button>
            <button
                className="imageButton"
                onClick={() => setCurrentIndex((currentIndex + 1) % imageList.length)}
            >
                &gt;
            </button>
        </div>

        </>
}