import React from 'react';

type resource = {
    text: string,
    link: string,
}

type resourceListState = {
    resourceList: resource[],
}

export default class ResourceList extends React.Component <{}, resourceListState> {
    constructor(props) {
        super(props);
        this.state = {
            resourceList: [],
        }
    }

    componentDidMount() {
        
        fetch('./editInfo/Resources.txt')
            .then(response => response.text())
            .then(data => {
                const resourceArray = data.split('\n').filter(x => x !== '\r' && x !== '');
                console.log(resourceArray);
                this.setState({resourceList: (resourceArray.map(x => JSON.parse(x)))});
            });
    }

    render() {

        console.log(this.state.resourceList);

        return(
            <div>
                {this.state.resourceList.map(resource => {
                    return <li key={resource.text}>{resource.text} <a href={'http://' + resource.link} rel="noreferrer" target="_blank">{resource.link}</a></li>
                })}
            </div>
        )
    }
}