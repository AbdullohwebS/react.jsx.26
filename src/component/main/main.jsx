import "./Main.css";
import Product from "../product/Product";

export default function Main() {
  const products = [
    {
      title: "XX99 Mark II Headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio.",
      isNew: true,
      img: {
        desktop:
          "./src/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
        tablet:
          "./src/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
        mobile:
          "./src/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
      },
    },
    {
      title: "XX99 Mark I Headphones",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers superior audio.",
      isNew: false,
      img: {
        desktop:
          "./src/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
        tablet:
          "./src/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
        mobile:
          "./src/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
      },
    },
    {
      title: "XX59 Headphones",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes.",
      isNew: false,
      img: {
        desktop:
          "./src/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
        tablet:
          "./src/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg",
        mobile:
          "./src/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
      },
    },
  ];

  return (
    <main className="Main">
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          description={product.description}
          isNew={product.isNew}
          img={product.img}
          reverse={index === 1}
        />
      ))}

      <section className="categories-section">
        <div className="categories">
          <div className="category-card">
            <img
              src="./src/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt="Headphones"
            />
            <h3>HEADPHONES</h3>
            <a href="#">SHOP &rarr;</a>
          </div>
          <div className="category-card">
            <img
              src="./src/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt="Speakers"
            />
            <h3>SPEAKERS</h3>
            <div>
              <div>
                <a href="#">SHOP &rarr;</a>
              
              </div>
            </div>
          </div>
          <div className="category-card">
            <img
              src="./src/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt="Earphones"
            />
            <h3>EARPHONES</h3>
            <a href="#">SHOP &rarr;</a>
          </div>
        </div>

        <div className="gear-info">
          <div className="text">
            <h2>
              BRINGING YOU THE <span>BEST</span> AUDIO GEAR
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products.
            </p>
          </div>
          <div className="image">
            <img
              src="./src/assets/shared/desktop/image-best-gear.jpg"
              alt="Man with headphones"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
