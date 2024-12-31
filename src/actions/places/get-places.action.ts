import { defineAction } from "astro:actions";
import { db } from "../../db";



export const getPlaces = defineAction({
    accept: "json",
    handler: async (input, context) => {
        const { } = context;


        const places = await db.place.findMany();

        return places;
    }
});