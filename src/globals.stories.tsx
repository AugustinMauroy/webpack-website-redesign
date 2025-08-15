import type { Meta, StoryObj } from '@storybook/react';

export default { title: 'Content/MDX Content' } as Meta;

export const Default: StoryObj = {
  render: () => (
    <div className="p-8">
      <div className="mdx-content">
        <h1 id="welcome">
          <a href="#welcome">Welcome to MDX content</a>
        </h1>

        <p>
          This is a paragraph with some inline <code>code</code> and a{' '}
          <a href="#link">link</a>.
        </p>

        <h2 id="headings">
          <a href="#headings">Headings with anchors</a>
        </h2>

        <p>
          Lists, tables, details and other Markdown-generated elements should
          look correct:
        </p>

        <ul>
          <li>First item</li>
          <li>
            Second item with <code>inline code</code>
          </li>
        </ul>

        <ol>
          <li>First ordered</li>
          <li>Second ordered</li>
        </ol>

        <table>
          <thead>
            <tr>
              <th>Column A</th>
              <th>Column B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
            </tr>
          </tbody>
        </table>

        <details>
          <summary>Expandable details</summary>
          <p>Hidden content revealed when open.</p>
        </details>

        <blockquote>
          <p>This is a blockquote demonstrating the custom styles.</p>
          <cite>Author Name</cite>
        </blockquote>

        <hr />

        <pre>
          <code>{`// code block should keep pre formatting
function greet() {
  return 'hello';
}`}</code>
        </pre>
      </div>
    </div>
  ),
};
