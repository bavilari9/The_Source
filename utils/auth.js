import { useEffect, Component } from 'react'
import App from 'next/app';
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'

export const login = ( token) => {
  console.log("cookies setting", token )
  cookie.set('token', token, { expires: 1 })
  Router.push('/data')
}

export const auth = ctx => {
  const { token } = nextCookie(ctx)

  // If there's no token, it means the user is not logged in.
  if (!token) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/login' })
      ctx.res.end()
    } else {
      Router.push('/data')
    }
  }

  return token
}

export const logout = () => {
  cookie.remove('token')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  Router.push('/login')
}

export const withAuth = C =>{
  return class extends Component{
    static async getInitialProps({ctx}){
        const token = auth(ctx)
        console.log('getting initial props', token )
        let componentProps = {}
        if(C.getInitialProps){
          componentProps = await C.getInitialProps(ctx)
        }
        // const componentProps =WrappedComponent.getInitialProps &&(await WrappedComponent.getInitialProps(ctx))
  
      return { ...componentProps, token }
    }
      render(){
        console.log("RENDER OF C")
        // const { Component, pageProps } = this.props;
          return (
              <div>
                  <C {...this.props}/>
              </div>
          );
      }
  } 
}



export const withAuthSync = WrappedComponent => {
  console.log("this is auth wrapper", WrappedComponent)

  const Wrapper = props => {
    // const syncLogout = event => {
    //   if (event.key === 'logout') {
    //     console.log('logged out from storage!')
    //     Router.push('/login')
    //   }
    // }

    // useEffect(() => {
      
    //   window.addEventListener('storage', syncLogout)

    //   return () => {
    //     window.removeEventListener('storage', syncLogout)
    //     window.localStorage.removeItem('logout')
    //   }
    // }, [])

    return <WrappedComponent {...props} />
  }

  console.log("wrapper", Wrapper)

  Wrapper.getInitialProps = async ctx => {

    const token = auth(ctx)
    console.log('getting initial props', token )
    return WrappedComponent.getInitialProps!==undefined?WrappedComponent.getInitialProps(ctx):{}
    // const componentProps =
    //   WrappedComponent.getInitialProps &&
    //   (await WrappedComponent.getInitialProps(ctx))

    // return { ...componentProps, token }
  }

  return Wrapper
}