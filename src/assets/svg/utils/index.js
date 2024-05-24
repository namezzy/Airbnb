function styleStrToObject(styleStr) {
  if (!styleStr || typeof styleStr !== "string") {
    return {};
  }

  const styles = {};

  styleStr.split(";").forEach((item) => {
    if (item.trim()) {
      const [key, value] = item.split(":").map((i) => i.trim());
      if (key && value) {
        const formattedKey = key.replace(/-(\w)/g, (match, p1) =>
          p1.toUpperCase()
        );
        styles[formattedKey] = value;
      }
    }
  });
  return styles;
}

export default styleStrToObject;
