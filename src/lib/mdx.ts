import type { MDXProvider } from '@mdx-js/react';
import { compileMDX as _compileMDX } from 'next-mdx-remote/rsc';
import type { ComponentProps } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const defaultMdxComponents = {};

type Components = ComponentProps<typeof MDXProvider>['components'];

type CompileMDXProps = {
  source: string;
  components?: Components;
  parseFrontmatter?: boolean;
};

export const compileMDX = async <TFrontmatter>({
  source,
  components,
  parseFrontmatter = false,
}: CompileMDXProps) =>
  _compileMDX<TFrontmatter>({
    components: {
      ...defaultMdxComponents,
      ...components,
    },
    options: {
      mdxOptions: {
        rehypePlugins: [
          // Generates `id` attributes for headings (H1, ...)
          rehypeSlug,
          // Automatically add anchor links to headings (H1, ...)
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
      },
      parseFrontmatter,
    },
    source,
  });
