import React, { Component } from 'react';

class Photo extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const postId  = this.props.match.params.id
        const comment = this.refs.comment.value;
        this.props.addComment(postId, comment);
        this.refs.commentForm.reset();
    }

  render() {
    return (
        <div className= "comment">
        {this.props.postComments.map((comment) => {
            return (
                <p>
                {comment.text}
                </p>
            )
        }
    )}
    <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
    <input type="text" ref="comment" placeholder="comment"/>
    <input type="submit" hidden />
    </form>
    </div>
    );
  }
}

export default Photo;