import React from 'react';
import Lists from './List/Lists';
import Nav from './UI/Navigation';
class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }
    componentDidMount() {
        const _this = this;
        let AV = global.constants.AV;
        let query = new AV.Query('BurgerOrders');
        query.notEqualTo('object', '0');
        query.find()
            .then(response => {
                _this.setState({
                    users: response,
                });
            })
            .catch(error => {
                console.log(error);
                _this.setState({
                    error: error
                })
            })
    }
    render() {
        return (
            <div>
                <Nav /><br /><br /><br /><br />
                <div><Lists infm={this.state.users} /></div>


            </div>
        )
    }
}
export default Orders;
