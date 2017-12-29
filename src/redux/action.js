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
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment

export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId
  }
}
