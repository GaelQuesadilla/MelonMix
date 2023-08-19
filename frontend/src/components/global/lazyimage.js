import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const LazyImage = (props) => {
  const { className, src, alt, lazy_src, ...otherProps } = props;

  return (
    <LazyLoadImage
      className={className + ""}
      src={src}
      effect="blur"
      placeholderSrc={lazy_src}
      {...otherProps}
    />
  );
};
