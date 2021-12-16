import { useRouter } from "next/dist/client/router";

function Doc(){
    const router= useRouter();
    const{params=[]} =router.query
    console.log(params)
    if(params.length===2){
        return(
        <h1>
            This is length {params[0]} and concept {params[1]}
        </h1>
        )
    }else if(params.length===1){
        return(
        <h1>this is length {params[0]} and concept{params[0]}
        </h1>
        )
    }
    return(
        <h1>Doc Home page</h1>
    )
}
export default Doc;