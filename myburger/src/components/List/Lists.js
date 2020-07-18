import React from 'react'
import List from './List'
class Lists extends React.Component {


    render() {


        return (
            <div>{this.props.infm.map((item) => {
                return <List it={item.attributes} id={item.id}/>
            })}</div>
        )
    }
}
export default Lists;