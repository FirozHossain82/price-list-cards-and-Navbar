import React from 'react';

const Link = ({route}) => {
    const {path, name} = route;
    return (
        <li className='mr-12'>
            <a href={route}>{name}</a>
        </li>
    );
};

export default Link;