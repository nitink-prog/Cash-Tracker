import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // _query is brought in as an array, which is a reference-type
  // useRef will prevent infinite loop when having it in the deps of useEffect
  const query = useRef(_query).current;

  useEffect(() => {
    let ref = db.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

    const unSubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // Add all the results[] into documents state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch data.");
      }
    );

    // Clean-up for unmount
    return () => unSubscribe();
  }, [collection, query]);

  return { documents, error };
};
