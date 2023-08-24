import { UilSearch, UilUser, UilMessage, UilBell } from '@iconscout/react-unicons'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="navleft">
                <span>Social🐝</span>
            </div>
            <div className="navcenter">
               
                    <UilSearch className="searchicon" />
                    <input type="text" placeholder="Search for Friends, Post or Video" className="seachinput" />
               
            </div>
            <div className="navright">
                <div className="navlinks">
                    <span className="navlink"> HomePage </span>
                    <span className="navlink"> Timeline </span>
                </div>
                <div className="navicons">
                    <div className="navicon">
                        <UilUser className = "icon"/>
                        <span className="naviconbadge">1</span>
                    </div>
                    <div className="navicon">
                        <UilMessage className = "icon"/>
                        <span className="naviconbadge">2</span>
                    </div>
                    <div className="navicon">
                        <UilBell className = "icon"/>
                        <span className="naviconbadge">1</span>
                    </div>
                </div>
                <div className="navprofile">
                    <img className="navprofileimg" src="assets/person/1.jpg" alt='' />
                </div>

            </div>
        </div>
    )
}
