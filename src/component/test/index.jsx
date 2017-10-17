import * as React from 'react';

export class Test extends React.Component {
    render() {
        console.log('bug');
        return <div>组件test</div>;
    }
}
