import { eq } from 'drizzle-orm'
import { db } from '~/server/db/drizzle'
import { user } from '~/server/db/schema'

export default eventHandler(async event => {
  try {
    const currentUser = event.context.user
    if (!currentUser) {
      throw createError({
        statusCode: 401,
        message: 'You must be logged in to favorite listings',
      })
    }
    const id = getRouterParam(event, 'id')
    if (!id || typeof id !== 'string') {
      throw createError({
        statusCode: 400,
        message: 'Invalid ID',
      })
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])]
    if (!favoriteIds.includes(id)) {
      favoriteIds.push(id)
    }

    await db
      .update(user)
      .set({ favoriteIds })
      .where(eq(user.id, currentUser.id))
      .returning()

    return { statusCode: 201, message: 'Successfully added to favorites' }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Something went wrong',
    })
  }
})
