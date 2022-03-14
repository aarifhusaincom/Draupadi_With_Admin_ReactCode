import React, { Component } from 'react'
import userList from './mock-data.json'
import { FormControl } from 'react-bootstrap'

const divStyle = {
    borderWidth: '1px',
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '60px',
    marginRight: '60px',
    borderLeftStyle: 'none',
    marginTop: '40px',
    borderRightStyle: 'none',
    fontSize: '32px',
}

export default class GetList extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
            userData: userList
        }
    }
    handleChange = () => {
        var value = this.myRef.current.value
        console.log(value)
        if (value !== "") {
            const newData = userList.filter((user) => {
                //console.log(Object.values(user).join(" "))
                return Object.values(user).join("").toLowerCase().includes(value.toLowerCase())
            })
            this.setState({
                userData: newData
            })
            //console.log(this.state.userData)
        } else {
            this.setState({
                userData: userList
            })
        }
    }
    render() {
        return (
            <div>
                <div>
                    <FormControl
                        ref={this.myRef}
                        style={{ fontSize: '32px', position: 'fixed', top: 0, 
                        marginLeft: '60px' }}
                        type="text"
                        placeholder="Search Name,Email or Phone.."
                        onChange={this.handleChange}
                    />
                </div>
                <div style={{ marginTop: '80px' }}>

                    {this.state.userData.length > 0 ?

                    this.state.userData.map(user =>
                        <div key={user.id}
                            style={divStyle}
                            >
                            <img
                                src="https://icon-library.com/images/people-circle-icon/people-circle-icon-11.jpg"
                                width='60' height='60'
                                style={{ marginTop: '20px', marginLeft: '60px', }}></img>
                            <div
                                style={{ marginTop: '20px', marginLeft: '20px' }}>
                                <h3 style={{ color: 'black' }}>{user.first_name}{user.last_name}</h3>
                                <h3 style={{ color: 'green' }}>{user.email}</h3>
                                <h3 style={{ color: 'olive' }}>{user.phone}</h3>
                            </div>
                        </div>
                    ):<h1 style={{textAlign:'center'}}>No Record Found</h1>}
                </div>

            </div>
        )
    }
}
