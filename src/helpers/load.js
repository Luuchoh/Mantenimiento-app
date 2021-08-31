import { db } from "../firebase/firebase-config";

export const load= async (uid) => {
  const dogsList = [];
  if (uid) {
    const DogStore = await db
      .collection(`/Dog`)
      .where("name", '==', uid)
      .get();
    console.log("DogStore");
    console.log(DogStore);

    DogStore.forEach((hijo) => {
      dogsList.push({
        id: hijo.id,
        ...hijo.data(),
      });
    });
  } else {
    const DogStore = await db.collection(`/Dog`).get();

    DogStore.forEach((hijo) => {
      dogsList.push({
        id: hijo.id,
        ...hijo.data(),
      });
    });
  }

  return dogsList;
};
