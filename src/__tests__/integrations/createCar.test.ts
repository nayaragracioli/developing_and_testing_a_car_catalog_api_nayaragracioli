import "reflect-metadata";
import { carCreateBodyMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";
import { carDefaultExpects } from "../utils/carDefaultExpects";

describe("Integration test: Create Car.", () => {
  test("Create Car should work correctly.", async () => {
    
    const data = await request
      .post("/api/cars")
      .send(carCreateBodyMock)
      .expect(201)
      .then((response) => response.body);

    expect(data.id).toBeDefined();
    carDefaultExpects(data, carCreateBodyMock);
  });
});
