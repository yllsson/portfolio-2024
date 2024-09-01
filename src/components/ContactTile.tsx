import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    text: string;
    url: string;
    icon: IconProp;
};

const ContactTile = ({ text, url, icon }: Props) => {
    return (
        <a className='contact-link' href={url} target='_blank'>
            {/* <i className={`${icon}`}></i> */}
            <FontAwesomeIcon icon={icon} />
            <span>{text}</span>
        </a>
    );
};

export default ContactTile;
