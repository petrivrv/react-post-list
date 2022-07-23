import React from 'react';
import './app.css';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

class App extends React.Component {
    state = {
        data : [
            {label:'Going to learn React', important: true, id:'we'},
            {label:'That is so good', important: false, id:'wer'},
            {label:'I need a break...', important: false , id:'wesd'}
        ]
    }

    deleteItem = (id) =>{
        this.setState( state => {
            const index = state.data.findIndex(elem=>elem.id===id)
            return{
                data:[...state.data.slice(0,index),...state.data.slice(index+1)]
            }
        } )
    }

    render(){
    
        return ( 
        <div className='app'>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data} 
                           onDelete ={this.deleteItem} />           
                <PostAddForm/>
        </div>
            
        )
    }
}
export default App;