/*    const firstData=XLSX.utils.sheet_to_json(fg);
                      const data=new Uint8Array(e.target.result);
        const workBook=XLSX.read(data,{type:'array'});

        const sheetNames=workBook.SheetNames; */

 import levenshtein from 'fast-levenshtein';

        let columns=[];
        let selectedSht=[]

        let column1=false;
        let column2=false
        const allData=[]
        let Col1='';
        let sheetN1='';
         let Col2='';
        let sheetN2='';
        let indexNum1=0;
         let indexNum2=0;
        let colIndex1;
        let colIndex2;
        const Infile=document.querySelector("#file");

        Infile.addEventListener("change",(e)=>{
                const file=e.target.files[0];
                if (file) {
                    
                    const reader=new FileReader();
                    reader.onload=function(e){
                            const data=new Uint8Array(e.target.result);
                            const workBook=XLSX.read(data,{type:'array'});
                           // console.log(workBook)
                           
                         getSheetNames(workBook)
                         setCol()
                      
                    }

                    reader.readAsArrayBuffer(file)
                }

              
        })


        function getSheetNames(workBook) {
            const hold=[];
           
            const SheetNames=workBook.SheetNames;
             
            SheetNames.map((Shname,i)=>{
               const sheet=workBook.Sheets[Shname];
               const jsonData=XLSX.utils.sheet_to_json(sheet,{header:1})
            
               if (jsonData[0]!==undefined && jsonData[0]!==null) {

                const df={
                    name:SheetNames[i],
                    data:jsonData,
                }
               
                const obj={
                   name:SheetNames[i],
                   columns:jsonData[0].length,
                   'colName':jsonData[0]
                }
             console.log(df)
                hold.push(obj)
              allData.push(df);
           
               }
            })
hold.map((val,i)=>{

    const colN=val['colName'].toString();
      columns.push(val)
const temp=`   <div class="col-md-4 mb-4" >
     <div class="card h-100 shadow-sm border-primary" id="st${i}">
        <div class="card-body text-center" >
          <h5 class="card-title">${val['name']}</h5>
          <p class="text-muted">${val['columns']} columns</p>
          <button class="btn btn-outline-primary colBtn" pap="${colN}" cName="${val['name']}" index="${i}">
            Select Sheet
          </button>
          
        </div>
      </div>
      
   </div>`;

   document.querySelector("#sheetCards").innerHTML +=temp;
      

})




        }
        

        function setCol(params) {
            const cols=document.querySelectorAll(".colBtn");
            
            
            cols.forEach(ele => {
              ele.addEventListener('click',()=>{
                const chosenindex=ele.getAttribute("index");
                if (column1) {
                  column2=true
                  indexNum2=chosenindex
                }else{
                  column1=true;
                  indexNum1=chosenindex
                }

                document.querySelector("#selectedSheetName").innerHTML=ele.getAttribute("cName")
                document.querySelector("#columnSection").classList.remove("d-none")
                document.querySelector("#columnDropdown").innerHTML=""
                 const attr=ele.getAttribute('pap').split(',');
                
                 
                 document.querySelector(".hldInd").setAttribute("ind",chosenindex)
                attr.map((val,i)=>{
                     const temp=`
               <option value="${val}" class="options">${val}</option>
               ` 
               document.querySelector("#columnDropdown").innerHTML+=temp;
                })
              
              })
            });
            //gnb()
        }

        
function displ(){
  //  const{a,b}=allData

let gn;

let tj='';

if (column1 && !column2) {
  tj=Col1
  gn=allData[indexNum1]['data']
   colIndex1=gn[0].indexOf(tj)
}
if (column2) {
  tj=Col2
  gn=allData[indexNum2]['data']
 colIndex2=gn[0].indexOf(tj)
}

;

const indf=gn[0].indexOf(tj)




   const tmpDiv=document.createElement("div");
      const tmpP=document.createElement("h4");
      tmpDiv.className="col"
   tmpP.innerHTML=tj;
   tmpP.className="border-bottom text-primary"

   tmpDiv.appendChild(tmpP)
 
   document.querySelector(".hd").appendChild(tmpDiv)


gn.shift()


 gn.slice(0,50).forEach((ele,i) => {
   let tmpHd=document.createElement("p");
  tmpHd.className="border-bottom fs-6"
   tmpHd.innerHTML=ele[indf];

  tmpDiv.appendChild(tmpHd)
}); 


if (column1 && column2) {
  document.querySelector(".ml").classList.remove("d-none")
}

}








