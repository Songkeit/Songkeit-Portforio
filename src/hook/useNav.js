import { useContext, useEffect, useRef } from "react"
import { UseOnScreen } from "./useOnScreen"
import { NavContext } from "../context/NavContext"

export const UseNav = (navLinkId) =>{
    const ref = useRef(null)
    const {setActiveLinkId} = useContext(NavContext)
    const isOnScreen = UseOnScreen(ref)
    
    useEffect(()=>{
        if(isOnScreen){
            setActiveLinkId(navLinkId)
        }
    },[isOnScreen,setActiveLinkId])
    return ref
}
