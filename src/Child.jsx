import React, { useState } from "react";

const Child = (props) => {
    const [name, setName] = useState("");
    return(
        <div style={{background:'green'}}>
            Kamal
        <form>
            <input type="text" value={name} onChange={(e) => {
                    console.log("KW101", e);
                    setName(e.target.value);
            }}/>
            <input type="button" value={"Button"} onClick={() => {
                alert(name);
            }}/>
        </form>
        <p>Prop value: {props.firstName} {props.lastName}</p>
        </div>
    )
}

export const myLastName = "Walia";

export default Child;