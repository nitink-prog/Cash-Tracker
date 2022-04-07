import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = db.collection(collection);

    const unSubscribe = ref.onSnapshot((snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });

      setError(null);
      setDocuments(results);
    });
  }, [collection]);
};
