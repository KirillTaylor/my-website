import React from 'react';

interface SquareContentProps {
    title: string;
    description: string;
    image?: string;
    link?: string;
    icon?: string;
}

const SquareContent = (props: SquareContentProps) => {
    return (
        <div className="square-content m-4 text-center">
            <div className="flex justify-center items-center">
                {props.image && !props.icon && <img src={props.image} alt={props.title} />}
                {props.icon && <i className={`mdi mdi-${props.icon} text-4xl`}></i>}
            </div>
            <div className="text-2xl font-bold mb-6">{props.title}</div>
            <div className="mb-6">{props.description}</div>
            {props.link && <a href={props.link}>{`More info`}</a>}
        </div>
    );
};

export default SquareContent;