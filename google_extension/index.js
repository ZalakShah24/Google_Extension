// chrome://extensions/

let myLeads = []

// myLeads = JSON.parse(myLeads)
// myLeads.push("www.lead2.com")
// myLeads.push("www.lead2.com")
// myLeads = JSON.stringify(myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("del-btn")
const tabBtn = document.getElementById("tab-btn")

// localStorage.setItem("myName","Zalak Shah")
// let l_name = localStorage.getItem("myName")
// console.log(l_name)
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", () => {
    console.log("Button clicked from event listner!")
    myLeads.push(inputEl.value)
    inputEl.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
      
    render(myLeads);
    // console.log(myLeads)

})

delBtn.addEventListener("dblclick", () => {
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

tabBtn.addEventListener("click", () => {
    // console.log(tabs)
    // myLeads.push(tabs[0].url)
    // localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    // render(myLeads)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
        
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length ; i++){
        listItems += ` <li>
                            <a target = '_blank' href = '${leads[i]}'> 
                                ${leads[i]}
                            </a>
                        </li>
                        `
        console.log(listItems)
    // create an elememt
    // set text content
    // append at ul
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}
    ulEl.innerHTML = listItems
    
}