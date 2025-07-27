 import synonyms from './synonyms';
  import levenshtein from 'fast-levenshtein';


//generate preview
export function GenPrev(Head,body) {
  document.querySelector(".fPrev").classList.add("d-none")
   document.querySelector("#check").classList.add("d-none")
  document.querySelector(".secPrev").classList.remove("d-none")

   let Prevhead=document.querySelector(".prevHead");
    let th=document.createElement("th");
  th.scope='col';
  Prevhead.append(th);

 Head.forEach(hd => {
  let th=document.createElement("th");
  th.scope='col';
  th.innerHTML=hd;
  Prevhead.appendChild(th)
 });


 body.forEach(bod => {
let tr=document.createElement("tr");
  const td=document.createElement("td");
  td.innerHTML=`<input class="form-check-input" type="checkbox" checked>`
  tr.append(td)
 for (let key in bod ) {
   
  const td=document.createElement("td");
  if (key =='similarity') {

    console.log(bod[key])
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
 document.querySelector('.prevBody').append(tr)
})

}








//check synonyms
export function checkSynonyms(str) {
    let gh = str.toLowerCase(); // keep original word
    const numIndex = gh.search(/[0-9]/);

  let textPart = gh;

  if (numIndex !== -1) {textPart = gh.substring(0, numIndex); }
 let Parts=textPart.split(" ");

let A=new Set();
let B=new Set()
      let nim=[];
let similarity;
Parts.forEach((e,i)=>{
A.add(i)
  if (e.length!==0) {
      for (let key of Object.keys(synonyms)) {
 
   const distance = levenshtein.get(e, key);
   const maxLen = Math.max(e.length, key.length);
   similarity = 1 - (distance / maxLen);
   // store best match with highest similarity
  if (similarity >0.8 || similarity ==0.8) {
    e=key
    B.add(i)
    nim[i]=synonyms[e]
    //nim.push(synonyms[e])
  }
}
  }

})

const c=A.difference(B)
const rem=[];
rem.push(" ")
c.forEach((r)=>{
rem.push(Parts[r])
})
A=Array.from(A)

const finalWord=Parts.map((w,i)=>{
  if(B.has(i)){
    return nim[i] +" "
  }else{
    return w +" "
  }
})

 return (finalWord.join(" ")+ (numIndex !== -1? gh.substring(numIndex):'')).toUpperCase();

}
