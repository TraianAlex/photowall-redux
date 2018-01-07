import React, { Component } from 'react';
import serializeForm from 'form-serialize'

class Photo extends Component {
    handleSubmit= (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true })      
        const postId  = this.props.match.params.id
        const commentId = Number(new Date()).toString();
        const comment = values.comment;
        this.props.addComment(postId, commentId, comment);
        this.refs.commentForm.reset();
    }

    getComment(comment) {
        var key = Object.keys(comment)[0];
        console.log(comment[key])      
        return comment[key]  
    }

  render() {
    return (
        <div className= "comment">
        {console.log(this.props.postComments)}
        {this.props.postComments.map((comment, i) => {
            return (
                <p key={i}>
                {this.getComment(comment)}
                </p>
            )
        }
    )}
    <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
    <input type="text" name="comment" placeholder="comment"/>
    <input type="submit" hidden />
    </form>
    </div>
    );
  }
}

export default Photo;