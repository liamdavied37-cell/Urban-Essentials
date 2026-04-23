import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const box = document.getElementById("products");
let all = [];

async function load(){
  const snap = await getDocs(collection(db,"products"));

  all = [];
  snap.forEach(d=>{
    all.push({id:d.id,...d.data()});
  });

  render(all);
}

function render(list){
  box.innerHTML = "";

  list.forEach(p=>{
    box.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <button onclick="openP('${p.id}')">Buy</button>
      </div>
    `;
  });
}

window.searchProducts = (q)=>{
  render(all.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())));
}

window.openP = (id)=>{
  location.href = "product.html?id="+id;
}

load();
