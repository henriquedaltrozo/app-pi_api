const express = require("express");
const router = express.Router();
const { executeQuery } = require("../utils/dbUtils");

router.get("/getTemperature", (req, res) => {
  executeQuery(
    res,
    "SELECT EMW_TEMPERATURE FROM nit2xli ORDER BY TIME DESC LIMIT 1"
  );
});

router.get("/getHumidity", (req, res) => {
  executeQuery(
    res,
    "SELECT EMW_HUMIDITY FROM nit2xli ORDER BY TIME DESC LIMIT 1"
  );
});

router.get("/getWindSpeed", (req, res) => {
  executeQuery(
    res,
    "SELECT EMW_GUST_WIND_SPEED FROM nit2xli ORDER BY TIME DESC LIMIT 1"
  );
});

router.get("/getSolarRadiation", (req, res) => {
  executeQuery(
    res,
    "SELECT EMW_SOLAR_RADIATION FROM nit2xli ORDER BY TIME DESC LIMIT 1"
  );
});

router.get("/getTemperatureDataAtt", (req, res) => {
  const limit = req.query.limit || 10;
  executeQuery(
    res,
    `SELECT EMW_TEMPERATURE FROM nit2xli ORDER BY TIME DESC LIMIT ${limit}`
  );
});

router.get("/getHumidityDataAtt", (req, res) => {
  const limit = req.query.limit || 10;
  executeQuery(
    res,
    `SELECT EMW_HUMIDITY FROM nit2xli ORDER BY TIME DESC LIMIT ${limit}`
  );
});

router.get("/getAtmPresDataAtt", (req, res) => {
  const limit = req.query.limit || 10;
  executeQuery(
    res,
    `SELECT EMW_ATM_PRES FROM nit2xli ORDER BY TIME DESC LIMIT ${limit}`
  );
});

router.get("/getSolarRadiationDataAtt", (req, res) => {
  const limit = req.query.limit || 10;
  executeQuery(
    res,
    `SELECT EMW_SOLAR_RADIATION FROM nit2xli ORDER BY TIME DESC LIMIT ${limit}`
  );
});

router.get("/getGustWindSpeedDataAtt", (req, res) => {
  const limit = req.query.limit || 10;
  executeQuery(
    res,
    `SELECT EMW_GUST_WIND_SPEED FROM nit2xli ORDER BY TIME DESC LIMIT ${limit}`
  );
});

router.get("/getUvDataAtt", (req, res) => {
  const limit = req.query.limit || 10;
  executeQuery(
    res,
    `SELECT EMW_UV FROM nit2xli ORDER BY TIME DESC LIMIT ${limit}`
  );
});

module.exports = router;
