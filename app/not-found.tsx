import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col">
      <Container className="flex flex-1 flex-col items-center justify-center py-24 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-muted">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="button button--secondary mt-10"
        >
          Back to homepage
        </Link>
      </Container>
    </main>
  );
}
