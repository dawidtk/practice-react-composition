import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const { items } = props

    return (
        <ul>
            {items.map((item, index) => 
                <ListItem key={index} content={item} />
            )}
        </ul>
    )
}

export default List;