import { useState, useEffect } from "react";

export function useImageFetcher(url) {
  const [imageObjs, setImageObjs] = useState([]);
  useEffect(() => {
    let ignore = false;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!ignore)
          setImageObjs(() => {
            const imageList = [];
            data.message.forEach((url, index) => {
              imageList.push({
                isClicked: false,
                order: index,
                url: url,
              });
            });
            return imageList;
          });
      });
    return () => {
      ignore = true;
    };
  }, [url]);

  return imageObjs;
}
