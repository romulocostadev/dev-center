export const createRouteNavigate = (route: string, to: string) => {
  const pathParts = route.split('/');
  return `/${pathParts[1]}/${pathParts[2]}/${to.toLowerCase()}`;
};
