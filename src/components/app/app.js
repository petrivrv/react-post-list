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
            {label:'Going to learn React', important: true, id:1 },
            {label:'That is so good', important: false, id:2 },
            {label:'I need a break...', important: false , id:3 }
        ]
    }
    maxId = 5

    deleteItem = (id) =>{
        this.setState( state => {
            const index = state.data.findIndex(elem=>elem.id===id)
            return{
                data:[...state.data.slice(0,index),...state.data.slice(index+1)]
            }
        } )
    }
    addItem = (body) =>{
        const newItem ={
            label:body,
            important: false,
            id: ++this.maxId
        }
        this.setState( (state) => {
            return{
                data:[...state.data, newItem]
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
                <PostAddForm onAddItem ={this.addItem} />
        </div>
            
        )
    }
}
export default App;