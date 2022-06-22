import { format } from 'date-fns';

const getFormatedDateTime = (date: any, regionFormat: any) => {
  return format(new Date(date), regionFormat);
};

export default getFormatedDateTime;
