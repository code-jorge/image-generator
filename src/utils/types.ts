export interface ImageDetails {
  prompt?: string
  negativePrompt?: string
};

export interface ImageResult {
  status?: 'starting' | 'processing' | 'succeeded' | 'failed' | 'cancelled'
  error?: string | null
  output?: string[] | null
};