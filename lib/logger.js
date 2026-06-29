import chalk from 'chalk';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const logger = {
  info: (msg) => console.log(chalk.blue.bold('ℹ ') + msg),
  success: (msg) => console.log(chalk.green.bold('✓ ') + msg),
  error: (msg) => console.log(chalk.red.bold('✗ ') + msg),
  warn: (msg) => console.log(chalk.yellow.bold('⚠ ') + msg),
  debug: (msg) => console.log(chalk.gray.bold('🐛 ') + msg),
  divider: () => console.log(chalk.cyan('─'.repeat(50))),
};

export default logger;