module.exports = {
  root: true,
  extends: '@react-native-community',

  // "object-curly-spacing": [2, "never"],
  rules:
    "object-curly-spacing": [2, "always", {
      "objectsInObjects": true,
      "arraysInObjects": true
    }]
};
