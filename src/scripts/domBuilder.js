const domBuilder = {
    appendInputForm() {
        htmlOptionTag=''
const displayContainer= document.querySelector('#display-container')
let inputForm=`<article>
    <fieldset>
    <label for="lego__creator">Creator:</label>
    <input id="lego__creator" name="lego__creator" type="text" autofocus />
    </fieldset>
    <fieldset>
    <label for="lego__name">Name:</label>
    <input id="lego__name" name="lego__name" type="text" autofocus />
    </fieldset>
    <fieldset>
    <label for="lego__shape">Shape:</label>
    <input id="lego__shape" name="lego__shape" type="text" autofocus />
    </fieldset>
    <fieldset>
    <label for="lego__color">Color:</label>
    <select id="lego__color">${htmlOptionTag}</select>
    </fieldset>
    <button class="lego__save">Save Lego Creation</button>
    </article>`
displayContainer.innerHTML=inputForm
let legoColor=document.querySelector("#lego__color")
data.getColors()
.then(arrayofColors=>{
    arrayofColors.forEach(color => {
        htmlOptionTag +=`<option value=${color.id}>${color.name}</option>`
        legoColor.innerHTML=htmlOptionTag
    })})
}
}
/* <select>${htmlOptionTag}</select> */
/* <label for="lego__color">Color:</label>
    <input id="lego__color" name="lego__color" type="text" autofocus /> */
