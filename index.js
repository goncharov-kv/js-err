document.addEventListener('DOMContentLoaded', () => {

const QAbutton = document.querySelector('.qa-worker');
const JSbutton = document.querySelector('.js-worker');
const JavaButton = document.querySelector('.java-worker');
const PythonButton = document.querySelector('.python-worker');

const createStd = (stdData) => {
    const {id, fio, date, competitionType} = stdData;
    
    const std = document.createElement('div')
    std.innerHTML = `
    <div class"wrapper-std-inf">
    <div class"block-inf">${id}</div>
    <div class"block-inf">${fio}</div>
    <div class"block-inf">${date}</div>
    </div>
    `
    return std
}
const ButtonClickJAVA = () => {
    fetch('http://goiteens.club/hse/back/students.php')
    .then(data => data.json())
            .then(data => {
                const student = document.querySelector('.student')
                for(let i = 0;i < data.length;i++) {
                    if(data[i].competitionType === "JAVA") {
                        const stdJava = {
                            ...data[i],
                            id: i + 1
                        };
                        const newStd = createStd(stdJava);
                        student.innerHTML += newStd
                        
                    }


                }
                






            





})


}
JavaButton.addEventListener('click', ButtonClickJAVA);
});