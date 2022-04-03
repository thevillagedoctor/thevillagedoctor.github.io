import React from 'react';

type hoursState = {
    hours: string[],
}

export default class Hours extends React.Component <{}, hoursState> {
    constructor(props) {
        super(props);
        this.state = {
            hours: [],
        }
    }

    componentDidMount() {
        
        fetch('./editInfo/Hours.txt')
            .then(response => response.text())
            .then(data => {
                this.setState({hours: data.split('\n').filter(x => x !== '\r' && x !== '')});
            });
    }

    render() {
        return(
            <div>
                {this.state.hours.map(day => {
                    return <p key={day}>{day}</p>
                })}
            </div>
        )
    }
}