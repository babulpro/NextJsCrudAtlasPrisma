import React from 'react';
import Post from './post';

const PostList = ({posts}) => {
    return (
        <div>
           {
            posts.map((value,index)=>{
                return(
                    <Post key={value.id} post={value}/>
                )
            })
           }
            
        </div>
    );
};

export default PostList;