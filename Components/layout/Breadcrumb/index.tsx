import Link from "next/link";

const Breadcrumb = () => {
  return (
    <nav className="my-6 flex items-center gap-1 text-sm text-gray-600">
      <Link href="/" className="block transition hover:text-gray-700">
        Home
      </Link>

      <span>/</span>

      <Link href="/products" className="block transition hover:text-gray-700">
        Shop
      </Link>

      <span>/</span>

      <Link
        href="/shop/checkout"
        className="block transition hover:text-gray-700"
      >
        Checkout
      </Link>
    </nav>
  );
};

export default Breadcrumb;
