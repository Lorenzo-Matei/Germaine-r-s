import mongoose from "mongoose";

//new mongoose.Schema() - creates a new mongoose.schema OBJECT
const productSchema = new mongoose.Schema( // mongoose.schema takes 2 parameters
  // first parameters is the fields of the schema
  {
    // type: is the datatype that the field will be interpreted as
    // required: is whether the field can be left blank
    // unique: is whether any other instance has the same string. Cant have duplicates across all data

    id: { type: Number, required: true, unique: true },
    productCategory: { type: String, required: true },
    productSubCategory: { type: String, required: true },
    productMicroCategory: { type: String, required: false, unique: false }, //should be true
    linkedItemName: { type: String, required: false, unique: false }, //
    manufacturer: { type: String, required: true, unique: false },
    distributor: { type: String, required: true, unique: false },
    productBrand: { type: String, required: true, unique: false },
    productName: { type: String, required: true, unique: false },
    modelVariant: { type: String, required: false, unique: false }, // should be true for required
    SKU: [
      {
        storeSKU: {
          type: String,
          required: false,
          // unique: false,
          // index: false,
        },
      },
      {
        venderSKU: {
          type: String,
          required: false,
          unique: false,
          index: false,
        },
      }, // ...
      {
        linkedSKU: {
          type: String,
          required: false,
          unique: false,
          index: false,
        },
      }, // ...
    ],
    itemSerial: { type: String, required: false, unique: false }, //...
    itemWeight: { type: String, required: false, unique: false }, //...
    dimensions: { type: String, required: false, unique: false }, //....
    freightClass: { type: String, required: false, unique: false }, //...
    warranty: [
      {
        component1: {
          type: String,
          required: false,
          unique: false,
          index: false,
        },
        duration: {
          type: Number,
          required: false,
          unique: false,
          index: false,
        },
      },
      {
        component2: { type: String, required: false, unique: false },
        duration: { type: Number, required: false, unique: false },
      },
      { partsAndLabour: { type: Number, required: false, unique: false } },
      { general: { type: Number, required: false, unique: false } },
    ],
    shortDescription: { type: String, required: true, unique: false },
    fuelSource: [
      { gasType: { type: String, required: false, unique: false } },
      { phase: { type: String, required: false, unique: false } },
      { voltage: { type: String, required: false, unique: false } },
      { BTU: { type: String, required: false, unique: false } },
      { amps: { type: String, required: false, unique: false } },
    ],
    additionalInfor: { type: String, required: false, unique: false },
    clearance: { type: Boolean, required: false, unique: false },
    returnable: { type: Boolean, required: false, unique: false },
    listPriceOnWebsite: { type: Boolean, required: false, unique: false },
    currency: { type: String, required: false, unique: false },
    pricing: [
      {
        instorePrice: [
          { type: Number, required: false, unique: false },
          { type: Number, required: false, unique: false },
        ],
      },

      {
        onlinePrice: [
          { type: Number, required: false, unique: false },
          { type: Number, required: false, unique: false },
        ],
      },
      {
        cost: [
          { type: Number, required: false, unique: false },
          { type: Number, required: false, unique: false },
        ],
      },
      {
        autoQuotesPrice: [
          { type: Number, required: false, unique: false },
          { type: Number, required: false, unique: false },
        ],
      },
      {
        shippingPrice: [
          { type: Number, required: false, unique: false },
          { type: Number, required: false, unique: false },
        ],
      },
    ],
    priceMod: [
      { marginPercentage: { type: Number, required: false, unique: false } },
      { discountPercentage: { type: Number, required: false, unique: false } },
      { marginDollar: { type: Number, required: false, unique: false } },
      { discountDollar: { type: Number, required: false, unique: false } },
    ],
    commission: [
      {
        commissionPercentage: { type: Number, required: false, unique: false },
      },
      { fixedCommission: { type: Number, required: false, unique: false } },
    ],
    images: [{ type: String, required: false, unique: false }],
    // priceListedOnWebsite: { type: Boolean, required: true, unique: false },
  },
  //second parameter is the options. The option to add fields when something is added
  {
    timestamps: true, // automatically 2 new fields will be added to the first parameter
    //the 1st field added will be 'created at: date/time' and 2nd field  is 'updated at: date/time '
  }
);

// now to create a model based on the schema above:
// 1st param is the name of the model
// 2nd param is the schema to be used in this model
const Product = mongoose.model("Product", productSchema);
export default Product;
