import React, {Component, PropTypes} from 'react'

export default class Users extends Component {
    render(){
        return (
           <ul>
                {this.props.users.map((user, i) =>
                    <li key={i}>{user}</li>
                )}
            </ul>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired
}