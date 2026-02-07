import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Let CSS handle the styling via .article-content
    ...components,
  };
}
