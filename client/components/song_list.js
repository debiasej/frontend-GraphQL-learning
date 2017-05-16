import React, { Component } from 'react';
import gpl from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li>
          {song.title}
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) { return <div>Loading...</div>; }

    return(
      <div>
        {this.renderSongs()}
      </div>
    );
  }
}

const query = gpl`
    {
      songs {
        title
      }
    }
`;

export default graphql(query)(SongList);
