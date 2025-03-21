// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { FeaturedBlogStorageType } from "../types/firestore/featured-blog/featured-blog.type";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJcrvdK9VQVHv82KYbbRvb30JH61UVvaI", // public key
  authDomain: "xevans-blog.firebaseapp.com",
  projectId: "xevans-blog",
  storageBucket: "xevans-blog.firebasestorage.app",
  messagingSenderId: "474952038593",
  appId: "1:474952038593:web:468170058e2674fea77c40",
  measurementId: "G-XKSMXPF0WM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
//const analytics = getAnalytics(app);





// Retrieve 1 blog
export const getBlog = async(collectionName: string, blog_document: string) => {
  try {
    const docRef = await doc(db, collectionName, blog_document);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      //return docSnap.data();
    }

    console.log("Document fetched with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}





// for blog lists on category parent route
export const getBlogs = async(collectionName: string) => {
  try {
    // request collection data
    // evaluate returned data
  } catch (e) {
    console.error("Error retrieving data: ", e);
  }
}



// for blog previews on home
export const getPreviews = async(collectionName: string) => {
  try {
    const blogSnapshot = await getDocs(collection(db, collectionName)); // all documents in collection

    const previews: FeaturedBlogStorageType[] = [];
    blogSnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()}`);
      const { Author, Date, Tag, highlight, linkto, media, title } = doc.data();
      /*console.log(Author);
      console.log(Date);
      console.log(Tag);
      console.log(highlight); // should be tags fix in firebase and add content field
      console.log(linkto);
      console.log(media);
      console.log(title);*/

      const preview: FeaturedBlogStorageType = {
        "author": Author,
        "date": Date,
        "tag": Tag,
        "highlight": highlight, 
        "linkto": linkto,
        "media": media,
        "title": title,
      }

      previews.push(preview);
    });
    return previews;
  } catch (e) {
    console.error("Error retrieving data: ", e);
  }
}
