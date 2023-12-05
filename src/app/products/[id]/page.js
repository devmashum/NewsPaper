import React from 'react';

const DynamicPage = ({params, searchParams}) => {
   console.log(params);
   console.log(searchParams)
    return (
        <div>
            <h1>This is dynamic page: {searchParams.price}</h1>
        </div>
    );
};

export default DynamicPage;