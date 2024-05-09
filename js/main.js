let result = []
let searchByName = document.getElementById("searchByName")
let searchByLetter = document.getElementById("searchByLetter")
let x = ``

async function getData(x) {
    let date = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
    result = await date.json()
    console.log(result);
    let box = ``
    for (let i = 0; i < result.meals.length; i++) {
        
        box += `
        <div onclick="getMealData('${result.meals[i].strMeal}')" class="crd col-md-3 my-3">
        <img src="${result.meals[i].strMealThumb}" class="rounded w-100"
            alt="">
        <div id="crdCap" class=" rounded ">
            <div class="d-flex align-content-center flex-wrap justify-content-start h-100">
                <div >
                    <h4 class="px-3">${result.meals[i].strMeal}</h4>
                </div>
            </div>
        </div>
    </div>
    
        `
    }
    document.getElementById('home').innerHTML = box
}
getData(x)
async function getMealData(demo) {
    
    let date = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${demo}`)
    result = await date.json()
    console.log(result);
    let tags = ``
    if (result.meals[0].strTags != null) { tags = `<li class="alert alert-danger m-2 p-1">${result.meals[0].strTags}</li>` }
    let box = `  
        <div class="row main-color">
    <div class="col-md-4">
        <img class="w-100 rounded-3" src="${result.meals[0].strMealThumb}" alt="">
        <h3>${demo}</h3>
    </div>
    <div class="col-md-8">
        <h3>Instructions</h3>
        <p>${result.meals[0].strInstructions}</p>
        <h3><span class="fw-bolder">Area : </span>${result.meals[0].strArea}</h3>
        <h3><span class="fw-bolder">Category : </span>${result.meals[0].strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
            <li class="alert alert-info m-2 p-1">${`${result.meals[0].strMeasure1} ${result.meals[0].strIngredient1}`}</li>
            <li class="alert alert-info m-2 p-1">${`${result.meals[0].strMeasure2} ${result.meals[0].strIngredient2}`}</li>
            <li class="alert alert-info m-2 p-1">${`${result.meals[0].strMeasure3} ${result.meals[0].strIngredient3}`}</li>
            <li class="alert alert-info m-2 p-1">${`${result.meals[0].strMeasure4} ${result.meals[0].strIngredient4}`}</li>
            <li class="alert alert-info m-2 p-1">${`${result.meals[0].strMeasure5} ${result.meals[0].strIngredient5}`}</li>
            <li class="alert alert-info m-2 p-1">${`${result.meals[0].strMeasure6} ${result.meals[0].strIngredient6}`}</li>
            <li class="alert alert-info m-2 p-1">${`${result.meals[0].strMeasure7} ${result.meals[0].strIngredient7}`}</li>
            <li class="alert alert-info m-2 p-1">${`${result.meals[0].strMeasure8} ${result.meals[0].strIngredient8}`}</li>
            <li class="alert alert-info m-2 p-1">${`${result.meals[0].strMeasure9} ${result.meals[0].strIngredient9}`}</li>
            <li class="alert alert-info m-2 p-1">${`${result.meals[0].strMeasure10} ${result.meals[0].strIngredient10}`}</li>
            <li class="alert alert-info m-2 p-1">${`${result.meals[0].strMeasure11} ${result.meals[0].strIngredient11}`}</li>
        </ul>
        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">       
        ${tags}
        </ul>
        <a target="_blank" href="${result.meals[0].strYoutube}" class="btn btn-success">Source</a>
        <a target="_blank" href="${result.meals[0].strYoutube}" class="btn btn-danger">Youtube</a>
    </div>
</div>
    `
    document.getElementById('home').innerHTML = box
}
async function getCategoryData(demo) {
    
    let date = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${demo}`)
    result = await date.json()
    console.log(result);
    let box = ``
    for (let i = 0; i < result.meals.length; i++) {
        
        box += `
        <div onclick="getMealData('${result.meals[i].strMeal}')" class="crd col-md-3 my-3">
        <img src="${result.meals[i].strMealThumb}" class="rounded w-100"
            alt="">
        <div id="crdCap" class=" rounded ">
            <div class="d-flex align-content-center flex-wrap justify-content-start h-100">
                <div >
                    <h4 class="px-3">${result.meals[i].strMeal}</h4>
                </div>
            </div>
        </div>
    </div>
    
        `
    }
    document.getElementById('home').innerHTML = box
}
async function getAreaData(demo) {
    
    let date = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${demo}`)
    result = await date.json()
    console.log(result);
    let box = ``
    for (let i = 0; i < result.meals.length; i++) {
        
        box += `
        <div onclick="getMealData('${result.meals[i].strMeal}')" class="crd col-md-3 my-3">
        <img src="${result.meals[i].strMealThumb}" class="rounded w-100"
            alt="">
        <div id="crdCap" class=" rounded ">
            <div class="d-flex align-content-center flex-wrap justify-content-start h-100">
                <div >
                    <h4 class="px-3">${result.meals[i].strMeal}</h4>
                </div>
            </div>
        </div>
    </div>
    
        `
    }
    document.getElementById('home').innerHTML = box
}
async function getIngredientsData(demo) {
    
    let date = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${demo}`)
    result = await date.json()
    console.log(result);
    let box = ``
    for (let i = 0; i < result.meals.length; i++) {
        
        box += `
        <div onclick="getMealData('${result.meals[i].strMeal}')" class="crd col-md-3 my-3">
        <img src="${result.meals[i].strMealThumb}" class="rounded w-100"
            alt="">
        <div id="crdCap" class=" rounded ">
            <div class="d-flex align-content-center flex-wrap justify-content-start h-100">
                <div >
                    <h4 class="px-3">${result.meals[i].strMeal}</h4>
                </div>
            </div>
        </div>
    </div>
    
        `
    }
    document.getElementById('home').innerHTML = box
}


