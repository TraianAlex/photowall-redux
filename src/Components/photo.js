import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Photo extends Component {

  render() {
    console.log(this.props)
    const { post, i } = this.props; 
    return (
        <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/single/${post.id}`}>
            <img src={post.imageLink} alt={post.description} className="grid-photo" />
          </Link>
        </div>
        <figcaption>
          <p>{post.description}</p>
          <div className="control-buttons">
          <button className="Remove" onClick={() => this.props.removePicture(i)}>Remove</button>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Photo;