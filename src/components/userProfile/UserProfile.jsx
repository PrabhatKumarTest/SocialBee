import './userProfile.css'
import Feeds from '../../components/feeds/Feeds';
import Rightbar from '../../components/rightbar/Rightbar';

const Profile = (props) => {
  return (

    <div className="profileConatiner">
      <div className="profileWrapper">
        <div className="profileTop">
          <img className="profileCoverImage" src="https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="CoverPhoto" />
          <div className="profileImg">
            <img src="https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="ProfileImage" />
          </div>
        </div>
        <div className="profileUserDetails">
          <p className="profileName">Prabhat kumar</p>
          <p className="profileDetails">Hii EveryOne</p>
        </div>
      </div>
      <div className="profileCenter">
        <div className="feed">
        <Feeds data={props.data} />
        </div>
        <Rightbar data={props.data} profile = {"profile"}/>
      </div>
    </div>

  )
}

export default Profile