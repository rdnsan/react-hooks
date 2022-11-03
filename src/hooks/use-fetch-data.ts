import { useEffect, useState } from 'react';

/**
 * It fetches data from a URL and returns the data and a boolean indicating whether the fetch is done
 * @param {string} url - The URL to fetch data from.
 * @returns An object with two properties: data and done.
 */
export function useFetchData<Payload>(url: string) {
  const [data, dataSet] = useState<Payload | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resData: Payload) => {
        dataSet(resData);
        doneSet(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [url]);

  return { data, done };
}
