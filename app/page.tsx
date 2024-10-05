import Button from '../components/button';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">
        Welcome to Tailwind with Next.js!
      </h1>
      <Button />
    </div>
  );
}