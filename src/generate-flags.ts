import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface Country {
  alpha2: string;
  alpha3?: string;
  numeric?: string;
}

const countryCodeListPath = join(__dirname, '../node_modules/flagpack-core/countryCodeList.json');
const countryCodeList: Country[] = JSON.parse(fs.readFileSync(countryCodeListPath, 'utf-8'));

const distDir = './dist/flags';

const countryObject: Record<string, Country> = {};
countryCodeList.forEach((country) => {
  countryObject[country.alpha2] = country;
});

const sizes = ['s', 'm', 'l'] as const;

const createDist = (): void => {
  // Clean and create the dist structure
  createFlagsDirectory();
  createSizeDirectories();

  // Create flags folder and subdirectories
  function createFlagsDirectory(): void {
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
      console.log('created flags folder');
    }
  }

  function createSizeDirectories(): void {
    sizes.forEach((size) => {
      const sizeDir = `${distDir}/${size}`;
      if (!fs.existsSync(sizeDir)) {
        fs.mkdirSync(sizeDir, { recursive: true });
        console.log(`created folder: /flags/${size}`);
      }
    });
  }
};

const copyFlags = (): void => {
  const sourceDirPrefix = 'node_modules/flagpack-core/svg';

  sizes.forEach((size) => {
    const sourceDir = `${sourceDirPrefix}/${size}/`;
    
    fs.readdir(sourceDir, (err, files) => {
      if (err) {
        console.error(`Error reading directory ${sourceDir}:`, err);
        return;
      }

      files.forEach((file) => {
        // full fileName including file extension
        const fileName = file;

        // filename without file extension
        const fileNameBase = fileName.split('.')[0];

        // file extension
        const suffix = '.svg';

        // alpha 2 value
        const alphaTwoValue = countryObject[fileNameBase]?.alpha2;

        // alpha 3 value
        const alphaThreeValue = countryObject[fileNameBase]?.alpha3;

        // numeric value
        const numericValue = countryObject[fileNameBase]?.numeric;

        // Iterable array
        const values = [alphaTwoValue, alphaThreeValue, numericValue];

        console.log(
          `Flag for ${fileNameBase}: alpha2: ${alphaTwoValue}${
            alphaThreeValue ? ` | alpha3: ${alphaThreeValue}` : ''
          }${numericValue ? ` | numeric: ${numericValue}` : ''}`
        );

        values.forEach((value) => {
          if (value === undefined) {
            return;
          }

          fs.copyFile(
            `${sourceDirPrefix}/${size}/${fileName}`,
            `${distDir}/${size}/${value}${suffix}`,
            (err) => {
              if (err) throw err;
            }
          );
        });
      });
    });
  });
};

createDist();
copyFlags();
