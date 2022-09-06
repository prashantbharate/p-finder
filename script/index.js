//link to frtch api   -  https://api.unsplash.com/search/photos/?query=car&per_page=20&client_id=ckP5OhPSzApA8n1BnEim36R20u7H2GRJZGqK0oVOTvY

const api="ckP5OhPSzApA8n1BnEim36R20u7H2GRJZGqK0oVOTvY"
import {navbar} from "../components/navbar.js"

let n=document.getElementById("navbar")

n.innerHTML=navbar();

import {searchimages,append} from "./fetch.js"

 let search = (e) =>
 {
     if(e.key ==="Enter")
     {
         let value=document.getElementById("search").value
       searchimages(api,value).then((data) =>
       {
           let container=document.getElementById("container")
        //console.log(data)
        container.innerHTML=null;
        append(data.results,container)
       });
      
     }
 }
 
 document.getElementById("search").addEventListener("keydown", search);

 let cat=document.getElementById("categories").children;


function csearch()
 {
   // console.log(this.id)
    searchimages(api,this.id).then((data) =>
    {
        let container=document.getElementById("container")
     //console.log(data)
     container.innerHTML=null;
     append(data.results,container)
    });
 }

 for(let el of cat)
 {
     el.addEventListener("click" , csearch)
 }
 /*
let  searchimages = async () =>
{
    let query =document.getElementById("query").value

    try{
      
        let res= await fetch(` https://api.unsplash.com/search/photos/?query=${query}&per_page=40&client_id=${api}`)

        let data=await res.json();
        console.log(data)
    }
    catch(err)
    {

    }
}
*/