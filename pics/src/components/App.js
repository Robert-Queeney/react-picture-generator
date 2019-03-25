import React from 'react'; 
import unsplash from '../api/unsplash'; 
import SearchBar from './SearchBar'; 
import ImageList from './ImageList.js'


class App extends React.Component {
    state = {images: [] }

    //callback function to get search term 
    //format for => func with async
    onSearchSubmit = async (term) => {
        //axios takes two args, first one is address and second one is customized search inputs
        const response = await unsplash.get('/search/photos', {
            params: {query: term}, // this will add query=term at end of api call
        });
        this.setState({ images: response.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App; 