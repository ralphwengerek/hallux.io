import React from 'react';
import posts from '../../data/posts.json';
import PostSummary from '../../components/Post/PostSummary';

const Home = () => (
  <div>
    <h1>Hello WORLD</h1>
    <hr />
    { posts.map(({
      id, title, image, publishDate, tags, summary,
    }) => (
      <PostSummary
        key={id}
        title={title}
        image={image}
        publishDate={publishDate}
        summary={summary}
        tags={tags}
      />
    ))}

  </div>
);

export default Home;
