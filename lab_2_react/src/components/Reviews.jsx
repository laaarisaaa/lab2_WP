import React, { useState, useEffect } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const variant = 16;
        const url = `https://jsonplaceholder.typicode.com/posts/${variant}/comments`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setReviews(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching reviews:", error);
                setIsLoading(false);
            });
    }, []); 

    if (isLoading) return <p className="text-center text-slate-500">Завантаження відгуків...</p>;

    return (
        <section className="bg-white border p-6 rounded-2xl shadow-sm mt-6">
            <h2 className="text-blue-600 font-bold uppercase text-xs mb-4">Відгуки роботодавців</h2>
            <div className="space-y-4">
                {reviews.map((review) => (
                    <div key={review.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                            <span className="text-[10px] text-slate-400 font-mono">{review.email}</span>
                        </div>
                        <p className="text-sm text-slate-600 italic leading-relaxed">
                            "{review.body}"
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;