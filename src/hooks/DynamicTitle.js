import { useEffect } from "react"

const dynamicTitle = (title) =>{
    useEffect(()=>{
        document.title = `${title}  -assignment-12`
    },[title])
}
export default dynamicTitle