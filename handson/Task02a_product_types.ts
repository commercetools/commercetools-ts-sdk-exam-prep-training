import { getSourceProductType, getSourceProductTypes, replicateProductType } from "./lib/productTypeService";
import {log} from "../utils/logger";

// TODO Step 1: Provide credentials in .env for concept API client
// TODO Step 2: Provide prefix in utils/config for concept API client

// TODO Step 3: Use productTypeService to read any number of product types
// getSourceProductTypes().then(log).catch(log);

// TODO Step 4: Use productTypeService to transfer product types from Concept to POC project


// Transfer a single product type
// getSourceProductType("product-key")
//     .then(productType => replicateProductType(productType.body))
//     .then(log)
//     .catch(log);
