const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const motivationBtn = document.getElementById("motivation")
const postForm = document.querySelector('form')
const inspirationInput = document.getElementById('inspirations')
const deleteForm = document.getElementById('delete')
const deleteNameInput = document.getElementById("delete-inspiration")

postForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const maBod ={
        name: inspirationInput.value,
    }

    axios.post("http://localhost:4000/api/form", maBod)
    .then((result) => {
        alert('user added')
        console.log(result.data)
    })
    .catch(() => {
        console.log('back end did not worked')
    })
})


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
        })
}
    
fortuneBtn.addEventListener('click', getFortune)


const getMotivation = () => {
    axios.get("http://localhost:4000/api/motivation/")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

motivationBtn.addEventListener('click', getMotivation)


deleteForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let name = deleteNameInput.value

    axios.delete('http://localhost:4000/api/form/' + name)
    .then((result) => {
        alert("User with name " + name + " is no longer in database")
        console.log(result.data)
    })
})