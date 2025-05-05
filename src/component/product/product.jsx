import "./Product.css";
import Button from "../Button/Button";

export default function Product({
  title,
  description,
  isNew,
  img: { desktop, tablet, mobile },
  reverse = false, // <== yangi props qo‘shildi
}) {
  return (
    <div className="Container">
      {/* reverse bo‘lsa, qo‘shimcha class qo‘shiladi */}
      <div className={`Product ${reverse ? "Product--reverse" : ""}`}>
        <picture>
          <source media="(max-width: 375px)" srcSet={mobile} />
          <source media="(max-width: 768px)" srcSet={tablet} />
          <img src={desktop} alt={title} width={540} height={560} />
        </picture>

        <div className="Product__info">
          <div className="Product__content">
            {isNew && <span>NEW PRODUCT</span>}
            <h3>{title}</h3>
            <p>{description}</p>
            <Button text="See Product" />
          </div>
        </div>
      </div>
    
    </div>
  );
}
