// document.getElementById("header").innerText = "my plan is going to be success";
// document.getElementsByClassName("para");
// console.dir(header );
//     console.log(header);

//     let firstele=document.querySelector(".para");
//     console.dir(firstele);

//     let allele=document.querySelectorAll(".para");
//     console.dir(allele);


let myclass=document.querySelector("div");
// console.dir(myclass);
// console.log(myclass);
// console.log(myclass[2]);

// let idx=1;
// for(  div of myclass){
// div.innerText=`div number is ${idx} `;
// idx++;
// }
// console.dir(myclass);
// console.log(myclass[div]);

myclass.style.fontSize = "30px";
myclass.style.backgroundColor = "pink";
myclass.style.borderRadius="0%";

myclass.innerText ="suresh ks a super man"



let newHead= document.createElement("h1");
newHead.innerHTML="<i>suresh is a genius</i>";

document.querySelector("div").after(newHead);


let newtag=document.createElement("p");
newtag.innerHTML= "<p>Lorem bbckjndCBKD nncjckdCbdskjc jmbcjbzdcjbdjsCbjdsc bj,xcjszjbckcc xkjcjchb icbjbcjbdj  bchdbcjbDC ZXjchbzjcbs</p>";

document.querySelector('body').append(newtag);

newtag.remove("p");


let newbtn=document.createElement("button");
newbtn.innerText="click me!";
document.querySelector("body").prepend(newbtn);


newbtn.style.backgroundColor="red";
newbtn.style.color="white";