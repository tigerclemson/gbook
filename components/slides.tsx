import React, { useRef } from 'react';


export default function Slides(prop) {

    return (
        <>
            <iframe src={prop.src} 
                width={prop.width} 
                height={prop.height} 
                title={prop.title} scrolling="no" frameborder="0" >

            </iframe>
        </>

    );
}
