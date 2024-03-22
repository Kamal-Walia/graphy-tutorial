import React, { useEffect, useState } from "react";

const LiveCycleFuncComp = ({ lastName }) => {
    const [apiData, setAPIData] = useState();

    useEffect(() => {
        console.log("Component did mount functional component")
        callAPI();
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

    const callAPI = () => {
        fetch("https://dummyjson.com/products/1").then(response => response.json().then(data => {
            console.log("API Data", data);
            setAPIData(data);
        }

        ))
    }

    return (
        <div>
            I'm a functional component
            <button onClick={callAPI}>Call API</button>
            {
                apiData && (
                    <div>
                        <p>Mobile Name: {apiData.title}</p>
                        <p>Mobile category: {apiData.category}</p>
                    </div>
                )
            }

        </div>
    )
}

export default LiveCycleFuncComp;