function validateData(data, keys) {
  const dataKeys = Object.keys(data); // ["email","password"]
  for (const key of keys) {
    // "name"
    if (!dataKeys?.includes(key)) {
      return { key, message: "is required", error: true };
    }
  }
  return {
    error: false,
  };
}

module.exports = {
  validateData,
};
