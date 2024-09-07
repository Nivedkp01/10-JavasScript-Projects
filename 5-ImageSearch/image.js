const searchBox=document.querySelector('.searchBox')
const accessKey=FiTyQbMhcT-rZeyhYDckVZ_375hIDE1lete8T_c78sE;
let page=1;
async function searchImages(){
    keyWord=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}`
    const response=await fetch(url)
    const data=await response.json()

    console.log(data)
}

document.querySelector('.btn').addEventListener('submit',(e)=>{
    e.preventDefault()
    page=1
    searchImages();
})