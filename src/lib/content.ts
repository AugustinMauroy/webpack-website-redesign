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
): Promise<(TFrontmatter & { slug: string })[]> => {
  const files = await getContentList(slug);

  if (!files) return [];

  return Promise.all(
    files.map(async (file) => {
      try {
        const content = await getContent([...slug, file]);
        if (!content) return null;

        const { frontmatter } = await compileMDX<TFrontmatter>({
          source: content,
          parseFrontmatter: true,
        });

        return { slug: file.replace(/\.mdx$/, ''), ...frontmatter };
      } catch {
        return null;
      }
    }),
  ).then((results) => results.filter((result) => result !== null));
};

/**
 * Recursively list all MDX files under a directory, returning paths relative to the base.
 * Example: ["guide/getting-started.mdx", "index.mdx"]
 */
export const listMdxFilesRecursive = async (
  slug: string[],
  baseDir: string | undefined = CONTENT_DIR,
): Promise<string[]> => {
  const base = path.join(baseDir, ...slug);

  const walk = async (
    currentDir: string,
    rel: string[] = [],
  ): Promise<string[]> => {
    const entries = await fs
      .readdir(currentDir, { withFileTypes: true })
      .catch(() => []);

    const files: string[] = [];

    for (const entry of entries) {
      if (entry.isDirectory()) {
        files.push(
          ...(await walk(path.join(currentDir, entry.name), [
            ...rel,
            entry.name,
          ])),
        );
      } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
        files.push([...rel, entry.name].join('/'));
      }
    }
    return files;
  };

  return walk(base);
};
