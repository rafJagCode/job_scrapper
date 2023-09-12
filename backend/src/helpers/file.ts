import fs from 'fs';

export const readFile = async (path: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
};

export const writeFile = async (path: string, object: any): Promise<void> => {
  console.log(`Writing to file ${path}...`);
  return new Promise((resolve, reject) =>
    fs.writeFile(path, JSON.stringify(object), (err) => {
      if (err) {
        console.log(`While writing to file ${path} occured an error => ${err.message}`);
        reject(err);
      }
      resolve();
    }),
  );
};
