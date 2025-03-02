#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Copy template files
const templateDir = path.join(__dirname, "templates");
const projectDir = process.cwd();

console.log("Setting up your project...");

// Copy all files from templates to the current directory
fs.cpSync(templateDir, projectDir, { recursive: true });

// Install dependencies
console.log("Installing dependencies...");
execSync("npm install", { stdio: "inherit" });

console.log("Setup complete! Run `npm start` to start the app.");
