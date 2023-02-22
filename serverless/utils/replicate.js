const https = require('https');

const REPLICATE_API_URL = 'https://api.replicate.com/v1/predictions';

const STABLE_DIFFUSION_VERSION = 'db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf';

const getImages = async ({ 
  prompt='', 
  negativePrompt='',
  images=1,
  steps=50,
  guidance=7.5,
  scheduler='DPMSolverMultistep',
})=> {

  const { host, pathname } = new URL(REPLICATE_API_URL);

  const body = JSON.stringify({
    version: STABLE_DIFFUSION_VERSION,
    input: {
      prompt,
      negative_prompt: negativePrompt,
      num_outputs: images,
      num_inference_steps: steps,
      guidance_scale: guidance,
      scheduler,
    }
  });

  const options = {
    hostname: host,
    port: 443,
    path: pathname,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body),
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
    }
  };

  return new Promise((resolve, reject)=> {
    const req = https.request(options, res=> {
      let data = '';
      res.on('data', chunk=> data += chunk);
      res.on('end', ()=> resolve(JSON.parse(data)));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });

}

const getImageResult = async ({ id })=> {
  const { host, pathname } = new URL(REPLICATE_API_URL);
  const options = {
    hostname: host,
    port: 443,
    path: `${pathname}/${id}`,
    method: 'GET',
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
    }
  };
  return new Promise((resolve, reject)=> {
    const req = https.request(options, res=> {
      let data = '';
      res.on('data', chunk=> data += chunk);
      res.on('end', ()=> resolve(JSON.parse(data)));
    });
    req.on('error', reject);
    req.end();
  });
}

module.exports = {
  getImages,
  getImageResult,
}