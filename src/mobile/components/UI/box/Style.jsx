import React from 'react';

const Style = ({children,...props}) => {
    return (
        <div {...props}>
            {children}
        </div>
    );
};

export default Style;