import React from "react"

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: ""
        };
    }
    inputChange = (e) => {
        
         this.setState({userInput:e.target.value});
    };
    render() {
        return (
            <div>
                <input type="text" onChange={this.inputChange}/>
            </div>
        )
    }
}
export default  Chat;