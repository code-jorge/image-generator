import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImageResult } from "../../utils/api";
import { ImageResult } from "../../utils/types";
import css from "./Image.module.css";

const Gallery = ({ images=[] }: { images?: string[] }) => (
  <div className={css.gallery}>
    {images.map((image, index) => (
      <img src={image} alt='' className={css.image} key={index} />
    ))}
  </div>
);


const Image = ()=> {

  const { id } = useParams();

  const [imageResult, setImageResult] = useState<ImageResult>({});

  useEffect(() => {
    if (!id) return;
    getImageResult({ id }).then(setImageResult);
  }, [id]);

  return (
    <main className={css.main}>
      {imageResult.status === 'succeeded' && (
        <Gallery images={imageResult.output || []} />
      )}
    </main>
  );
};

export default Image;