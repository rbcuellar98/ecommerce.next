import Stripe from "stripe";
import Product from "./components/Product";

const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });

  const products = await stripe.products.list();
  // after fetching all successfully the promise is resolved
  const productWithPrices = await Promise.all(
    // fetch all the prices based on the product id
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id });
      return {
        // to pull information from the product
        id: product.id,
        name: product.name,
        price: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        metadata: product.metadata.features,
      };
    })
  );
  return productWithPrices;
};

export default async function Home() {
  const products = await getProducts();
  return (
    <main>
      {products.map((product) => (
        <Product {...product}/>
      ))}
    </main>
  );
}