$('#searchByName').keyup(() => {
    getData(searchByName.value)
})
$('#searchByLetter').keyup(() => {
    async function getDataByFLetter(x) {
        let date = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${x}`)
        result = await date.json()
        console.log(result);
        let box = ``
        for (let i = 0; i < result.meals.length; i++) {
            box += `
            <div class="crd col-md-3 my-3">
            <img src="${result.meals[i].strMealThumb}" class="rounded w-100"
                alt="">
            <div id="crdCap" class=" rounded ">
                <div class="d-flex align-content-center flex-wrap justify-content-start h-100">
                    <div>
                        <h4 class="px-3">${result.meals[i].strMeal}</h4>
                    </div>
                </div>
            </div>
        </div>
        
            `
        }
        document.getElementById('home').innerHTML = box
    }
    getDataByFLetter(searchByLetter.value)
})
$('#colseIcon').click(() => {
    $('#navBox').hide(500)
    $('#openIcon').show()
    $('#colseIcon').hide()
    $('#listItem1').hide(500)
    $('#listItem2').hide(750)
    $('#listItem3').hide(1000)
    $('#listItem4').hide(1250)
    $('#listItem5').hide(1500)
})
$('#openIcon').click(() => {
    $('#navBox').show(500)
    $('#listItem1').slideDown(500)
    $('#listItem2').slideDown(750)
    $('#listItem3').slideDown(1000)
    $('#listItem4').slideDown(1250)
    $('#listItem5').slideDown(1500)
    $('#colseIcon').show()
    $('#openIcon').hide()

})
$('#searchLink').click(() => {
    $('#searchByName').show()
    $('#searchByLetter').show()
    $('#navBox').hide(1000)
    $('#openIcon').show()
    $('#colseIcon').hide()
    $('#listItem1').hide(700)
    $('#listItem2').hide(800)
    $('#listItem3').hide(900)
    $('#listItem4').hide(1000)
    $('#listItem5').hide(1100)

})
$('#categoriesLink').click(() => {
    $('#home').show()
    document.getElementById("contact").classList.add("d-none")
    async function getCategories() {
        let date = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        result = await date.json()
        console.log(result);
        let box = ``
        for (let i = 0; i < result.categories.length; i++) {
            box += `
            <div onclick="getCategoryData('${result.categories[i].strCategory}')" class="crd col-md-3 my-3">
            <img src="${result.categories[i].strCategoryThumb}" class="rounded w-100"
                alt="">
            <div id="crdCap" class=" rounded ">
                <div class="d-flex  flex-wrap justify-content-center h-100">
                    <div class="text-center">
                        <h4 class="px-3">${result.categories[i].strCategory}</h4>
                        <p>${result.categories[i].strCategoryDescription.slice(0, 135)}</p>
       
                    </div>
                </div>
            </div>
        </div>
        
            `
        }
        document.getElementById('home').innerHTML = box
    }
    getCategories()
    $('#navBox').hide(500)
    $('#openIcon').show()
    $('#colseIcon').hide()
    $('#listItem1').hide(500)
    $('#listItem2').hide(750)
    $('#listItem3').hide(1000)
    $('#listItem4').hide(1250)
    $('#listItem5').hide(1500)
    $('#searchByName').hide()
    $('#searchByLetter').hide()
})
$('#areaLink').click(() => {
    $('#home').show()
    document.getElementById("contact").classList.add("d-none")
    async function getArea() {
        let date = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        result = await date.json()
        console.log(result);
        let box = ``
        for (let i = 0; i < result.meals.length; i++) {
            box += `
            <div onclick="getAreaData('${result.meals[i].strArea}')"  class="crd col-md-3 my-3 main-color text-center">
                <i class="fa-solid fa-house-laptop fa-4x"></i>      
                <h4 class="px-3">${result.meals[i].strArea}</h4>
            </div> 
            `
        }
        document.getElementById('home').innerHTML = box
    }
    getArea()
    $('#navBox').hide(500)
    $('#openIcon').show()
    $('#colseIcon').hide()
    $('#listItem1').hide(500)
    $('#listItem2').hide(750)
    $('#listItem3').hide(1000)
    $('#listItem4').hide(1250)
    $('#listItem5').hide(1500)
    $('#searchByName').hide()
    $('#searchByLetter').hide()
})
$('#ingredientsLink').click(() => {
    $('#home').show()
    document.getElementById("contact").classList.add("d-none")
    async function getIngredients() {
        let date = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        result = await date.json()
        console.log(result);
        let box = ``
        for (let i = 0; i < 20; i++) {
            box += `
            <div onclick="getIngredientsData('${result.meals[i].strIngredient}')" class="crd col-md-3 my-3 main-color text-center">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>     
                <h4 class="px-3">${result.meals[i].strIngredient}</h4>
                <p>${result.meals[i].strDescription.slice(0, 135)}</p>
            </div>
            `
        }
        document.getElementById('home').innerHTML = box
    }
    getIngredients()
    $('#navBox').hide(500)
    $('#openIcon').show()
    $('#colseIcon').hide()
    $('#listItem1').hide(500)
    $('#listItem2').hide(750)
    $('#listItem3').hide(1000)
    $('#listItem4').hide(1250)
    $('#listItem5').hide(1500)
    $('#searchByName').hide()
    $('#searchByLetter').hide()
})
$('#contactLink').click(() => {
    document.getElementById("contact").classList.replace("d-none", "d-block")
    $('#home').hide()
    $('#navBox').hide(500)
    $('#openIcon').show()
    $('#colseIcon').hide()
    $('#listItem1').hide(500)
    $('#listItem2').hide(750)
    $('#listItem3').hide(1000)
    $('#listItem4').hide(1250)
    $('#listItem5').hide(1500)
    $('#searchByName').hide()
    $('#searchByLetter').hide()

})
{//regax
    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })

    let nameInputTouched = false;
    let emailInputTouched = false;
    let phoneInputTouched = false;
    let ageInputTouched = false;
    let passwordInputTouched = false;
    let repasswordInputTouched = false;
    function inputsValidation() {
        if (nameInputTouched) {
            if (nameValidation()) {
                document.getElementById("nameAlert").classList.replace("d-block", "d-none")

            } else {
                document.getElementById("nameAlert").classList.replace("d-none", "d-block")

            }
        }
        if (emailInputTouched) {

            if (emailValidation()) {
                document.getElementById("emailAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("emailAlert").classList.replace("d-none", "d-block")

            }
        }

        if (phoneInputTouched) {
            if (phoneValidation()) {
                document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

            }
        }

        if (ageInputTouched) {
            if (ageValidation()) {
                document.getElementById("ageAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("ageAlert").classList.replace("d-none", "d-block")

            }
        }

        if (passwordInputTouched) {
            if (passwordValidation()) {
                document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

            }
        }
        if (repasswordInputTouched) {
            if (repasswordValidation()) {
                document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

            }
        }


        if (nameValidation() &&
            emailValidation() &&
            phoneValidation() &&
            ageValidation() &&
            passwordValidation() &&
            repasswordValidation()) {
            submitBtn.removeAttribute("disabled")
        } else {
            submitBtn.setAttribute("disabled", true)
        }
    }
    function nameValidation() {
        return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
    }

    function emailValidation() {
        return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
    }

    function phoneValidation() {
        return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
    }

    function ageValidation() {
        return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
    }

    function passwordValidation() {
        return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
    }

    function repasswordValidation() {
        return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
    }
}



