images = ["./bike_sharing/bike_sharing.png", "./brain/brain2.png", "./feature_selection/feature.png", "time_series/time_series.png","parallel_matmat_mul/parallel.png", "circle/circle.png","polynomial/polynomial.png","image_search_engine/image_search.png"]

function project(title, image, link) {
    this.title = title;
    this.image = image;
    // this.info = info;
    this.link = link;

}

let bike_sharing = new project("Kaggle Bike Sharing Project",images[0], "./bike_sharing", "Bike Sharing Demand: Forecast use of a city bikeshare system" );
let brain = new project("Age Regression From Brain MRI", images[1],"./brain" ,"Volume-based regression is implemented using brain structure segmentation." )
let feature_selection = new project("Feature Selection on Parkinsons Disease and Residual Building Datasets", images[2],"./feature_selection", "Feature selection methods are implemented on the datasets to get the most important features.")
let time_series = new project("Time Series Analysis of a Restaurant", images[3], "./time_series");
let parallel_matmat_mul = new project("Parallel Matrix-Matrix-Multiplication Using C Language", images[4],"./parallel_matmat_mul");
let circle = new project("Interactive Program Drawing a Circle From 3 Points", images[5],"./circle");
let polynomial = new project("Interactive Program Drawing Polynomials ", images[6],"./polynomial");
let image_search= new project("Image Search Engine", images[7],"./image_search_engine");

projects = [image_search, bike_sharing, brain, feature_selection, time_series, parallel_matmat_mul, circle, polynomial]


let projects_list = document.createElement("ul");
projects_list.classList.add("project_list");
let listSection = document.getElementById("projects_list");
// document.main.appendChild(projects_list);
let main = document.querySelector("main");

main.appendChild(projects_list);


for (let i=0; i<projects.length;i++) {
    let listElement = document.createElement("li");
    projects_list.appendChild(listElement);

    let linkElement = document.createElement("a");
    linkElement.classList.add("project-item");
    linkElement.href= projects[i].link;
    listElement.appendChild(linkElement);

    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    linkElement.appendChild(projectDiv);


    let projectArticle = document.createElement("article");
    projectArticle.classList.add("title");
    projectDiv.appendChild(projectArticle);


    const projectTitle = document.createElement("h4");
    projectTitle.innerHTML = projects[i].title;

    projectArticle.appendChild(projectTitle);

    let Img = document.createElement("img");
    Img.src = projects[i].image;
    projectDiv.appendChild(Img);
}


//ul class= project_list flex
//   li
//      a class=project-item flex
//          article class=title flex
//              h4    
//          img



