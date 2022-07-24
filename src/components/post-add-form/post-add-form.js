import React from 'react';
import './post-add-form.css' 

const PostAddForm =(props) => {
    return (
        <div className='bottom-panel d-flex'>
            <input
                type='text'
                placeholder='О чем вы думаете сейчас'
                className='form-control new-post-label'
            />
            <button type='submit' className='btn btn-outline-secondary'
                    onClick={()=> props.onAddItem('dddd')}>
                Add
            </button>
        </div>
    )
}
export default PostAddForm;