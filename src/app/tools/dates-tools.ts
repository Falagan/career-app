import format from 'date-fns/format';

export const formatDate = (date: string | Date, outputFormat: string) => {
  try {
    return format(new Date(date), outputFormat);
  } catch (error) {
    console.log(error);
  }
};
