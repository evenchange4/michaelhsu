// @flow
/** @jsx h */
import { h, Component } from 'ink';
import SelectInput from 'ink-select-input';
import openLink from './openLink';
import fetchPosts from './fetchPosts';
import format from './format';
import { type Item, type Post } from './type.flow';

const items: Array<Item> = [
  { label: 'Website', url: 'https://michaelhsu.tw' },
  { label: 'Twitter', url: 'https://twitter.com/evenchange4' },
  { label: 'GitHub', url: 'https://github.com/evenchange4' },
  { label: 'Blog', url: 'https://medium.com/@evenchange4/latest' },
  { label: 'Medium Latest Posts', action: fetchPosts },
  { label: 'Quit', action: () => process.exit() },
];

class App extends Component<*, { posts: Array<Post> }> {
  state = { posts: undefined };

  componentDidMount() {
    // Note: pre-fetch
    if (!this.cached) {
      fetchPosts().then(posts => {
        this.cached = posts;
      });
    }
  }

  onBack = () => this.setState({ posts: undefined });

  handleSelect = (item: Item) => {
    if (item.url) openLink(item.url);
    if (item.label === 'Medium Latest Posts') {
      if (this.cached) {
        this.setState({ posts: this.cached });
        return;
      }

      if (item.action) {
        item.action().then(posts => {
          this.setState({ posts });
          this.cached = posts;
        });
        return;
      }
    }
    if (item.action) item.action();
  };

  render() {
    const { posts } = this.state;
    const { handleSelect, onBack } = this;
    const selectedItems = posts
      ? [
          { label: 'Back', action: onBack },
          ...posts.map(({ title, url, firstPublishedAt }) => ({
            label: `[${format(firstPublishedAt)}] ${title}`,
            url,
          })),
        ]
      : items;

    return (
      <div>
        <div>
          I am a web developer and love to learn new things about front-end
          technology such as Javascript, react and functional reactive
          programming.
        </div>
        <br />
        <SelectInput items={selectedItems} onSelect={handleSelect} />
        <br />
      </div>
    );
  }
}

export default App;
