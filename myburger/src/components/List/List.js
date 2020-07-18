import React from 'react'
import '../UI/List.css'

class List extends React.Component {


    render() {



        return (
            <div>
                <div className='ls'>
                    <h1>{this.props.it.Name}</h1>
                    <h2>Address:{this.props.it.Address}&nbsp;Phone:{this.props.it.Phone}</h2>
                    <p>Bacon({this.props.it.Bacon})</p>
                    <p>Cheese({this.props.it.Cheese})</p>
                    <p>Meat({this.props.it.Meat})</p>
                    <p>Salad({this.props.it.Salad})</p>
                    <br></br>
                    <br></br>
                    <p>price:</p><h3>CHN {this.props.it.Total}</h3>
                </div>
            </div>
        )
    }
}

export default List