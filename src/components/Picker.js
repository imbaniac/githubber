import React, {Component, PropTypes } from 'react'

export default class Picker extends Component {
    render(){
        const {value, onChange, options, total} = this.props
        return (
            <div>
                <h1>{value}</h1>
                <span>The most popular 100 users from {total} who codes in: </span>{"  "}
                <select onChange={e=> onChange(e.target.value)}
                value = {value}>
                    {options.map(option => 
                        <option value={option} key={option}>
                            {option}
                        </option>)
                    }
                )
                </select>
            </div>
        )
    }
}

Picker.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    value: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}