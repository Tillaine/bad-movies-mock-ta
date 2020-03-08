import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
  }
  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={this.props.handleGenreSelect}>
          {this.props.genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
          <option value="thatway">That Way</option>
        </select>
        <br/><br/>

        <button>Search</button>

      </div>
    );
  }
}

export default Search;