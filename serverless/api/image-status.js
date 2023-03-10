const { getImageResult } = require('../utils/replicate');
const network = require('../utils/network');

const checkImageResult = async ({ id })=> {
  const { status, error, input, output } = await getImageResult({ id });
  return { status, error, input, output };
}

exports.handler = async (event)=> {

  // Get the id of the image generation from the query
  const { id } = event.queryStringParameters;
  if (!id) return network.clientError("The status id is required");

  // Request replicate info on the image generation
  const { status, error, input, output } = await checkImageResult({ id });

  // Return the id back to the client
  return network.success({ status, error, input, output });
  
}