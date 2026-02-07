export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}
