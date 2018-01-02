import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Photo extends Component {
  render() {
    const { post, i, comments } = this.props; 
    return (
        <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/single/${post.id}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo" />
          </Link>
        </div>
        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button onClick={() => this.props.increment(i)} className="likes">&hearts; {post.likes}</button>
            <Link className="button" to={`/single/${post.id}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
             {this.props.comments[post.id] ? this.props.comments[post.id].length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Photo;