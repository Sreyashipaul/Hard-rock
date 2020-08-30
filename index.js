document.getElementById("search_button").addEventListener("click", searchResult)
    function searchResult() {
        document.getElementById("search_result").innerHTML = "";
    
        const songTitle = document.getElementById("titleInput").value;
        fetch(`https://api.lyrics.ovh/suggest/${songTitle}`)
        .then(response => response.json())
        .then(data => {
         for (i = 0; i <data.data.length; i++) {
            fetchdata = data;
        const title = data.data[i].title;
        const artist = data.data[i].artist.name;
        document.getElementById("search_result").innerHTML += `<div class="song-list">
                    
                                                              <h3 id="song-list-li">${title}</h3> 
                                                               <h5>${artist}</h5>
                                                               <a href="#lyrics"> <button id="btn" onClick="getLyrics(${i})"> Get Lyrics</button></a>  
                                                             </div>`
          

        
        if(i==9){
         break;
        }
                                                                                                                

    }
   });
}
function getLyrics(index) {
    document.getElementById("lyrics").innerHTML = "";

    const title = fetchdata.data[index].title;
    const artist = fetchdata.data[index].artist.name;

    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(response => response.json())
        .then(data => {
            const lyrics = data.lyrics;
            if (lyrics == undefined) {
                alert("Lyrics Not found");
            }
            document.getElementById("lyrics").innerHTML = `  <pre>${lyrics} </pre>`



        });
    document.querySelector("search-result").style.display = "block";
}

 


