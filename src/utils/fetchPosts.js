// @flow
import { request } from 'graphql-request';
import { type Post } from './type.flow';

const fetchPosts = async (): Promise<Array<Post>> => {
  const { posts } = await request(
    'https://micro-medium-api.now.sh/graphql',
    `query PostQuery($username: String!, $limit: Int) {
      posts(username: $username, limit: $limit) {
        title
        url
        firstPublishedAt
      }
    }
    `,
    {
      username: 'evenchange4',
      limit: 10,
    },
  );
  return posts;
};

export default fetchPosts;
