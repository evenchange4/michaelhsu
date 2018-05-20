const { h, Component } = require('ink'); // eslint-disable-line
const SelectInput = require('ink-select-input'); // eslint-disable-line
const openLink = require('./utils/openLink');
const fetchPosts = require('./utils/fetchPosts');
const format = require('./utils/format');

const items = [
  { label: 'Website', url: 'https://michaelhsu.tw' },
  { label: 'Twitter', url: 'https://twitter.com/evenchange4' },
  { label: 'GitHub', url: 'https://github.com/evenchange4' },
  { label: 'Blog', url: 'https://medium.com/@evenchange4/latest' },
  { label: 'Medium Latest Posts', action: fetchPosts },
  { label: 'Quit', action: () => process.exit() },
];

class App extends Component {
  constructor() {
    super();
    this.state = { posts: undefined };
    this.handleSelect = this.handleSelect.bind(this);
    this.onBack = this.onBack.bind(this);
  }
  componentDidMount() {
    // Note: pre-fetch
    if (!this.cached) {
      fetchPosts().then(posts => {
        this.cached = posts;
      });
    }
  }
  handleSelect(item) {
    if (item.url) openLink(item.url);
    if (item.label === 'Medium Latest Posts') {
      if (this.cached) {
        this.setState({ posts: this.cached });
      } else {
        item.action().then(posts => {
          this.setState({ posts });
          this.cached = posts;
        });
      }
      return;
    }
    if (item.action) item.action();
  }
  onBack() {
    this.setState({ posts: undefined });
  }
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

module.exports = App;
