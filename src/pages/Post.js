import {useParams} from "react-router-dom"
export default function Post(){
    let params = useParams();
    console.log(params)
    return `postal code is: ${params.post}`
}