import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
      <p className="text-xl mb-8">
        Discover amazing products and unbeatable deals at your fingertips.
      </p>
      <div className="mb-12">
        <Link to="/store" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </Link>
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae
          tincidunt nisl nunc euismod nunc.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
    </div>
  )
}