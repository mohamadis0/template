

fetch('https://templateapi.onrender.com')
.then(response => response.json())
.then(json => {
    for (let i = 0; i < json.length; i++) {
        var content =`<div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${json[i].image}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${json[i].name}</h5>
                    <!-- Product price-->
                    ${json[i].price}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                 <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
            </div>
        </div>
    </div>`

    var div=document.createElement('div');
    div.innerHTML=content;
          document.getElementById('first').appendChild(div);
    }

    
         
})