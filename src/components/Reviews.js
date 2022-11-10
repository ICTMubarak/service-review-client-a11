import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Reviews = () => {
    const reviews = useLoaderData({});
    return (
        <div>
            <h1>reviews show</h1>
            {
                reviews.map(reviews => <div> <p>{reviews.reviewFild}</p> <br /></div>)
            }
        </div>
    );
};

export default Reviews;