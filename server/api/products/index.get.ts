import { Product } from "@prisma/client";
import prisma from "~/prisma";

export default defineEventHandler(async (event) => {

    const query = getQuery(event);
    const { title, category } = query as Product;
    if (title) {
        const products = await prisma.product.findMany({
            where: {
                title: {
                    contains: title
                }
            }
        });
        return products;
    }
    else if (category) {
        const products = await prisma.product.findMany({
            where: {
                category: {
                    contains: category
                }
            }
        });
        return products;
    }
    const products = await prisma.product.findMany();
    return products;
})
