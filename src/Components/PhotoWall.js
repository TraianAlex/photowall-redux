import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Photo from './photo'


class PhotoWall extends Component {
  render() {
    return (
      <div className="photo-grid">
      {console.log(this.props)}
        {this.props.someProp.posts.map((post, i) => {
          return <Photo key={i} post={post} i={i} {...this.props}/>
        })}
      </div>
    );
  }
}

export default PhotoWall;
