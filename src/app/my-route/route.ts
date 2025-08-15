import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (_request: Request) => {
  const _payload = await getPayload({
    config: configPromise,
  })

  // Example: You could use payload here to query collections
  // const users = await payload.find({ collection: 'users' })

  return Response.json({
    message: 'This is an example of a custom route.',
    timestamp: new Date().toISOString(),
  })
}
