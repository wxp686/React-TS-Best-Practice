export default () => {
  let asyncName: String = 'g';
  new Promise<String>((resolve) => {
    setTimeout(() => {
      resolve('gg');
    }, 5000);
  }).then((res) => {
    console.log(res);
    asyncName = res;
  });
  return { asyncName };
};
