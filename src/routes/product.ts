import { Router } from "express";
import { IProduct, ProductModel } from "../models/product";

const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const countries: IProduct[] = await ProductModel.find().exec();
    return res.json(countries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.post("/", async (req, res) => {
  try {
    const country: IProduct = req.body;

    const countryExists = await ProductModel.findOne({
      name: country.name,
    }).exec();

    if (countryExists) {
      return res
        .status(409)
        .json({ error: "There is already another country with this name" });
    }

    const newCountry = await ProductModel.create(country);
    return res.status(201).json(newCountry);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

export default routes;