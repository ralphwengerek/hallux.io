/* eslint-disable */
import mongoose from 'mongoose';
import faker from 'faker';

const seedDatabase = () => {
  const Post = mongoose.model('Post');

  Post
    .estimatedDocumentCount()
    .then((count) => {
      if (count < 1) {
        const tags = ['React', 'Javascript', 'Node.js', 'Animation', 'MongoDB'];

        for (let i = 0; i < 10; i += 1) {
          const newPost = new Post({
            title: faker.lorem.words(),
            summary: faker.lorem.sentences(4),
            image: faker.image.imageUrl(),
            content: faker.lorem.sentences(40),
            state: 'draft',
            likes: faker.random.number(),
            tags,
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
