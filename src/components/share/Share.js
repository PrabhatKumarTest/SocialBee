import './Share.css'
import {UilImages , UilLabel, UilLocationPoint,UilGrinTongueWinkAlt  } from '@iconscout/react-unicons'

const Share = () => {
    return (
        <div className='shareContainer'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="assets/person/1.jpg" alt="person1image" className="shareProfileImg" />
                    <input type="text" placeholder="What is in your mind?" className="shareInput" />
                    </div>
                    <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareoption">
                            <UilImages  className = "shareIcon" style = {{color : "tomato"}}/>
                            <span  className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareoption">
                            <UilLabel className = "shareIcon"  style = {{color : "blue", transform: "rotate(90deg)"}} />
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareoption">
                            <UilLocationPoint  className = "shareIcon" style = {{color : "green"}}/>
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareoption">
                            <UilGrinTongueWinkAlt  className = "shareIcon" style = {{color : "#D19A55"}} />
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Share
