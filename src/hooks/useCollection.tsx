import React, { useEffect, useState } from 'react';
import {
  onSnapshot,
  collection,
  query,
  DocumentData,
  CollectionReference,
  Query,
} from 'firebase/firestore';
import { db } from '../firebase';

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocumments] = useState<Channels[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocumments(channelsResults);
    });
  }, []);

  return { documents };
};

export default useCollection;
