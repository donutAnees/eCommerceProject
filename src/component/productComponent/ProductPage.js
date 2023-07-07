import { useState } from "react";
import ProductImageList from "./ProductImageList";
import styles from "./ProductPage.module.css";
import ProductContent from "./ProductContent";
export default function ProductPage(props) {
  const [currentImage, setCurrentImage] = useState(props.images[0].url);

  const changeCurrentImageHandler = (index) => {
    setCurrentImage(props.images[index].url);
  };

  return (
    <div className={styles.product_container}>
      <div className={styles.left_column}>
        <div className={styles.product_images_container}>
          <ProductImageList
            images={props.images}
            onChangeCurrentImage={changeCurrentImageHandler}
          />
        </div>
        <div className={styles.product_main_image}>
          <img src={currentImage} alt="" />
        </div>
      </div>
      <div className={styles.right_column}>
        <ProductContent
          id={props.id}
          title={props.title}
          description={props.description}
          price={props.price}
          more_description={props.more_description}
        />
      </div>
    </div>
  );
}
