import { useState, useEffect } from "react";

export function useImageFetcher(url) {
  const [imageObjs, setImageObjs] = useState([]);

  function dogSetter(data) {
    const arr = [];
    data.message.forEach((url, index) => {
      arr.push({
        isClicked: false,
        order: index,
        url: url,
      });
    });
    return arr;
  }

  function catSetter(data) {
    const arr = [];
    data.forEach((obj, index) => {
      arr.push({
        isClicked: false,
        order: index,
        url: obj.url,
      });
    });
    return arr;
  }

  useEffect(() => {
    let ignore = false;

    if (url.includes("cat") || url.includes("dog")) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (!ignore) {
            const setter = url.includes("cat")
              ? catSetter(data)
              : dogSetter(data);
            setImageObjs(setter);
          }
        });
    }

    return () => {
      ignore = true;
    };
  }, [url]);

  return imageObjs;
}
