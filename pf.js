const projects = [
    {
        proName: 'Rock Paper Scissor',
        img: 'Screenshot 2024-09-05 181040.png',
        link: 'https://vardhan2k3.github.io/Rock-Paper-Scissor/',
        list: ['Html','CSS','Java Script']
    },
    {
        proName: 'To-do List',
        img: 'Screenshot 2024-09-05 181349.png',
        link: 'https://vardhan2k3.github.io/To-do/',
        list: ['Html','CSS','Java Script']
    },
    {
        proName: 'Youtube Clone',
        img: 'youtubelogo.png',
        link: 'https://vardhan2k3.github.io/youtubeClone/',
        list: ['Html','CSS']
    },
    {
        proName: 'Calculator',
        img: 'calculator.png',
        link: 'https://vardhan2k3.github.io/Calculator/',
        list: ['Html','CSS','Java Script'] // calculator
    },
    {
        proName: 'Tic Tac Toe',
        img: 'calculator.png',
        link: 'https://vardhan2k3.github.io/Tic-Tac-Toe/',
        list: ['Html','CSS','Java Script'] // calculator
    }
];

let projectRender = '';
projects.forEach(project => {
    projectRender += `
        <div class="project">
            <img src="icons and images/${project.img}" class="project-img">
            <div class="project-info">
                <div class="project-title">
                    ${project.proName}
                </div>
                <div>
                    <ul class="tool-list">
                        ${getList(project.list)}
                        <li><a href="${project.link}" class="pro-link">Visit</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('.projects').innerHTML = projectRender;

function getList(list){
    let html = '';
    list.forEach(i => {
        html += `
            <li>${i}</li>
        `;
    });
    return html;
}
