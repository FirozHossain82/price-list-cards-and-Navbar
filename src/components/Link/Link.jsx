import React from 'react';

const Link = ({route}) => {
    const {path, name} = route;
    return (
        <li className='mr-12 hover:bg-orange-100 hover:p-2 hover:rounded-md font-medium'>
            <a href={path}>{name}</a>
        </li>
    );
};

export default Link;