import './profile.css'
import Sidebar from './../../components/sidebar/Sidebar';
import UserProfile from '../../components/userProfile/UserProfile';
import Navbar from '../../components/topbar/Navbar';


const Profile = (props) => {
    return (<>
        <Navbar />
        <div className='profile'>
            <Sidebar data={props.data} />
            <UserProfile data = {props.data} />
        </div>
    </>
    )
}

export default Profile