 import fuzzysort from 'fuzzysort';
import druglist from './druglist';
import synonyms from './synonyms';

//generate preview
export function GenPrev(Head,body,Col1,Col2) {
  document.querySelector(".fPrev").classList.add("d-none")
   document.querySelector("#check").classList.add("d-none")
  document.querySelector(".secPrev").classList.remove("d-none")

   let Prevhead=document.querySelector(".prevHead");
    let th=document.createElement("th");
  th.scope='col';
  Prevhead.append(th);

 Head.forEach(hd => {
  if (hd=="checking") {} else {
     let th=document.createElement("th");
  th.scope='col';
  th.innerHTML=hd;
  Prevhead.appendChild(th)
  }
 
 });


 body.sort((a,b)=>{
   const percentA = parseFloat(a['similarity']);
  const percentB = parseFloat(b['similarity']);
  return percentA - percentB;
 })

 body.forEach((bod,i) => {
let tr=document.createElement("tr");
  const td=document.createElement("td");
  td.innerHTML=`<input class="form-check-input inputCheck" type="checkbox" index=${i} checked >`
  tr.append(td)
 for (let key in bod ) {
   
  if (key=="checking") {
    
  }else{
  const td=document.createElement("td");
  if (key =='similarity') {

    let span=document.createElement("span");
    
    span.innerHTML=bod[key];
   if (parseFloat(bod[key]) > 95 || parseFloat(bod[key]) ==95) {
    span.className="badge bg-success";
   }else if (parseFloat(bod[key])< 95 || parseFloat(bod[key])>50) {
     span.className="badge bg-dark";
   }
   else if (parseFloat(bod[key]) <50) {
     span.className="badge bg-danger";
   }
   td.append(span)
  }else{
    td.innerHTML=bod[key];
  
  }
tr.append(td) 
}
 }
 document.querySelector('.prevBody').append(tr)
})

frt(body,Col1,Col2)
}






function cleanInput(str) {
  if (!str || typeof str !== 'string') return ''; // safely handle null/undefined
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

//check synonyms
export function checkSynonyms(str) {
 let gh = cleanInput(str);
 const sp=gh.split(" ");
 sp.forEach((ed,i) => {
    if (synonyms.has(ed)) {
      sp[i]=synonyms.get(ed)
    }

 });

 const rt=sp.join(" ");


   
let list = druglist.map(name => cleanInput(name)); 
const indexedList=fuzzysort.prepare(list);
const result=fuzzysort.go(rt,indexedList);


if (result['total']!==0) {
  

if(result[0]['_score'] >= -50){return result[0].target.toUpperCase()}else{
  return rt.toUpperCase();
}
}else{
  return rt.toUpperCase()
}


}


function frt(body,Col1,Col2) {
  const inputCheck=document.querySelectorAll(".inputCheck");
  inputCheck.forEach(rg => {
    rg.addEventListener('change',()=>{
     const ind=rg.getAttribute("index");
     body[ind]['checking']=rg.checked;
    })
  });
  ExportSheet(body,Col1,Col2)
}

function ExportSheet(body,Col1,Col2) {
  let bog=body
  console.log(body)
  const ExpButton=document.querySelector("#ExportSheet");
  ExpButton.addEventListener("click",()=>{
    const filterBody=body.filter(obj=>obj['checking'] == true)
    console.log(filterBody)
    const r1=`Corrected ${Col1}`;
    const r2=`Corrected ${Col2}`
filterBody.forEach(obj=>{
 
   obj[Col1]=obj[r1];
   obj[Col2]=obj[r2];

   delete obj[r1];
   delete obj[r2];
   delete obj['checking'];
  
})

  const newWb = XLSX.utils.book_new();
    const newWs = XLSX.utils.json_to_sheet(filterBody);

    XLSX.utils.book_append_sheet(newWb, newWs, 'Result');

    spin.classList.add("d-none");
     XLSX.writeFile(newWb, 'matches_result.xlsx');  
  })
  

}

