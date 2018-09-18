import React from 'react';

class Module extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        console.log(data);
        return <div></div>
    }
}

export default Module;