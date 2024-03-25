var order = []

if (order.length == 0){
    divnoitem.style.display = 'block'
    divnoitem.innerHTML = `
    <p class="alert alert-danger text-center p-2">No items added yet</p>
`
}
function submitItem() {
    if (items.value === ''){
        err.style.display = 'block'
    }else {
        divTable.style.display = 'block'
        err.style.display = 'none'
        divnoitem.style.display = 'none'
        showOrder.style.display = 'block'
        order.push(items.value)
        console.log(order);
        document.getElementById('items').value = ''
        displayITem()
    } 
    }


function delLast(){
    order.pop()
    console.log(order);
    displayITem()
}
function delFirst() {
    order.shift()
    displayITem()
}
function delAny() {
    console.log(delItems.value);
    if (delItems.value === ''){
        errThird.style.display = 'block'
    } else{
        errThird.style.display = 'none' 
        order.splice(delItems-1,1)
        console.log(order);
        document.getElementById('delItems').value = ''
        displayITem()
        }
}
function add() {
   console.log(firstItems.value);
   if (firstItems.value === ''){
    errFirst.style.display = 'block'
   }else {
    errFirst.style.display = 'none'
    order.push(firstItems.value)
    console.log(order);
    document.getElementById('firstItems').value = ''
    displayITem()
} 
}
function delAll() {
    var confirmation = confirm('Are you sure you want to delete. This action is irreversible')
    console.log(confirmation);
    if (confirmation === true) {
      order.splice(0, order.length)
      displayITem()
    }
}
function Edit() {
    if (editNumber.value === '' || newValue.value === '') {
        errSecond.style.display = 'block'
    }  else {
        if((Number(editNumber.value)) > order.length) {
            alert("Haba, fear God now")
        } else {
            var indexNew = Number(document.getElementById('editNumber').value)
            var replacement = document.getElementById('newValue').value
            errSecond.style.display = 'none'
            console.log(indexNew, replacement);
            order.splice(indexNew-1, 1, replacement)
            displayITem()
        }
    }
}



function displayITem() {
    show.innerHTML = ''
    for ( var i = 0; i < order.length; i++) {
        console.log(order[i])
        show.innerHTML += `
        <tr>
                             <th tableWord = 'row'>${i + 1}</th>
                          <td style = "color: black;">${order[i]}</td>
                          </tr>
                      `
    } 
   }