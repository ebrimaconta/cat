const fetchFn = (url: string, method: string) => {
  fetch(url, {
    method: method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '793af6d1-477e-4918-bc39-e04e553a3c75',
    },
  });
};
export { fetchFn };
