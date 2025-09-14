import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductsHeader from "./components/ProductsHeader";

const ProductPage = async ({ params }) => {
  const { slug, productId } = await params;
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    return notFound("Produto não encontrado");
  }

  return (
    <>
      <ProductsHeader product={product} />
    </>
  );
};

export default ProductPage;
