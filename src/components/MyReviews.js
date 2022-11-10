import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyReviews = () => {
    const reviews = useLoaderData({});
    console.log(reviews);
    return (
        <div>
            <h1 class="text-2xl">Your reviews</h1><br />
            {
                reviews.map(reviews => <div> <p>{reviews.reviewFild}</p> <br /></div>)
            }
        </div>
    );
};

export default MyReviews;