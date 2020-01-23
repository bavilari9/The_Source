import React from 'react';
import App from 'next/app';
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import DataContext from '../components/DataContext'
import Router from 'next/router'
import cookie from 'js-cookie';
import {Footer} from '../components/Footer'
import EarlyAccess from './early_access';
import {checkCode} from '../api/api';
import Loader from '../components/Loader';


class MyApp extends App {
    DURATION_COOKIE = 1;
    state = {
        loading: true,
        data: [
        ],
        countries:[],
        dataCategory:{
          acting:[],
          writing:[],
          directing:[],
          showrunning:[]
        },
        queries:{
          age: {
            min:'',
            max:'',
          },
          country: undefined,
          credit: undefined,
          gender:undefined
        },
        existsCookie: null,
        queryString:[],
        singleProfile:[]
      };

      setDataHome(data, name){
        this.setState(prev=>{
            prev.data =data,
            prev.queries.credit= name
            return prev
        })
        Router.push('/search').then(() => window.scrollTo(0, 0))
      }
      
      setData(data){
        this.setState(prev=>{
            prev.data =data
            return prev
        })
      }
      setSubmitEdit(id, data){
        this.setState(prev =>{
          data[id] = data 
       })
      }
      handleAdminChange(id, e){
        const val = e.target.value;
        const name = e.target.name;
        this.setState(prev => {
          prev.data[id][name] = val;
          return prev;
        });
      }

      setDeleteData(id){
        this.setState(prev =>{
          prev.data = prev.data.filter( s=> s.id !== id);
          return prev;
      })
      }

      submitFormData(data){
        this.setState(prev =>{
          prev.data = [data, ...prev.data]
          return prev;
      })
      }
      setQueries(event, meta, query,setSearchActive){
        const {value } = event
        const {name} =meta
         this.setState(prev => {
            prev.queries[name] = value;
            return prev
          }, state=>{
            query(this.state.queries)
            setSearchActive(true)
          })
      }
      clearState(setRangeClass, advanceQuery){ 
        this.setState({
          queries:{
            age: {
              min:'',
              max:'',
            },
            country:undefined,
            credit: undefined,
            gender:undefined
          }
        },state=>{
          setRangeClass('input-age')
          advanceQuery(this.state.queries)
          return this.state.queries
        })
      }
      onSliderChange = (value,query) => {
        this.setState(prev => {
          prev.queries.age.min = value[0]
          prev.queries.age.max = value[1]
          return prev;
        },state=>{
          query(this.state.queries)
        });
        }

      setSingleProfile(singleProfile){
        this.setState({
          singleProfile
        })
      }
      // To Do : prioritize if photo exists
      sortSetter =()=>{
        console.log('sorting results ')
        let dataSort = this.state.data.sort(function(a,b){
          let curretDate = new Date().getFullYear();
          let Adob = curretDate - parseInt(a.dob.split('T')[0].substring(0, 4))
          let Bdob = curretDate - parseInt(b.dob.split('T')[0].substring(0, 4))
           return Bdob - Adob
        });
        this.setState({
          data : dataSort
        })
       }
      setFormSubmit(data){
        this.setState(prev =>{
          prev.data = [res, ...prev.data]
          return prev;
      })
      }
      static async getInitialProps({}) {
        singleProfile()
      }
      static async getInitialProps(params = {}) {
        // console.log(params)
        const {ctx} = params || {};
        // console.log("@@@@@@", checkCode().then(res => console.log(res.body)))
      // const existsCookie = await checkCode();
        let data = [];
        let countries = [];
        const forbidden = ctx.res && ctx.res.statusCode === 401;
        // console.log("@@forbidden", ctx.asPath)
        // if (!forbidden) {
          // console.log("@existsCookie", existsCookie.exists)
          // if (existsCookie.exists) {
            // const res = await fetch(`${process.env.MANAGEMENT}/profile`);
            const res = await fetch(`http://localhost:3000/api/profile`);
              data = await res.json();
              const resCounties = await fetch(
                `http://localhost:3000/api/profile/countries`
                // `${process.env.MANAGEMENT}/profile/countries`
              );
              countries = await resCounties.json();
          // }
          // }
        return { data, countries, existsCookie: !forbidden, path: ctx.asPath };
      }

      componentDidMount () {
        // checkCode().then(existsCookie => {
          // let existsCookie = {exists: true}
          // console.log(existsCookie)
          // if (existsCookie.exists) {
            let {data, countries, existsCookie}= this.props
            data = !data ? [] : data;
            let acting =data.filter(profile=>profile.credit==='acting');
            let writing = data.filter(profile=>profile.credit=='writing' )
            let directing = data.filter(profile=>profile.credit =='directing');
            let showrunning = data.filter(profile=>profile.credit=='showrunning');

            this.setState({
              data,countries,
              existsCookie: existsCookie,
              loading: false,
              dataCategory: Object.assign({}, this.state.access, {
                acting,showrunning, writing, directing
              }),
              // earlyAccessCode: this.getEarlyAccess()
            })
          // } else {
          //   this.setState({
          //     loading: false,
          //     existsCookie: false
          //   })
          // }
        // });

      }
  getEarlyAccess() {
    return cookie.get("earlyAccessCode");
  }
  saveEarlyAccessToken(token) {
    // cookie.set("earlyAccessCode", token, {expires: this.DURATION_COOKIE});
    this.setState({
      existsCookie: true
    });
    console.log("@this.props.path", this.props.path)
    Router.push(this.props.path).then(() => window.scrollTo(0, 0))
  }
  render() {
    // cookie.remove("earlyAccessCode");
    const { Component, pageProps } = this.props;
    const {data, countries, dataCategory, queries, singleProfile} = this.state;
    return<DataContext.Provider value={{
      data,countries,dataCategory,queries,singleProfile,
      setDataHome : this.setDataHome.bind(this),
      setData:this.setData.bind(this),
      setQueries:this.setQueries.bind(this),
      onSliderChange: this.onSliderChange.bind(this),
      setSingleProfile:this.setSingleProfile.bind(this),
      setFormSubmit:this.setFormSubmit.bind(this),
      clearState: this.clearState.bind(this),
      submitFormData: this.submitFormData.bind(this),
      setDeleteData:this.setDeleteData.bind(this),
      setSubmitEdit:this.setSubmitEdit.bind(this),
      handleAdminChange: this.handleAdminChange.bind(this),
      sortSetter:this.sortSetter.bind(this),
      saveEarlyAccessToken:this.saveEarlyAccessToken.bind(this)
      }}>
        {this.state.loading ? 
          <Loader/>
        : this.state.existsCookie ?
            <div className="imbd-container">
              <Layout>
                <Component {...pageProps} />
              </Layout>
              <Footer/>
            </div>
          : <EarlyAccess />}
      </DataContext.Provider>
  }
}



export default MyApp;