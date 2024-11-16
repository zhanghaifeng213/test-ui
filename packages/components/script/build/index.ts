import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";
import sass from "gulp-sass";
import * as dartSass from 'sass'; 
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";

const sassCompiler = sass(dartSass);

//删除testUI
export const removeDist = () => {
  return delPath(`${pkgPath}/testUI`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sassCompiler())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/testUI/lib/src`))
    .pipe(dest(`${pkgPath}/testUI/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
