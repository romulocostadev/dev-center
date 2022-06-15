import { compile } from 'path-to-regexp';

export const pathToUrl = (path: string, params: Record<string, unknown> = {}) =>
  compile(path)(params);

export const apiRoutes = {
}
