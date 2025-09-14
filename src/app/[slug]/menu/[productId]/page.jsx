import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductsHeader from "./components/ProductsHeader";
import ProductDetails from "./components/ProductDetails";

const ProductPage = async ({ params }) => {
  const { slug, productId } = await params;
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      restaurant: {
        select: {
          name: true,
          avatarImageUrl: true,
          slug: true,
        },
      },
    },
  });
  if (!product) {
    return notFound("Produto não encontrado");
  }

  if (product.restaurant.slug.toUpperCase() !== slug.toUpperCase()) {
    return notFound();
  }

  return (
    <>
      <ProductsHeader product={product} />
      <ProductDetails product={product} restaurant={product.restaurant} />
    </>
  );
};

export default ProductPage;
