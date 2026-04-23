import { db } from "./firebase.js";
import { doc, getDoc, updateDoc, increment }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const id = new URLSearchParams(location.search).get("id");

async function load(){

  const ref = doc(db,"products",id);
  const snap = await getDoc(ref);

  const p = snap.data();

  title.innerText = p.name;
  img.src = p.img;

  buy.onclick = async ()=>{
    await updateDoc(ref,{
      clicks: increment(1)
    });

    window.open(p.link,"_blank");
  };
}
