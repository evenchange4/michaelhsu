// @flow

export type Post = {
  url: string,
  title: string,
  firstPublishedAt: number,
};

export type Item = {
  label: string,
  url?: string,
  action?: () => any | Promise<any>,
};
