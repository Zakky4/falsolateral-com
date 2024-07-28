// export type News = {
//   title: string;
//   description: string;
//   content: string;
//   category: {
//     name: string;
//   };
//   publishedAt: string;
//   createdAt: string;
//   thumbnail?: MicroCMSImage;
//   category: Category;
// };

export type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};
