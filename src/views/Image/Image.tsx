import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImageResult } from "../../utils/api";
import { ImageResult } from "../../utils/types";
import css from "./Image.module.css";

const ReplicateLink = ({ id }: { id?: string }) => (
  <a
    className={css.link}
    href={id ? `https://replicate.com/p/${id}` : 'https://replicate.com'}
    target='_blank'
    rel='noreferrer'
  >
    replicate
  </a>
);

const Gallery = ({ prompt, images=[] }: { prompt?: string, images?: string[] }) => {

  const handleDownload = () => {
    const link = document.createElement("a");
    fetch(images[0])
      .then(res => res.blob())
      .then(blob => URL.createObjectURL(blob))
      .then(url=> {
        link.href = url;
        link.download = prompt ? `${prompt.replaceAll(' ', '-')}.png` : 'generated-image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

  const promptSize = prompt?.length || 0;
  const titleSize = promptSize > 60 ? 'small' : 'large';

  return (
    <div className={css.gallery}>
      <h1 className={css.title} data-size={titleSize}>
        <code>
          🎨 Here is {' '}
          <span className={css.titleHighlight}>
            {prompt || 'your image'}
          </span>.
        </code>
      </h1>
      <div className={css.gallery}>
        {images.map((image, index) => (
          <img 
            key={index}
            className={css.image} 
            src={image} 
            alt='' 
          />
        ))}
      </div>
      <button 
        className={css.button} 
        onClick={handleDownload}
        type="button"
      >
        <svg 
          className={css.icon}
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <code>
          Download
        </code>
      </button>
    </div>
  );
};

const Image = ()=> {

  const { id } = useParams();

  const [imageResult, setImageResult] = useState<ImageResult>({});

  useEffect(() => {
    if (!id) return;
    getImageResult({ id }).then(setImageResult);
  }, [id]);

  const { status, input, output } = imageResult;

  const { prompt } = input || {};

  return (
    <main className={css.main}>
      {status !== 'succeeded' && (
        <div className={css.error}>
          <code className={css.errorText}>
            Something didn't go quite right. 
            <br />
            Check in <ReplicateLink id={id} /> to see the details about this image.
          </code>
        </div> 
      )}
      {status === 'succeeded' && (
        <Gallery prompt={prompt} images={output || []} />
      )}
    </main>
  );
};

export default Image;