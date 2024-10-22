import fs from 'fs-extra';
import path from 'path';

export const scaffoldMicroservice = (name: string) => {
  const targetDir = path.join(process.cwd(), name);

  const folders = [
    'src/application',
    'src/domain',
    'src/infrastructure',
    'src/interfaces',
    'test'
  ];

  folders.forEach(folder => {
    const folderPath = path.join(targetDir, folder);
    fs.ensureDirSync(folderPath);
  });

  const files = [
    { path: 'package.json', content: getPackageJsonContent(name) },
    { path: 'tsconfig.json', content: getTsConfigContent() },
    { path: 'src/application/service.ts', content: getServiceContent() },
    { path: 'src/domain/model.ts', content: getDomainModelContent() },
    { path: 'src/infrastructure/repository.ts', content: getInfrastructureContent() },
    { path: 'src/interfaces/controller.ts', content: getInterfaceControllerContent() }
  ];

  files.forEach(file => {
    const filePath = path.join(targetDir, file.path);
    fs.writeFileSync(filePath, file.content);
  });

  console.log(`Microservicio ${name} generado con éxito.`);
};

const getPackageJsonContent = (name: string) => `
{
  "name": "${name}",
  "version": "1.0.0",
  "main": "src/index.ts",
  "scripts": {
    "start": "ts-node src/index.ts",
    "build": "tsc"
  },
  "devDependencies": {
    "typescript": "^4.0.0"
  }
}
`;

const getTsConfigContent = () => `
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "test"]
}
`;

const getServiceContent = () => `
export class ExampleService {
  execute(): void {
    console.log('Service logic here');
  }
}
`;

const getDomainModelContent = () => `
export interface ExampleModel {
  id: string;
  name: string;
}
`;

const getInfrastructureContent = () => `
export class ExampleRepository {
  save(data: any): void {
    console.log('Saving data', data);
  }
}
`;

const getInterfaceControllerContent = () => `
export class ExampleController {
  handleRequest(): void {
    console.log('Handling request');
  }
}
`;

