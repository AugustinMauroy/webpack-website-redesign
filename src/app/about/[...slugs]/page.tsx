import { notFound } from 'next/navigation';
import type { FC } from 'react';
import { BrandingSample } from '~/components/Common/BrandingSample.tsx';
import { BaseLayout } from '~/components/Layout/Base.tsx';
import { getContent } from '~/lib/content.ts';
import { compileMDX } from '~/lib/mdx.ts';
import type { AboutFrontmatter } from '~/types/frontmatter';

type AboutPageProps = {
  params: Promise<{
    slugs: string[];
  }>;
};

const AboutPage: FC<AboutPageProps> = async (props) => {
  const { slugs } = await props.params;

  const rawcontent = await getContent(['about', ...slugs]);

  if (!rawcontent) notFound();

  const { content, frontmatter } = await compileMDX<AboutFrontmatter>({
    source: rawcontent,
    components: {
      BrandingSample,
    },
    parseFrontmatter: true,
  });

  return (
    <BaseLayout>
      <section className="mdx-content">
        <h1>{frontmatter.title}</h1>
        {content}
      </section>
    </BaseLayout>
  );
};

export default AboutPage;
