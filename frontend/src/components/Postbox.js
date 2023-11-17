import React from "react";
import './Postbox.css';
// import { Avatar, Button } from "@material-ui/core";

function Postbox() {
    return (
        <div className="postbox">
            <form>
                <div className="postbox__input">
                <img src="https://pbs.twimg.com/profile_images/1572162185274728451/6-2maNUg_400x400.jpg" alt="userImage"
                style={{height:'50px', borderRadius:'999px'}}></img>
                <input
                    // onChange={(e) => setTweetMessage(e.target.value)}
                    // value={tweetMessage}
                    placeholder="What's on your mind?"
                    type="text"
                />
                </div>
                
                {/* <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="postbox__imageInput"
                placeholder="Optional: Enter image URL"
                type="text"
                /> */}

                <button
                // onClick={sendTweet}
                type="submit"
                className="postButton"
                >
                <span>Post</span>
                </button>
            </form>
        </div>
    )
}

export default Postbox;