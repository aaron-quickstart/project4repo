function Comment({ comment }) {
    return (
      <div className="comment">
        <p><strong>{comment.author}</strong>: {comment.content}</p>
      </div>
    );
  }
  
  export default Comment;