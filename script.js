let url= "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pPMQAfNU1ynI8OKb3gmH91XDh6mc56Ke"
let mekala = async ()=>{
    
    try{

        let req = await fetch(url)
        // console.log(req)//
        let resp= await req.json()
        // console.log(resp)//
         callTheResult(resp)

    }catch(err){

        console.log(err)

    }
}


mekala()


function callTheResult(data){
         console.log(data)

  let main= document.querySelector(".container")


  let row= document.createElement("div")
  row.setAttribute("class","row")

   
 data.results.books.forEach(element => {
    
    
        // console.log(element)
        // console.log(element.author)
        // console.log(element.book_image)
        // console.log(element.description)
        // console.log(element.publisher)
        // console.log(element.rank)

      let coloumn= createMyElement("div","col-sm-12 col-md-6 col-lg-4 col-xl-4")

      let cardBg= createMyElement("div","card bg-dark text-white")

      let img=createMyElement("img","card-img")
      img.src=element.book_image;

      let cardImg=createMyElement("div","card-img-overlay")

      let h5Tag=createMyElement("h5","card-title")
      h5Tag.innerHTML=element.author;

      let pTag=createMyElement("p","card-text")
      pTag.innerHTML=element.description;

      let pTagg=createMyElement("p","card-text")
      pTagg.innerHTML=element.publisher;
      
      cardImg.append(h5Tag,pTag,pTagg)
      cardBg.append(img,cardImg)
      coloumn.append(cardBg)
      row.append(coloumn)
      main.append(row)
    
            
        });
    

}



function createMyElement(ele,elemclass,elemId){


    let elem= document.createElement(ele)
    elem.setAttribute("class",elemclass)
    elem.setAttribute("id",elemId)
    return elem;

}