import { ZodError, z } from "zod";

export const validSchemaMock = z.object({
    name: z.string().min(1),
    description: z.string().nullish(),
    brand: z.string().min(1),
    year: z.number().positive(),
    km: z.number().positive(),
});

export const validBodyMock = {
  bodyData: {
    name: "Car",
    description: "Description",
    brand: "Card brand",
    year: 2023,
    km: 1000,
    chaveExtra: true,
  },
  expectedValue: {
    name: "Car",
    description: "Description",
    brand: "Card brand",
    year: 2023,
    km: 1000,
  },
};

export const invalidBodyMock = {
  bodyData: {},
  expectedValue: ZodError,
};