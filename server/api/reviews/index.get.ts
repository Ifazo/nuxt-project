import { Review } from "@prisma/client";
import prisma from "~/prisma";

export default defineEventHandler(async(event) => {
  const query = getQuery(event)

  const {id} = query as Review

  const reviews = await prisma.review.findMany({
    where: {
        productId: id
    }
  })

    return reviews
//   return { a: query.foo, b: query.baz }
})
