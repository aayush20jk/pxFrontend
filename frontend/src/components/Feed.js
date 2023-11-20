import React from 'react';
import './Feed.css';
import Postbox from './Postbox';
import Whatstrending from './Whatstreding';

function Feed() {
  return (
    <div className='feed'>
        {/*postbox*/}
        <div style={{position: 'fixed', background:'white'}}>
            <Postbox />
        </div>

        {/*posts*/}
        <div className="trending-container">
          <div className="trending-list"><Whatstrending/></div>
        </div>
        

    </div>
  )
}

export default Feed