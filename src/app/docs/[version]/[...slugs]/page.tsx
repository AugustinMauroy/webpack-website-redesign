import { notFound } from 'next/navigation';
import type { FC } from 'react';
import { BaseLayout } from '~/components/Layout/Base';
import { getContent } from '~/lib/content';
import { compileMDX } from '~/lib/mdx';

type DocsPageProps = {
  params: Promise<{
    version: string;
    slugs: string[];
  }>;
};

const DocsPage: FC<DocsPageProps> = async (props) => {
  const { version, slugs } = await props.params;

  const rawcontent = await getContent(['docs', version, ...slugs]);

  if (!rawcontent) notFound();

  const { content } = await compileMDX({
    source: rawcontent,
  });

  return (
    <BaseLayout>
      <section className="mdx-content">{content}</section>
    </BaseLayout>
  );
};

export default DocsPage;
