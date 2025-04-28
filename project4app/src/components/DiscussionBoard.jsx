import { useState, useEffect } from 'react';
import axios from 'axios';
import Tab from './Tab.jsx';
import Post from './Post.jsx';

function DiscussionBoard({ tabs, category }) {
  const [openDiscussion, setOpenDiscussion] = useState(tabs[0]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ topic: '', content: '' });

  // Fetch posts when tab changes
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://97561a5c-78a9-4951-b578-ba513320d705-00-zmtvbpaas1i0.picard.replit.dev/posts/${category}/${openDiscussion.toLowerCase()}`
        );
        setPosts(response.data);
      } catch (err) {
        console.error('Failed to fetch posts:', err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [category, openDiscussion]);

  // Handle new post submission
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const username = localStorage.getItem('username') || 'Anonymous';
    try {
      const response = await axios.post('https://97561a5c-78a9-4951-b578-ba513320d705-00-zmtvbpaas1i0.picard.replit.dev/posts', {
        category,
        tab: openDiscussion.toLowerCase(),
        author: username,
        topic: newPost.topic,
        content: newPost.content,
      });
      if (response.data.success) {
        // Refetch posts after creating a new one
        const updatedPosts = await axios.get(
          `https://97561a5c-78a9-4951-b578-ba513320d705-00-zmtvbpaas1i0.picard.replit.dev/posts/${category}/${openDiscussion.toLowerCase()}`
        );
        setPosts(updatedPosts.data);
        setNewPost({ topic: '', content: '' });
      } else {
        alert('Failed to create post');
      }
    } catch (err) {
      console.error('Post creation error:', err);
      alert('An error occurred while creating the post.');
    }
  };

  return (
    <section className="discussion-board">
      <nav className="tabs">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            isActive={openDiscussion === tab}
            onClick={() => setOpenDiscussion(tab)}
          />
        ))}
      </nav>
      <form onSubmit={handlePostSubmit} className="new-post-form">
        <input
          type="text"
          placeholder="Post Title"
          value={newPost.topic}
          onChange={(e) => setNewPost({ ...newPost, topic: e.target.value })}
          required
        />
        <textarea
          placeholder="Post Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          required
        />
        <button type="submit">Create Post</button>
      </form>
      <div className="display">
        {loading ? (
          <p>Loading...</p>
        ) : posts.length > 0 ? (
          posts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </section>
  );
}

export default DiscussionBoard;