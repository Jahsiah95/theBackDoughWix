function dom(){
    const hero = document.getElementById("hero")
    const prompt = document.getElementById("prompt") 
    const container = document.getElementById("container")

    function scroll(){
        container.scrollIntoView({behavior: "smooth", block:"end"});
    }

    prompt.onclick = function(){
        container.style.display = "flex";
        scroll()
    }
}

dom()