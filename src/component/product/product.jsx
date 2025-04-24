import Button from "../Button/Button";
import "./product.css";

export default function product({ title, description, isNew, img, mobile, tablet }) {
  return (
    <div>
      <picture>
        <source media="(max-width: 376px)" srcSet={mobile} />
        <source media="(max-width: 769px)" srcSet={tablet} />
        <img src={img} alt={title} width={540} height={560} />
      </picture>

      <div>
        {isNew && <span>NEW PRODUCT</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        <Button text="See Product" />
      </div>
    </div>
  );
}
