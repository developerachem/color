document.querySelector('#color_change_btn').addEventListener('click', function () {
    document.getElementById('body').style.backgroundColor = colorGenerator()
    document.getElementById('inputTag').value = colorGenerator()
})

document.querySelector('#copyButton').addEventListener('click', function () {
    let mainColor = document.getElementById('inputTag').value;
    navigator.clipboard.writeText(mainColor)

    custopElement(mainColor)
})