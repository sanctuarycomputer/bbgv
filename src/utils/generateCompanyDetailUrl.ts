export default (companyName: string): string => {
  const companyNameInLowercase = companyName.toLowerCase();

  return `/companies/${companyNameInLowercase}`;
};
