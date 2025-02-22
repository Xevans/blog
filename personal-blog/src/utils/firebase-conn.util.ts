// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore";
import { BlogStorageType } from "../types/firestore/blog/types.blog";
import { BlogPreviewStorageType } from "../types/firestore/blog-preview/blog-preview.type";
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

// firebase function wrapped in a helper function
export const uploadBlog = async(collectionName: string, blog_document: BlogStorageType) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), blog_document);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const getBlogs = async(collectionName: string) => {
  try {
    const blogSnapshot = await getDocs(collection(db, collectionName));
    blogSnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()}`);
      const { title, category, blurb, content, date, media, media_attribution, media_caption, media_links } = doc.data();
      console.log(title);
      console.log(category);
      console.log(blurb);
      console.log(content); // should be tags fix in firebase and add content field
      console.log(date);
      console.log(media);
      console.log(media_attribution);
      console.log(media_caption);
      console.log(media_links);
    });
  } catch (e) {
    console.error("Error retrieving data: ", e);
  }
}


export const getPreviews = async(collectionName: string) => {
  try {
    const blogSnapshot = await getDocs(collection(db, collectionName));
    const previews: BlogPreviewStorageType[] = [];
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

      const preview: BlogPreviewStorageType = {
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
