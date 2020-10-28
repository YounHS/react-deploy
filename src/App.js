import React, { Component } from 'react';

class App extends Component {
    state = {
        // hello: 'hello app js!!!!'
        count: 0
    };

    handleChange = () => {
        this.setState({
            hello: 'bye app js!!!!'
        });
    };

    countUp = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return ( <
            div className = "App" >
            <
            h3 > index Props < /h3> <
            div className = "props" >
            <
            span > { this.props.message } < /span> <
            /div>

            <
            h3 > State < /h3> <
            div className = "state" > {
                /* {this.state.hello}
                          <button onClick={this.handleChange}>click Me!</button> */
            } { this.state.count } <
            button onClick = { this.countUp } > count up! < /button> <
            /div>

            <
            h3 > App Props < /h3> <
            div className = "inside-app-props" >
            <
            InsideApp count = { this.state.count }
            countUp = { this.countUp }
            /> <
            /div> <
            /div>
        );
    };
}

class InsideApp extends Component {
    render() {
        return ( <
            div > { this.props.count } <
            button onClick = { this.props.countUp } > click Me! < /button> <
            /div>
        );
    }
}

export default App;