import React from 'react'
import Navbar from '../../components/topbar/Navbar';
import Sidebar from './../../components/sidebar/Sidebar';
import Feeds from './../../components/feeds/Feeds';
import Rightbar from './../../components/rightbar/Rightbar';
import './Home.css'


const Home = (props) => {
    return (props.data && <>
            <Navbar/>
            <div className = "home">
            <Sidebar data = {props.data}/>
            <Feeds data = {props.data}/>
            <Rightbar data = {props.data}/>
            </div>
            </>
    )
}

export default Home
