import React, { useEffect } from "react";

const LiveCycleFuncComp = ({lastName}) => {

    useEffect(() => {
        console.log("Component did mount functional component")
        return () => {
            console.log("Component will unmount")
        }
    }, [])

    useEffect(() => {
        console.log("Component did update functional component")
    }, [lastName])

    useEffect(() => {
        console.log("Component did Update 1 functional component")
    })

    return(
        <p>
            I'm a functional component
        </p>
    )
}

export default LiveCycleFuncComp;