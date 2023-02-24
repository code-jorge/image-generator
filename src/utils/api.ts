import { ImageDetails, ImageResult } from "./types"

export const generateImage = ({ prompt, negativePrompt='' }: ImageDetails)=> {
  const url = '/api/generate-image'
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt, negativePrompt })
  })
  .then(async res => {
    if (res.status === 200) return res
    const { error } = await res.json()
    return Promise.reject({ status: res.status, error })
  })
  .then(res => res.json())
}

export const getImageResult = ({ id }: { id: string }): Promise<ImageResult>=> {
  const url = `/api/image-status?id=${id}`
  return fetch(url)
  .then(async res => {
    if (res.status === 200) return res
    const { error } = await res.json()
    return Promise.reject({ status: res.status, error })
  })
  .then(res => res.json())
}