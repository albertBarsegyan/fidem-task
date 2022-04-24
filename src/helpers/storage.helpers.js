import isPrimitive from "./object.helpers";

export const saveDataToStorage = (key, value) => {
  if (process.browser) {
    if (isPrimitive(value)) {
      localStorage.setItem(key, value);
      return true;
    }
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }
  return null;
};

export const getDataFromStorage = (key) => {
  if (process.browser) {
    const storageData = localStorage.getItem(key);
    return storageData && JSON.parse(storageData);
  }
  return null;
};

export const removeDataFromStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
    return true;
  }
  return null;
};
