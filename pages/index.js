import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
function Home(){
    const router=useRouter()
    const handleClick=()=>{
        console.log("place order")
        router.push("/products")
    }
    return(
     <div>
        <h1>Home</h1>
        <Link href="/blog">
        <a>Blog</a>
        </Link>
        <Link href="/products">
        <a>product</a>
        </Link>
        <button onClick={handleClick}>Place Order</button>
     </div>
    )
}
export default Home