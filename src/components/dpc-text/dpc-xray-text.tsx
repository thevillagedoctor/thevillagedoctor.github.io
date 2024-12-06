import React from "react";

type textState = {
    text: string[],
}

export default class DPCXRayText extends React.Component <{}, textState> {
    constructor(props) {
        super(props);
        this.state = {
            text: [],
        }
    }

    componentDidMount() {
        
        fetch('./editInfo/DPC-XRay-Text.txt')
            .then(response => response.text())
            .then(data => {
                this.setState({text: data.split('\n').filter(x => x != '\r' && x !== '')});
            });
    }

    render() {
        return (
            <div>
                {this.state.text.map(p => {
                    return <p key={p}>{p}</p>
                })}
            </div>
        )
    }
}