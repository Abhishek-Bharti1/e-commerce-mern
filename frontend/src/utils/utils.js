const generateImageUrl = (baseUrl, width, height) => {
    const url = new URL(baseUrl);
    url.searchParams.set('wid', width);
    url.searchParams.set('hei', height);
    return url.toString();
  };
  export default generateImageUrl;