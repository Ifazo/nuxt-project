import prisma from "~/prisma";

export default defineEventHandler(async (event) => {

    const data = JSON.parse(event.body);

    const reviews = await prisma.review.create({
        data: {
            userId: data.userId,
            productId: data.productId,
            rating: data.rating,
            title: data.title,
            body: data.body
        }
    })
    
    return reviews
})
