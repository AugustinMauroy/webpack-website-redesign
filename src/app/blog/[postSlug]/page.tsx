import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { FC } from 'react';
import { BaseLayout } from '~/components/Layout/Base.tsx';
import { getContent, listMdxFilesRecursive } from '~/lib/content.ts';
import { compileMDX } from '~/lib/mdx';
import type { BlogFrontmatter } from '~/types/frontmatter.ts';

type PageProps = {
  params: Promise<{ postSlug: string }>;
};

export const generateStaticParams = async () => {
  const posts = await listMdxFilesRecursive(['blog']);

  return posts.map((post) => ({
    postSlug: post.replace(/\.mdx$/, ''),
  }));
};

const BlogPostPage: FC<PageProps> = async ({ params }) => {
  const { postSlug } = await params;

  const rawContent = await getContent(['blog', postSlug]);

  if (!rawContent) notFound();

  const { frontmatter, content } = await compileMDX<BlogFrontmatter>({
    source: rawContent,
    parseFrontmatter: true,
  });

  return (
    <BaseLayout>
      <h1 className="text-4xl font-bold">{`${frontmatter.title} (${frontmatter.date})`}</h1>
      <section className="mdx-content">{content}</section>
      <Link href="/blog" className="text-blue-600 hover:underline">
        Back to Blog
      </Link>
    </BaseLayout>
  );
};

export default BlogPostPage;
