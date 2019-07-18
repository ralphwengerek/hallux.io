import mongoose from 'mongoose';

const seedDatabase = () => {
  const Post = mongoose.model('Post');
  Post
    .estimatedDocumentCount()
    .then((count) => {
      if (count < 1) {
        for (let i = 0; i < 10; i += 1) {
          const newPost = new Post({
            title: `Title ${i}`,
            summary: `Summary ${i}`,
            image: `image ${i}`,
            state: 'draft',
            filename: `filename_${i}`,
          });
          newPost.save();
        }
      }
    })
    .catch((err) => {
      console.log('Error seeding database:', err);
    });
};

export default seedDatabase;
