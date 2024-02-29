import { TCarCreate, TCarReturn } from "../../interfaces/car.interface";


export const carDefaultExpects = (data: TCarReturn, expected: TCarCreate) => {
  expect(data.name).toBe(expected.name);
  expect(data.description).toBe(expected.description);
  expect(data.brand).toBe(expected.brand);
  expect(data.year).toBe(expected.year);
  expect(data.km).toBe(expected.km);
};
