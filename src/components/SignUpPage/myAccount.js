import React, { Component } from 'react'
 
import UserProfile from 'react-user-profile'
 
class MyAccount extends Component {
  render() {
    const photo = 'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599'
    const userName = 'Harvey Specter'
    const location = 'New York, USA'
 
    return (
      <div style={{ margin: '0 auto', width: '100%',height:500 }}>
        <UserProfile photo={photo} userName={userName} location={location} />
      </div>
    )
  }
}
 
export default MyAccount;