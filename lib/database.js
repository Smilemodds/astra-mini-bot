import fs from 'fs';
import path from 'path';
import config from '../config.js';
import { logger } from './logger.js';

export class Database {
  constructor() {
    this.dbPath = config.databaseFolder;
    this.ensureFolder();
  }

  ensureFolder() {
    if (!fs.existsSync(this.dbPath)) {
      fs.mkdirSync(this.dbPath, { recursive: true });
    }
  }

  getFilePath(name) {
    return path.join(this.dbPath, `${name}.json`);
  }

  read(name) {
    try {
      const filePath = this.getFilePath(name);
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
      }
      return {};
    } catch (error) {
      logger.error(`Error reading database ${name}: ${error.message}`);
      return {};
    }
  }

  write(name, data) {
    try {
      const filePath = this.getFilePath(name);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
      return true;
    } catch (error) {
      logger.error(`Error writing database ${name}: ${error.message}`);
      return false;
    }
  }

  append(name, key, value) {
    try {
      const data = this.read(name);
      data[key] = value;
      return this.write(name, data);
    } catch (error) {
      logger.error(`Error appending to database ${name}: ${error.message}`);
      return false;
    }
  }

  delete(name, key) {
    try {
      const data = this.read(name);
      delete data[key];
      return this.write(name, data);
    } catch (error) {
      logger.error(`Error deleting from database ${name}: ${error.message}`);
      return false;
    }
  }
}

export default Database;