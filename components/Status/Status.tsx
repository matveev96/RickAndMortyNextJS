import React from 'react';
import Image, {type StaticImageData} from "next/image";

type PropsType = {
    src: StaticImageData;
}


const Status = (props: PropsType) => {

    const {src} = props;

    return (
        <Image src={src} alt={`status`} width={15} height={15}/>
    );
};

export default Status;