import './Rightbar.css'
import { UilGift } from '@iconscout/react-unicons'

const Rightbar = (props) => {
    return (props.data &&
        <div className="rightbarContainer">
            <div className="rightWrapper">
                {!props.profile ?
                    <>
                        <div className="birthdayComponent">
                            <UilGift style={{ color: "red", width: "3rem", height: "3rem", marginRight: "0.5rem" }} />
                            <span className="birthdayComponentText"><b>Prabhat</b> and <b>3 Other</b> Have their Birthday Today</span>
                        </div>
                        <hr className='rightHr' />
                        <div className="friendsOnlineComponent">
                            {props.data.map((e) => {
                                return <div className="friendOnline">
                                    <div className="friendImgContainer">
                                        <img src={e.user.profile_image.small} alt="friend online" className="friendImg" style={{ width: "2rem", height: "2rem" }} />
                                        <span className="greenDot"></span>
                                    </div>
                                    <span className="friendName"> {e.user.first_name + "" + e.user.last_name}</span>
                                </div>
                            })}
                        </div>
                    </> :
                    <>
                        <h4 className='rightbarUserDetails' >User Details</h4>
                        <div className="rightbarUserinfo">
                            <div className="rightbarUserinfoItem">
                                <span className="rightbarUserinfoitemKey">Name : </span>
                                <span className="rightbarUserinfoValue">Prabhat</span>
                            </div>
                            <div className="rightbarUserinfoItem">
                                <span className="rightbarUserinfoitemKey">City : </span>
                                <span className="rightbarUserinfoValue">Haridwar</span>
                            </div>
                            <div className="rightbarUserinfoItem">
                                <span className="rightbarUserinfoitemKey">Belongs To  : </span>
                                <span className="rightbarUserinfoValue">Muzaffarnagar</span>
                            </div>
                        </div>
                        <h4 className='rightbarUserDetails' >Friends</h4>
                        <div className="rightbarUserFriends">
                            <div className="rightbarUserFriend">
                                <img className='friendsImage' src="https://images.unsplash.com/photo-1682685796766-0fddd3e480de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODI3ODJ8MXwxfGFsbHwxfHx8f" alt="" />
                                <span className="rightbarUserFriendName">Prabhat</span>
                            </div>
                            <div className="rightbarUserFriend">
                                <img className='friendsImage' src="https://images.unsplash.com/photo-1682685796766-0fddd3e480de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODI3ODJ8MXwxfGFsbHwxfHx8f" alt="" />
                                <span className="rightbarUserFriendName">Prabhat</span>
                            </div>
                            <div className="rightbarUserFriend">
                                <img className='friendsImage' src="https://images.unsplash.com/photo-1682685796766-0fddd3e480de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODI3ODJ8MXwxfGFsbHwxfHx8f" alt="" />
                                <span className="rightbarUserFriendName">Prabhat</span>
                            </div>
                            <div className="rightbarUserFriend">
                                <img className='friendsImage' src="https://images.unsplash.com/photo-1682685796766-0fddd3e480de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODI3ODJ8MXwxfGFsbHwxfHx8f" alt="" />
                                <span className="rightbarUserFriendName">Prabhat</span>
                            </div>
                        </div>
                        <hr className='rightHr' />
                        <div className="friendsOnlineComponent">
                            {props.data.map((e) => {
                                return <div className="friendOnline">
                                    <div className="friendImgContainer">
                                        <img src={e.user.profile_image.small} alt="friend online" className="friendImg" style={{ width: "2rem", height: "2rem" }} />
                                        <span className="greenDot"></span>
                                    </div>
                                    <span className="friendName"> {e.user.first_name + "" + e.user.last_name}</span>
                                </div>
                            })}
                        </div>
                    </>}
            </div>
        </div>
    )
}

export default Rightbar
