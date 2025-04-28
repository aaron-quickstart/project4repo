import { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment.jsx';

function Post({ post }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loadingComments, setLoadingComments] = useState(true);

  // Fetch comments for this post
  useEffect(() => {
    const fetchComments = async () => {
      setLoadingComments(true);
      try {
        const response = await axios.get(`https://97561a5c-78a9-4951-b578-ba513320d705-00-zmtvbpaas1i0.picard.replit.dev/comments/${post.id}`);
        setComments(response.data);
      } catch (err) {
        console.error('Failed to fetch comments:', err);
        setComments([]);
      } finally {
        setLoadingComments(false);
      }
    };
    fetchComments();
  }, [post.id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const username = localStorage.getItem('username') || 'Anonymous';
    try {
      const response = await axios.post('https://97561a5c-78a9-4951-b578-ba513320d705-00-zmtvbpaas1i0.picard.replit.dev/comments', {
        post_id: post.id,
        author: username,
        content: newComment,
      });
      if (response.data.success) {
        setComments([...comments, { id: response.data.commentId, author: username, content: newComment }]);
        setNewComment('');
      } else {
        alert('Failed to add comment');
      }
    } catch (err) {
      console.error('Comment submission error:', err);
      alert('An error occurred while adding the comment.');
    }
  };

  return (
    <article className="post">
      <h3>{post.topic}</h3>
      <p><strong>{post.author}</strong>: {post.content}</p>
      <div className="comments">
        {loadingComments ? (
          <p>Loading comments...</p>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Comment</button>
      </form>
    </article>
  );
}

export default Post;