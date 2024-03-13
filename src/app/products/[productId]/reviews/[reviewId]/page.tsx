type Props = {
    params: {
        productId: string,
        reviewId: string
    }
}

export default function ReviewDetails({ params }: Props) {
    return (
        <div>
            <h1>Review about product {params.productId}</h1>
            <h2>ID Review : {params.reviewId}</h2>
        </div>
    )
}
