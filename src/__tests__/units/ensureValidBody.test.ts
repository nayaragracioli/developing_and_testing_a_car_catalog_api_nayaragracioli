import { NextFunction, Request, Response } from "express";
import { ensure } from "../../middleware/ensure.middleware";
import { invalidBodyMock, validBodyMock, validSchemaMock } from "../__mocks__/ensureValidBody.mock";


describe("Unit test: Ensure Valid Body Middleware.", () => {
  const validBodyMiddleware = ensure.validBody(validSchemaMock);

  let req: Partial<Request> = {};
  let res: Partial<Response> = {};
  let next: NextFunction = jest.fn();

  beforeEach(() => {
    next = jest.fn();
  });

  test("Should be able to validate a request body.", () => {
    req.body = validBodyMock.bodyData;

    validBodyMiddleware(req as Request, res as Response, next);

    expect(req.body).toStrictEqual(validBodyMock.expectedValue);
    expect(next).toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
  });

  test("Shoud throw error when validating invalid body.", () => {
    req.body = invalidBodyMock.bodyData;

    expect(() => {
      validBodyMiddleware(req as Request, res as Response, next);
    }).toThrow(invalidBodyMock.expectedValue);

    expect(next).not.toHaveBeenCalled();
  });
});