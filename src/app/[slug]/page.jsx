import ConsumptionMethodOption from "@/components/ConsumptionMethodOption";
import { db } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

const RastaurantPage = async ({ params }) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant?.name}
          width={82}
          height={82}
        />
        <h2 className="text-center text-2xl font-semibold">
          {restaurant?.name}
        </h2>
      </div>
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOption
          imageUrl="/dane_in.png"
          imageAlt="Para comer aqui"
          buttonText="Para comer aqui"
          option="DINE_IN"
          slug={slug}
        />
        <ConsumptionMethodOption
          imageUrl="/takeaway.png"
          imageAlt="Para levar"
          buttonText="Para levar"
          option="TAKEOUT"
          slug={slug}
        />
        <ConsumptionMethodOption
          imageUrl="/deliver.png"
          imageAlt="Para entregar"
          buttonText="Para entregar"
          option="DELIVER"
          slug={slug}
        />
      </div>
    </div>
  );
};

export default RastaurantPage;
