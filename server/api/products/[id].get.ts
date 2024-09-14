import prisma from "~/prisma";

export default defineEventHandler(async (event) => {
    
    const { id } = event.context.params as { id: string };

    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(id)
        }
    });

    return product;
})
