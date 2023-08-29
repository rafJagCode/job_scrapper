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
  return new Promise((resolve, reject) =>
    fs.writeFile(path, JSON.stringify(object), (err) => {
      if (err) reject(err);
      resolve();
    }),
  );
};
