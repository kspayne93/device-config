export const getIOSVersion = () => {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    const fullVersionArr = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];

    return fullVersionArr[0]; // returns main version of ios
  }
};
