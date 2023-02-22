const { getImages } = require('../utils/replicate');
const network = require('../utils/network');

const generateImage = async ({ prompt, negativePrompt })=> {
  const { id } = await getImages({ prompt, negativePrompt });
  return id;
}

exports.handler = async (event)=> {

  // Allow OPTIONS HTTP request - no questions asked
  if (event.httpMethod === 'OPTIONS') return network.success();

  // Check the prompt is valid (all other params are optional)
  const { prompt, negativePrompt='' } = JSON.parse(event.body);
  if (!prompt) return network.clientError("A prompt is required to generate an image");

  // Request replicate to generate an image - this is an async process, we get an id to track it
  const id = await generateImage({ prompt, negativePrompt });

  // Return the id back to the client
  return network.success({ id });
  
}