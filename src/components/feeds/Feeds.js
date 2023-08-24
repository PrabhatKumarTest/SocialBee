import './Feeds.css'
import Share from '../share/Share';
import Post from '../post/Post';


const Feeds = (props) => {
    return (props.data &&
        <div className="feedsContainer">
            <div className="feedsWrapper">
                <Share data = {props}/>
                {props.data.map((e) => { // eslint-disable-next-line
                    return <Post key = {e.id} likes = {e.likes} img = {e.urls.regular} caption = {e.alt_description} date = {e.created_at.slice(0,10)+" at "+e.created_at.slice(11,16)} profileImg = {e.user.profile_image.small} userName = {e.user.first_name? e.user.first_name: "" +""+ e.user.last_name ? e.user.last_name : ""}/> 
                })}
            </div>
        </div>
    )
}

export default Feeds
