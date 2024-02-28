import { Router } from "express";
import { CarController } from "../controller/CarController";
import { ensure } from "../middleware/ensure.middleware";
import { carCreateSchema, carUpdateSchema } from "../schemas/car.schema";

export const carRouter = Router();
const controller = new CarController();

carRouter.post("/post", ensure.validBody(carCreateSchema), controller.create);
carRouter.get("", controller.read);


carRouter.use("/:carId", ensure.paramsIdExists({
    error: "Car not found.",
    model: "car",
    searchKey: "carId"
}));

carRouter.get("/:carId", controller.retrieve);
carRouter.patch("/:carId", ensure.validBody(carUpdateSchema), controller.update);
carRouter.delete("/:carId", controller.delete);