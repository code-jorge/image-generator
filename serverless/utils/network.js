const CORS_CONFIGURATION = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Credentials': true
}

const success = (body = {})=> {
  return {
    statusCode: 200,
    headers: CORS_CONFIGURATION,
    body: JSON.stringify(body)
  }
}

const clientError = (error = 'Invalid request')=> {
  return {
    statusCode: 400,
    headers: CORS_CONFIGURATION,
    body: JSON.stringify({ error })
  }
}

const serverError = (error = 'Unknown error')=> {
  return {
    statusCode: 500,
    headers: CORS_CONFIGURATION,
    body: JSON.stringify({ error })
  }
}

module.exports = {
  success,
  clientError,
  serverError
}