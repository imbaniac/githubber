import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {selectLanguage, fetchUsersIfNeeded} from '../actions/actions'
import Picker from '../components/Picker'
import Users from '../components/Users'

class App extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        const {dispatch, selectedLanguage} = this.props
        dispatch(fetchUsersIfNeeded(selectedLanguage))
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.selectedLanguage !== this.props.selectedLanguage){
            const {dispatch, selectedLanguage } = nextProps
            dispatch(fetchUsersIfNeeded(selectedLanguage)) 
        }
    }
    handleChange(nextLanguage){
        this.props.dispatch(selectLanguage(nextLanguage))
    }
    
    render(){
        const { selectedLanguage, users, isFetching } = this.props
        return (
            <div>
                <Picker value={selectedLanguage}
                        onChange={this.handleChange}
                        options={['javascript', 'c++', 'python', 'ruby', 'c#', 'swift']} />
                { isFetching && users.length === 0 &&
                  <h2>Loading...</h2>
                }
                { !isFetching && users.length === 0 &&
                    <h2>Empty</h2>
                }
                {users.length>0 && 
                    <div style= {{opacity: isFetching? 0.5 : 1}}>
                        <Users users={users} />
                    </div>
                }
            </div>
                
        )
    }
    
}

App.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
    const { selectedLanguage, usersByLanguage } = state
    const {
        isFetching,
        items: users 
    } = usersByLanguage[selectedLanguage] || {
            isFetching: true,
            items: []
        }
        
    return {
        selectedLanguage,
        users,
        isFetching
    }
 }
 
 export default connect(mapStateToProps)(App)