import { Router } from "express";
import { CarController } from "../controller/CarController";
import { ensure } from "../middleware/ensure.middleware";
import { carCreateSchema, carUpdateSchema } from "../schemas/car.schema";
import { container } from "tsyringe";
import { CarService } from "../services/CarService";

export const carRouter = Router();

container.registerSingleton("CarService", CarService)
const controller = container.resolve(CarController);

carRouter.post("/post", ensure.validBody(carCreateSchema), (req, res) => controller.create(req, res));
carRouter.get("", (req, res) => controller.read(req, res));


carRouter.use("/:carId", ensure.paramsIdExists({
    error: "Car not found.",
    model: "car",
    searchKey: "carId"
}));

carRouter.get("/:carId", (req, res) => controller.retrieve(req, res));
carRouter.patch("/:carId", ensure.validBody(carUpdateSchema), (req, res) => controller.update(req, res));
carRouter.delete("/:carId", (req, res) => controller.delete(req, res));