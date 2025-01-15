
//fungsi setiap input
const userInput = document.getElementById('numInput')
const addBtn = document.getElementById('add-btn')
const subBtn = document.getElementById('sub-btn')
const mulBtn = document.getElementById('mul-btn')
const divBtn = document.getElementById('div-btn')

//fungsi setiap output
const curResOutput = document.getElementById('curResult')
const curCalcOutput = document.getElementById('curCalc')

//proses fungsi output
function outputRes(res, txt){
    curResOutput.textContent = res
    curCalcOutput.textContent = txt
}