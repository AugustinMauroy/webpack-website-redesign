import { notFound } from 'next/navigation';
import type { FC } from 'react';
import { BaseLayout } from '~/components/Layout/Base.tsx';
import { getContent } from '~/lib/content.ts';
import { compileMDX } from '~/lib/mdx';

type ContributingPageProps = {
  params: Promise<{
    slugs: string[];
  }>;
};

const ContributingPage: FC<ContributingPageProps> = async (props) => {
  const { slugs } = await props.params;

  const rawcontent = await getContent(['contributing', ...slugs]);

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

export default ContributingPage;
