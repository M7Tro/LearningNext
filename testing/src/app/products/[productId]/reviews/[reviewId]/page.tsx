export default function Review({params}: {params: {reviewId: string}}){
    return (
        <h2>Review no {params.reviewId}</h2>
    )
}