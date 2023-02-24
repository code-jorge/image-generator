export interface ImageDetails {
  prompt?: string
  negativePrompt?: string
}

export interface ImageResult {
  status?: string
  error?: string
  output?: string[]
}