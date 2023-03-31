import { RouterBuilder } from 'next-api-handler'

const router = new RouterBuilder()

router.get<Local.HelloApi>(() => ({ name: 'John Doe', timestamp: Date.now() }))

export default router.build()
