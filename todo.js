var button = document.getElementById('btn')
var sec =    document.getElementById('td')
var txtbx = document.getElementById('enter')
var div = document.getElementsByTagName('div')

button.addEventListener("click", add)
div[0].addEventListener("click", done)


function done(e) {
    console.log('agaya ithey')
    e.target.classList.toggle("cut")
    console.log("target is"+e.target.nodeName)
}

function gettxt() {
    return txtbx.value
}

function settxtEmpty() {
    txtbx.value = ''
}

function add() {
    var val = gettxt()
    if (txtbx.value.length != 0)
    {
    var chkbx = document.createElement("input")
    chkbx.type = "checkbox"
    chkbx.value = "test"
    chkbx.id = "test"
    label = document.createElement("label")
    label.appendChild(chkbx)
    label.appendChild(document.createTextNode(" " +val))
    br = document.createElement('br')
    //chkbx.appendChild(document.createTextNode("Test"))
    //li.addEventListener("click",tog)
    //sec.appendChild(chkbx)
    sec.appendChild(label)
    sec.appendChild(br)
    settxtEmpty()
    console.log("ul node type is " + ul.nodeName +
            "li node name is" + li.nodeName)
    }
}