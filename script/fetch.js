let  searchimages = async (api, value) =>
{
   // let query =document.getElementById("search").value

    try{
      
        let res= await fetch(` https://api.unsplash.com/search/photos/?query=${value}&per_page=30&client_id=${api}`)

        let data=await res.json();
        //console.log(data)
        return data;
    }
    catch(err)
    {

    }
}

    let append = (data, container) =>
    {
        data.forEach (({alt_description,urls:{small}}) =>{
            let div=document.createElement("div")

            let img1=document.createElement("img")
            img1.src=small;
            img1.style.width="100%"
            img1.style.height="250px";

            let h4 =document.createElement("h4")
            h4.innerText=alt_description
            div.append(img1,h4)

            container.append(div)
        })
    }
export {searchimages,append}