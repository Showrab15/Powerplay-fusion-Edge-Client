import { useEffect } from "react"

const dynamicTitle = (title) =>{
    useEffect(()=>{
        document.title = `${title} || Powerplay Fusion Edge`
    },[title])
}
export default dynamicTitle