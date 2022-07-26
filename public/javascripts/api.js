const sectionProj1 = document.querySelector('#proj1');
const sectionProj2 = document.querySelector('#proj2');
// console.log(sectionProj)
function getApiGithub() {
    fetch('https://api.github.com/users/Player35Oficial/repos')
    .then(async res => {
        if(!res.ok) {
            throw new Error(res.status)
        }

        // Pegar os dados do json
        var data = await res.json()

        // console.log(data) // tudo OK
        function repo_id(value) {
            if(value.id == "512067296")
            return value
            console.log(value)
        }

        var idRepos = data.filter(repo_id);
        // console.log(idRepos)
        idRepos.forEach(item => {

            // let sectionProj_div = document.createElement('div');
            sectionProj1.innerHTML += `
            <a href="${item.html_url}" target="_blank">

                        <section class="detalhes-projeto">
                            <section class="title-projeto">
                                <img src="./images/folder.svg" alt="" class="projeto-icon">
                                <p id="rp_title01">${item.name}</p>
                            </section>

                            <section class="description-projeto"> 
                                <p>${item.description}</p> 
                            </section>

                            <section class="features-repo">
                                <section class="features-repo-img">
                                    
                                    <img class="projeto-icon" src="./images/star.svg" alt="">
                                    <p>${item.stargazers_count}</p>
                                    
                                    <img class="projeto-icon" src="./images/git-branch.svg" alt="">
                                    <p>${item.forks_count}</p>

                                </section>

                                <section class="feature-repo-tech">
                                    <div class="tech-circle"></div>
                                    <p>${item.language}</p>
                                </section>
                            </section>
                        </section>
                    </a>
            `

            // sectionProj_div.append(sectionProj)
        })

        // pt 2
        function repo_id2(value) {
            if(value.id == "499358067")
            return value
            console.log(value)
        }

        var idRepos = data.filter(repo_id2);
        // console.log(idRepos)
        idRepos.forEach(item => {

            // let sectionProj_div = document.createElement('div');
            sectionProj2.innerHTML += `
            <a href="${item.html_url}" target="_blank">

                        <section class="detalhes-projeto">
                            <section class="title-projeto">
                                <img src="./images/folder.svg" alt="" class="projeto-icon">
                                <p id="rp_title01">${item.name}</p>
                            </section>

                            <section class="description-projeto"> 
                                <p>${item.description}</p> 
                            </section>

                            <section class="features-repo">
                                <section class="features-repo-img">
                                    
                                    <img class="projeto-icon" src="./images/star.svg" alt="">
                                    <p>${item.stargazers_count}</p>
                                    
                                    <img class="projeto-icon" src="./images/git-branch.svg" alt="">
                                    <p>${item.forks_count}</p>

                                </section>

                                <section class="feature-repo-tech">
                                    <div class="tech-circle"></div>
                                    <p>${item.language}</p>
                                </section>
                            </section>
                        </section>
                    </a>
            `

            // sectionProj_div.append(sectionProj)
        })


    }).catch(e => console.log(e))
}
getApiGithub();