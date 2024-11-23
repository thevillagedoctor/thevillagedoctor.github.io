import React from "react";

type textState = {
    text: string[],
}

export default class WelcomeDisclaimer extends React.Component <{}, textState> {
    constructor(props) {
        super(props);
        this.state = {
            text: [],
        }
    }

    componentDidMount() {
        
        fetch('./editInfo/Welcome-Disclaimer.txt')
            .then(response => response.text())
            .then(data => {
                this.setState({text: data.split('\n').filter(x => x != '\r' && x !== '')});
            });
    }

    render() {
        return (
            <div>
                {this.state.text.map(p => {
                    return <p className="bold" key={p}>{p}</p>
                })}
            </div>
        )
    }
}