import "./Sidebar.css"
import { UilRss, UilMessage, UilUsersAlt, UilPlayCircle, UilBookmark, UilQuestionCircle, UilBag, UilGraduationCap, UilSchedule } from '@iconscout/react-unicons'

const Sidebar = (props) => {
    
    return ( props.data &&
        <div className="sidebarContainer">
            <div className="sidebarWrapper">
                <ul className="sidebarLinks">
                    <li className="sidebarLinkItems" >
                        <UilRss className="sidebarIcons" />
                        <span className="sidebarListText">Feeds</span>
                    </li>
                    <li className="sidebarLinkItems" >
                        <UilMessage className="sidebarIcons" />
                        <span className="sidebarListText">Chats</span>
                    </li>
                    <li className="sidebarLinkItems" >
                        <UilPlayCircle className="sidebarIcons" />
                        <span className="sidebarListText">Videos</span>
                    </li>
                    <li className="sidebarLinkItems" >
                        <UilUsersAlt className="sidebarIcons" />
                        <span className="sidebarListText">Group</span>
                    </li>
                    <li className="sidebarLinkItems" >
                        <UilBookmark className="sidebarIcons" />
                        <span className="sidebarListText">Bookmarks</span>
                    </li>
                    <li className="sidebarLinkItems" >
                        <UilQuestionCircle className="sidebarIcons" />
                        <span className="sidebarListText">Questions</span>
                    </li>
                    <li className="sidebarLinkItems" >
                        <UilBag className="sidebarIcons" />
                        <span className="sidebarListText">Jobs</span>
                    </li>
                    <li className="sidebarLinkItems" >
                        <UilSchedule className="sidebarIcons" />
                        <span className="sidebarListText">Events</span>
                    </li>
                    <li className="sidebarLinkItems" >
                        <UilGraduationCap className="sidebarIcons" />
                        <span className="sidebarListText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarBtn">Show More</button>
                <hr className = 'sidebarHr' />
                <ul className="sideabrFriendList">
                {props.data.map((e) => { // eslint-disable-next-line
                    return (<li className= "sidebarFriend">
                        <img className="sidebarFriendImg" src={e.user.profile_image.small} alt="" />
                        <span className="sidebarFriendName">{e.user.first_name +""+ e.user.last_name}</span>
                        </li>
                )
                     })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
