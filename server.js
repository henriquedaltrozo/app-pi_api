const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();

// Database connection configuration
const pool = new Pool({
  user: "vinicius.mattos@sou.unijui.edu.br",
  host: "200.17.86.20",
  database: "santa_rosa",
  password: "DFEw3fq8jfqw",
  port: 55432,
});

app.use(cors());

//cards
app.get("/getTemperature", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT EMW_TEMPERATURE FROM nit2xli ORDER BY TIME DESC LIMIT 1"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getHumidity", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT EMW_HUMIDITY FROM nit2xli ORDER BY TIME DESC LIMIT 1"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getWindSpeed", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT EMW_GUST_WIND_SPEED FROM nit2xli ORDER BY TIME DESC LIMIT 1"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getSolarRadiation", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT EMW_SOLAR_RADIATION FROM nit2xli ORDER BY TIME DESC LIMIT 1"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//por dia
app.get("/getTemperatureDataAtt", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT EMW_TEMPERATURE FROM nit2xli ORDER BY TIME DESC LIMIT 10"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getHumidityDataAtt", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT EMW_HUMIDITY FROM nit2xli ORDER BY TIME DESC LIMIT 10"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getAtmPresDataAtt", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT EMW_ATM_PRES FROM nit2xli ORDER BY TIME DESC LIMIT 10"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getSolarRadiationDataAtt", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT EMW_SOLAR_RADIATION FROM nit2xli ORDER BY TIME DESC LIMIT 10"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getGustWindSpeedDataAtt", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT EMW_GUST_WIND_SPEED FROM nit2xli ORDER BY TIME DESC LIMIT 10"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getUvDataAtt", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT EMW_UV FROM nit2xli ORDER BY TIME DESC LIMIT 10"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
