import { useRouter } from "next/dist/client/router";

function Review (){
    const router=useRouter()
    const {reviewId,productId} = router.query
    return(
        <h1>
            Review page number {reviewId} of product {productId} 
        </h1>
    )
}
export default Review;