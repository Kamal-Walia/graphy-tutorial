import React from "react";
import LiveCycleFuncComp from "./LiveCycleFuncComp";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        console.log('KW102', this.props)
        // console.log('constructor')
        this.state = {
            name: "",
            lastName: ""
        }
    }

    componentDidMount() {
        this.callAPI()
        console.log('componentDidMount')
    }

    // componentWillUnmount() {
    //     console.log('componentWillUnmount')
    // }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate')
    // }

    handleLastNameUpdate = (e) => {
        this.setState({ lastName: e.target.value });
    }

    showChildComponent = () => {
        console.log("KW102", this.state.name)
        switch (this.state.name) {
            case "Kamal":
                return <LiveCycleFuncComp name={this.state.lastName} />

        }
        // if(this.state.name === "Kamal"){
        //     return <LiveCycleFuncComp name={this.state.lastName}/>
        // }
    }

    callAPI = () => {
        fetch("https://dummyjson.com/products/1").then(response => response.json().then(data => {
            console.log("API Data From Class Component", data);
            // setAPIData(data);
        }

        ))
    }

    postData = () => {
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'Hello From Graphy Class',
                userId: 5,
                /* other post data */
            })
        })
            .then(res => res.json())
            .then(console.log);
    }

    render() {
        // console.log('KW101', this.props)
        // console.log('render')
        const { name } = this.props
        return (
            <div style={{ background: 'red' }}>
                Hello {name}
                <form>
                    <input type="text" value={this.state.name} onChange={(e) => {
                        this.setState({ name: e.target.value });
                    }} />
                    <input type="text" value={this.state.lastName} onChange={this.handleLastNameUpdate} />
                    <input type="button" value={"Button"} onClick={() => {
                        alert(this.state.name);
                    }} />
                </form>
                <button onClick={this.callAPI}>Call API From Class Component</button>
                <button onClick={this.postData}>Call POST Method API</button>
                {this.showChildComponent()}
            </div>
        )
    }

}

export default ClassComponent;
