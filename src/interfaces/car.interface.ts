import { z } from "zod";
import { carCreateSchema, carReturnSchema, carUpdateSchema } from "../schemas/car.schema";

export type TCarCreate = z.infer<typeof carCreateSchema>;

export type TCarUpdate = z.infer<typeof carUpdateSchema>;

export type TCarReturn = z.infer<typeof carReturnSchema>;