import { BaseLayout } from '~/components/Layout/Base';

export default function NotFoundPage() {
  return (
    <BaseLayout>
      <h1 className="text-4xl font-bold text-center">404 - Page Not Found</h1>
      <p className="mt-4 text-center">
        Sorry, the page you are looking for does not exist.
      </p>
    </BaseLayout>
  );
}
