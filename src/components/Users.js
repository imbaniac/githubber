import React, {Component, PropTypes} from 'react'

export default class Users extends Component {
    render(){
        return (
           <ul>
                {this.props.users.map((user, i) =>
                    <li key={i}>
                    <img style={{height: "100px"}} src={user.avatar_url}/>{" "}
                    <a href={user.html_url}>{user.login} </a>
                    </li>
                )}
            </ul>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired
}