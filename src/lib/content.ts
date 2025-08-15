import fs from 'node:fs/promises';
import path from 'node:path';
import { compileMDX } from './mdx.ts';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export const getContent = async (slugs: string[]): Promise<string | null> => {
  const filePath = path.join(CONTENT_DIR.toString(), ...slugs);

  // if file not read return null
  return fs
    .readFile(filePath.endsWith('.mdx') ? filePath : `${filePath}.mdx`, 'utf-8')
    .catch(() => null);
};

export const getContentList = async (dir: string[]): Promise<string[]> => {
  const dirPath = path.join(CONTENT_DIR.toString(), ...dir);

  try {
    const files = await fs.readdir(dirPath);

    return files.filter((file) => file.endsWith('.mdx'));
  } catch {
    return [];
  }
};

export const getFrontMatter = async <TFrontmatter>(
  slug: string[],
): Promise<((TFrontmatter & { slug: string }) | null)[]> => {
  const files = await getContentList(slug);

  if (!files) return [];

  return Promise.all(
    files.map(async (file) => {
      const content = await getContent(['blog', file]);

      if (!content) return null;

      const { frontmatter } = await compileMDX<TFrontmatter>({
        source: content,
        parseFrontmatter: true,
      });

      return { slug: file.replace(/\.mdx$/, ''), ...frontmatter };
    }),
  );
};
