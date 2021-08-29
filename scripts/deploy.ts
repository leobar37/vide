// // this script prepare all apps in one directory for to ne deployed in docker containers
// import { cwd } from "process";
import * as utils from './utils';
import { resolve } from 'path';
//  compile all apps and generate package json for each
// copy each docker file into corresponding application
import { existsSync, copyFileSync } from 'fs';
import * as fs from 'fs';
const generateForDeploy = async () => {
  // 'nx run-many --target=build --projects=landing --configuration=production'
  await utils.exec('nx', [
    'run-many',
    '--target=build',
    '--projects=landing',
    '--configuration=production',
  ]);
  if (!fs.existsSync(utils.baseDir('deploy'))) {
    fs.mkdirSync('deploy');
  }
  await utils.copy(utils.baseDir('dist/apps/*'), '');

  // nx run-many --target=test --projects=proj1,proj2
};

const dir = resolve.bind('./');
const copyDockerfiles = async () => {
  try {
    const appsForDeploy = await utils.getListOfFiles(dir('./forcopy2/*'));
    const apps = await utils.getListOfFiles(dir('./forcopy/apps/*'));

    let namesAvalible = appsForDeploy.map(utils.nameOfPath);
    for await (const app of apps) {
      const pathDocker = `${app}/Dockerfile`;
      const nameofApp = utils.nameOfPath(app);
      const idxPath = namesAvalible.findIndex((d) => d == nameofApp);
      if (idxPath == -1) {
        continue;
      }
      const existDockerfile = existsSync(pathDocker);
      if (existDockerfile && idxPath !== -1) {
        const target = appsForDeploy[idxPath];
        console.log(`copy ${pathDocker} --> ${target}`);
        copyFileSync(pathDocker, target + '/Dockerfile');
      }
    }
    // await utils.copy(dir("./forcopy/apps"), dir("./forcopy2"));
  } catch (error) {
    console.log(error);
  }
};
