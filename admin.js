import { db } from "./firebase.js";
import { collection, addDoc }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

window.addProduct = async ()=>{

  await addDoc(collection(db,"products"),{
    name:name.value,
    img:img.value,
    link:link.value,
    category:category.value,
    clicks:0
  });

  alert("Added!");
}
