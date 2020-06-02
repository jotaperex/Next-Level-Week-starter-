function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then((res)=>{return res.json()})
    .then(estados =>{
        for(const estado of estados){
            ufSelect.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`
        }
    } )
}

populateUFs()

function pcidades(event){
    const cidSelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    console.log(event.target.value)
    const ufvalue = event.target.value
    const indexofselectedstate = event.target.selectedIndex
    const statevalue = event.target.options[indexofselectedstate].text
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`
    fetch(url)
    .then((res)=>{return res.json()})
    .then(cidades =>{
        for(const cidade of cidades){
           cidSelect.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`
        }
        cidSelect.disabled = false
    } )
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change",pcidades) 
