
function onOff(tag) {
  document
    .querySelector(tag)
    .classList
    .toggle("hide")

    document
      .querySelector("body")
      .classList
      .toggle("hideScroll")

    document
      .querySelector(tag)
      .classList
      .toggle("addScroll")
}

function checkFields(event){
  console.log(event)
}