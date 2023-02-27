alert('Hello, world!');
console.log(
    alert('Welcome')
);
/*$(document).ready.function(){
    $("a").on("click", funtion()
          { if(this.hash !== "")
    preventDefault();
}
    var hash = this.hash;
}

    $("html, body").animate(
        {
            scrollTop: $(hash).offset().top,
        },
        800, function
        () => {
        window.location.hash = hash
    });
});*/

const year = document.querySelector('#current-year')

year.innerHTML = new Date().getFullYear()
