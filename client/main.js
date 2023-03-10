const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const inspirationInput = document.getElementById("inspirations")

const errCallback = err => console.log(err)

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

const postInspiration = (body) => axios.post("http://localhost:4000/api/inspiraton/").then(inspirationInput).catch(errCallback)
    