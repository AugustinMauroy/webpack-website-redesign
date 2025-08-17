import { RssIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { FC } from 'react';
import { Button } from '~/components/Common/Button.tsx';
import { BaseLayout } from '~/components/Layout/Base.tsx';
import { getFrontMatter } from '~/lib/content.ts';
import type { BlogFrontmatter } from '~/types/frontmatter.ts';

const BlogPage: FC = async () => {
  const metaData = await getFrontMatter<BlogFrontmatter>(['blog']);

  return (
    <BaseLayout>
      <header className="relative mb-8">
        <h1 className="text-4xl font-bold">Blog Posts</h1>
        <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
          The latest Webpack news, case studies, tutorials, and resources.
        </p>
        <Button asChild className="absolute right-0 top-0">
          <Link href="/blog/rss.xml">
            <RssIcon className="size-6" aria-label="RSS Feed" />
          </Link>
        </Button>
      </header>
      <section className="space-y-6 divide-y divide-gray-200 dark:divide-gray-700">
        {metaData.map((post) => (
          <article key={post.slug}>
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {post.date}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              Read more
            </Link>
          </article>
        ))}
      </section>
    </BaseLayout>
  );
};

export default BlogPage;
