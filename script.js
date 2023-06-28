let access="qrD6T_vgwnSLFWxMgfvPhqDERRlh1EQ2EEBV2BAgRls"
 let input=document.querySelector('form input')
 let search=document.querySelector("form button")
 let searchresult=document.getElementById('results')
 let more=document.getElementById("more")

 let inputdata=""
 let page=1;

  async function searchimage(){
    inputdata=input.value
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${access}&per_page=9`
    console.log(url+' this is url')
    const response1=  await fetch(url)
    console.log(response1)
    const data=await response1.json()
    console.log(data)
    console.log(typeof(data))
    const results=data.results
    console.log(results)
    console.log(typeof(results))
    if(page===1){
        searchresult.innerHTML=""
    }
     results.map((result)=>{
        let imagewrap=document.createElement('div')
        imagewrap.classList.add('searchresult')
        let image=document.createElement('img')
        image.src=result.urls.small
        // image.src='https://www.whatsappimages.in/wp-content/uploads/2022/08/aesthetic-girl-wallpaper.jpg'

        imagewrap.appendChild(image)
        document.getElementById('results').appendChild(imagewrap)
    })
    more.style.display="block"
    page++
}
search.addEventListener('click',(event)=>{
    event.preventDefault
    page=1
    searchimage()
})
more.addEventListener('click',()=>{
 
    searchimage()
})