import { ResponseComposition, RestContext, RestRequest } from 'msw'
import { ErrorApiResponse, SuccessApiResponse } from 'next-api-handler'

const EMPTY_VALUES = [undefined, null, '']

export const generateResponseResolver =
  <T>(data: T) =>
  (
    req: RestRequest,
    res: ResponseComposition<SuccessApiResponse<T> | ErrorApiResponse>,
    ctx: RestContext
  ) => {
    for (const paramKey of Object.keys(req.params)) {
      const paramValue = req.params[paramKey]
      if (EMPTY_VALUES.some((value) => value === paramValue)) {
        console.error('Incoming empty keys', paramKey, '=', paramValue)

        return res(
          ctx.status(400),
          ctx.json({ success: false, message: '[MSW]: Incoming empty keys' })
        )
      }
    }

    return res(ctx.json({ success: true, data }))
  }
