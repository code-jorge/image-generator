import { useState } from "react";
import { generateImage } from "../../utils/api";
import { ImageDetails } from "../../utils/types";
import css from "./Home.module.css";


const Home = () => {
  
  const [imageDetails, setImageDetails] = useState<ImageDetails>({});

  const handleChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageDetails({ ...imageDetails, [key]: e.target.value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(imageDetails);
    generateImage({ 
      prompt: imageDetails.prompt,
      negativePrompt: imageDetails.negativePrompt
    });
  }

  return (
    <main className={css.main}>
      <div className={css.content}>
        <div className={css.intro}>
          <h1 className={css.title}>
            <code>
              Draw the impossible thanks to the power of <span className={css.titleHighlight}>AI</span>
            </code>
          </h1>
        </div>
        <div className={css.images}>
          <img src="/images/carrousel-01.jpg" alt='' className={css.image} />
          <img src="/images/carrousel-02.jpg" alt='' className={css.image} />
          <img src="/images/carrousel-03.jpg" alt='' className={css.image} />
          <img src="/images/carrousel-04.jpg" alt='' className={css.image} />
        </div>
        <form className={css.form} onSubmit={handleSubmit}>
          <input 
            className={css.input}
            type="text" 
            placeholder="Dream big"
            value={imageDetails.prompt} 
            onChange={handleChange('prompt')}
            required
            minLength={3}
          />
          <button className={css.submit} type="submit">
            <code className={css.submitSmall}>Go</code>
            <code className={css.submitLarge}>Generate image</code>
          </button>
        </form>
      </div>
    </main>
  )
}

export default Home