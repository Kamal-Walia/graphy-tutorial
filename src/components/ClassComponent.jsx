import React from "react";
import LiveCycleFuncComp from "./LiveCycleFuncComp";

class ClassComponent extends React.Component {
    constructor(props){
        super(props)
        console.log('KW102', this.props)
        // console.log('constructor')
        this.state = {
            name:"",
            lastName:""
        }
    }

    // componentDidMount() {
    //     console.log('componentDidMount')
    // }

    // componentWillUnmount() {
    //     console.log('componentWillUnmount')
    // }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate')
    // }

    handleLastNameUpdate = (e) => {
        this.setState({lastName:e.target.value});
}

showChildComponent = () => {
    switch(this.state.name){
        case "Kamal": 
        return <LiveCycleFuncComp name={this.state.lastName}/>

    }
    // if(this.state.name === "Kamal"){
    //     return <LiveCycleFuncComp name={this.state.lastName}/>
    // }
}

    render() {
        // console.log('KW101', this.props)
        // console.log('render')
        const {name} = this.props
        return(
            <div style={{background:'red'}}>
                Hello {name}
        <form>
            <input type="text" value={this.state.name} onChange={(e) => {
                    this.setState({name:e.target.value});
            }}/>
            <input type="text" value={this.state.lastName} onChange={this.handleLastNameUpdate}/>
            <input type="button" value={"Button"} onClick={() => {
                alert(this.state.name);
            }}/>
        </form>
        {this.showChildComponent()}
        </div>
        )
    }
    
}

export default ClassComponent;
