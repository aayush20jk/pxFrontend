import React from 'react';
import './Feed.css';
import Postbox from './Postbox'

function Feed() {
  return (
    <div className='feed'>
        {/*header*/}
        <div className="feed_header">
            <h2 style={{color:'rgb(94, 50, 182)'}}>Your Feed</h2>
        </div>

        {/*posts box*/}
        <Postbox />

        {/*posts*/}
        

    </div>
  )
}

export default Feed