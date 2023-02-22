import { useState } from "react"
import { generateImage } from "../../utils/api";

interface ImageDetails {
  prompt?: string
  negativePrompt?: string
}

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
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={imageDetails.prompt} 
          onChange={handleChange('prompt')}
          required
          minLength={3}
        />
        <input 
          type="text" 
          value={imageDetails.negativePrompt} 
          onChange={handleChange('negativePrompt')}
          required
          minLength={3}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Home