// handle alert for confirm column select
       document.querySelector(".cc").addEventListener('click',()=>{
       const chosenCol=document.querySelector("#columnDropdown").value;
          const chosenSht=document.querySelector("#selectedSheetName").innerHTML;
       
       let yest = confirm(`You selected column: ${chosenCol} from sheet: ${chosenSht}` )

         if (yest) {
            columns.map((eve)=>{
         if ( eve['name']==chosenSht) {
          selectedSht.push(eve['colName'])
         }
         })
        
         if (column2) {
          document.querySelector(".col2").innerHTML=chosenCol;
           Col2=chosenCol;
         sheetN2=chosenSht;
         }else{
           document.querySelector(".col1").innerHTML=chosenCol;
            Col1=chosenCol;
         sheetN1=chosenSht;
         }

         if (column1== true && column2==true) {
          document.querySelector(".cc").disabled=true
         }

        document.querySelector(".prevCol").innerHTML=chosenCol
         
        let hldInd= document.querySelector(".hldInd").getAttribute("ind");
        const mgcls="#st"+hldInd;
      
       document.querySelector(mgcls).classList.add("dactive")
        


         displ()
         }


       
    })

//check


document.querySelector("#check").addEventListener('click', () => {
let gj;
  const srt=new Set()
 
  selectedSht.forEach((e)=>{
    e.map(e=>{
     srt.add(e)
    })
  });
let arr=Array.from(srt)
arr.push('similarity')

  let exportData=[];
  let gn1 = allData[indexNum1]['data'];
  let gn2 = allData[indexNum2]['data'];


  // Improved cleaner
  function cleanValue(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '')                      // Remove all spaces
      .replace(/\b(tab|inj|cap|mg|ml|gm|syrub|syrup|tablet|injection|cream|forte|iv|inj)\b/gi, '') // Common medical suffixes
      .replace(/[^a-z0-9]/gi, '');              // Strip special chars
  }

 gn1.forEach((val1, i1) => {
  let rawV1 = val1[colIndex1]?.toString() || '';
  let v1 = cleanValue(rawV1);

  let bestMatchIndex = -1;
  let highestSimilarity = 0;

  gn2.forEach((val2, i2) => {
    let rawV2 = val2[colIndex2]?.toString() || '';
    let v2 = cleanValue(rawV2);

    const distance = levenshtein.get(v1, v2);
    const maxLen = Math.max(v1.length, v2.length) || 1;
    const similarity = 1 - (distance / maxLen);

    if (similarity > highestSimilarity) {
      highestSimilarity = similarity;
      bestMatchIndex = i2;
    }
  });

  if (highestSimilarity >= 0.6 && bestMatchIndex !== -1) {
    let ty = allData[indexNum1]['data'][i1].concat(allData[indexNum2]['data'][bestMatchIndex]);
    ty.push(highestSimilarity.toFixed(2));

    let exportObj = {};
    arr.forEach((key, i) => {
      exportObj[key] = ty[i];
    });
    exportData.push(exportObj);
  }
});

console.log(exportData)
 
  const newWb=XLSX.utils.book_new();
  const newWs=XLSX.utils.json_to_sheet(exportData);

  if (XLSX.utils.book_append_sheet(newWb,newWs,'Result')) {
   console.log("ready") 
   let bon=document.querySelector(".bon")
   bon.focus()
   bon.style.display="block";
   bon.addEventListener("click",()=>{
 XLSX.writeFile(newWb,'matches_result.xlsx')
})
  }


  
console.log("✅ File generated: matches_result.xlsx");


 
});
