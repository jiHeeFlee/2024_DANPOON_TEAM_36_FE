const themeGet = (path) => ({ theme }) => {
  if (!theme) {
      console.error('Theme is undefined');
      return undefined; // 또는 원하는 기본 값을 반환
  }
  
  return path.split('.').reduce((obj, key) => {
      if (obj === undefined) {
          console.error(`Key "${key}" is not found in theme.`);
          return undefined;
      }
      return obj[key];
  }, theme);
};

export default themeGet;