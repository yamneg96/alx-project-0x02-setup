import Header from '../components/layout/Header';
import Button from '../components/common/Button';

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">About</h1>
        <div className="space-y-4">
          <div className="space-x-4">
            <Button size="small" shape="rounded-sm">
              Small Button
            </Button>
            <Button size="medium" shape="rounded-md">
              Medium Button
            </Button>
            <Button size="large" shape="rounded-full">
              Large Button
            </Button>
          </div>
          <p className="mt-8 text-gray-600">
            This page demonstrates the different sizes and shapes of our Button component.
            The buttons above show various combinations of sizes (small, medium, large)
            and shapes (rounded-sm, rounded-md, rounded-full).
          </p>
        </div>
      </main>
    </div>
  );
};

export default About; 