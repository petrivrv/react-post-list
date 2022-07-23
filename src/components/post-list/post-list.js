import React from 'react';
import './post-list.css'
import PostListItem from '../post-list-item/post-list-item'; 

const PostList =(props) => {
    const elem = props.posts.map( item => {
        return (
            <li key={item.id} className='list-group-item'>
                <PostListItem label={item.label} 
                    important={item.important}
                    onDelete={()=>props.onDelete(item.id)} />
            </li>
        )
    })
    return (
        <ul className='app-list list-group'>
            {elem /*array posts*/ } 
        </ul>
    )
}
export default PostList;