import React, { Component } from 'react'
import 'isomorphic-fetch'
import Form from '../components/form'
import { withAuthSync } from '../utils/auth'
import Layout from '../components/layout'





class Admin extends Component {
    submitForm (data) {
      fetch(`${process.env.MANAGEMENT}/profile`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    }

    
   
  render() {
    return (
      <Layout>
      <div className="wrapper wrapper--w780">
        <Form
        submitForm = {this.submitForm.bind(this)}
        />
      </div>
      </Layout>
    )
  }
}
// Admin.getInitialProps = async ctx => {
//   const { token } = nextCookie(ctx)
//   const redirectOnError = () =>
//     process.browser
//       ? Router.push('/login')
//       : ctx.res.writeHead(301, { Location: '/login' })

//   try {
//     const response = await fetch('http://localhost:8080/profile', {
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: JSON.stringify({ token })
//       }
//     })

//     if (response.ok) {
//       return await response.json()
//     } else {
//       // https://github.com/developit/unfetch#caveats
//       return redirectOnError()
//     }
//   } catch (error) {
//     // Implementation or Network error
//     return redirectOnError()
//   }
// }


export default Admin