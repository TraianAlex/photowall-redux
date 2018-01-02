// increment
export function increment(index) {
    return {
      type: 'INCREMENT_LIKES',
      index
    }
  }
  
  // add comment
  export function addPicture(pictureUrl, title) {
    return {
      type: 'ADD_PICTURE',
      pictureUrl,
      title
    }
  }


// add comment
export function addComment(postId, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    comment
  }
}
