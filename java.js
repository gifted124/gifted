
let currentchild = document.querySelector('.current')


let = parent = currentchild.parentElement
console.log('parent alement',parent)

let children = parent.children
console.log('all children',children)

let nextsiblings = currentchild.nextElementSibling
console.log('next sibling',nextsiblings)

let prvsiblings = currentchild.nextElementSibling
console.log('next sibling',prvsiblings)


function Validateform(e) {
    e.preventDefault()
    alert('form submitted')
    let fName = document.getElementById('f_name').value
    let lName = document.getElementById('l_name').value
    let password = document.getElementById('password').value

    let f_name_err = document.getElementById('f_name_err')
    let l_name_err = document.getElementById('l_name_err')
    let password_err = document.getElementById('password_err')

    f_name_err.textContent = '';
    l_name_err.textContent = '';
    password_err.textContent ='';


    let isvalid = true
    let points = 0

    if (fName === '') {
        f_name_err.textContent = "fist name is required"
        isvalid = false
    } else if (fName === "john") {
        points += 10
    }
    
    if (lName === '') {
        l_name_err.textContent = "account num"
        isvalid = false
    } else if (lName === "sam") {
        points += 10
    }
    if (password === '') {
        password_err.textContent = "password is required"
        isvalid = false
    }

    if (fName === '') {
        l_name_err.textContent = "last name"
        isvalid = false
    }
    

    if(isvalid && points >= 20){
        loan.textContent = "congrates your loan has been awarded"
        console.log(points)
    }else{
          loan.textContent = "better luck next time"
    }
}