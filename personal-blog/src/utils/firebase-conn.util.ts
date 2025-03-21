// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { FeaturedBlogStorageType } from "../types/firestore/featured-blog/featured-blog.type";
import { BlogListData } from "../interfaces/blog-interface";
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
export const getBlog = async(collection_name: string, blog_document: string) => {
  try {
    //const doc_ref = await doc(db, collection_name, blog_document);
    const doc_ref = await doc(db, collection_name, blog_document);
    const doc_snap = await getDoc(doc_ref);

    if (doc_snap.exists()) { 
      //console.log(doc_snap.data());
      return doc_snap.data();
    } 
    else {
      throw new Error("Could not find snapshot with the given args.");
    }
  } catch (e) {
    console.error("Error fetching document: ", e);
  }
}





// for blog lists on category parent route
export const getBlogList = async(collectionName: string) => {
  try {
    // request collection
    const collection_snapshot = await getDocs(collection(db, collectionName)); // all documents in collection
    // evaluate returned data
    if (collection_snapshot) {

      const list: BlogListData[] = [] 

      collection_snapshot.forEach((docSnap) => { // for each el, extract data for blog list then store each element to list
        const doc = docSnap.data();

        const { blog_document, createdAt } = doc;
        const { header } = blog_document;
        const { seconds } = createdAt;
        
        list.push(
          {
            blog_id: docSnap.id,
            header: header,
            creation_time: seconds
          }
        );

      });

      return list;
    }
    else {
      throw new Error("Could not find collection or collection has no documents");
      
    }
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
