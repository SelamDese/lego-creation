const eventListener = {
    handelFormSubmition(){
         let creator = document.querySelector("#lego__creator").value;
         let name = document.querySelector("#lego__name").value;
         let color = document.querySelector("#lego__color").value;
         let shape = document.querySelector("#lego__shape").value;
const legoObject = {
    creatorName: creator,
    legoName: name,
    legoColor: color,
    legoShape: shape
}
data.postLego(legoObject)
    }
}
