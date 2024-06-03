function ModalWebshop() {
    let modalWebshop = document.getElementById("project-webshop");
    modalWebshop.classList.add("is-visible");
}

function ModalRoutesGO() {
    let modalRoutesgo = document.getElementById("project-routesgo");
    modalRoutesgo.classList.add("is-visible");
}

function ModalWPL() {
    let modalWPL = document.getElementById("project-wpl");
    modalWPL.classList.add("is-visible");
}

function ModalWPL2() {
    let modalWPL2 = document.getElementById("project-wpl2");
    modalWPL2.classList.add("is-visible");
}

document
    .getElementById("btn-close-webshop")
    .addEventListener("click", function () {
        document.getElementById("project-webshop").classList.remove("is-visible");
    });
document
    .getElementById("btn-close-routesgo")
    .addEventListener("click", function () {
        document.getElementById("project-routesgo").classList.remove("is-visible");
    });
document.getElementById("btn-close-wpl").addEventListener("click", function () {
    document.getElementById("project-wpl").classList.remove("is-visible");
});
document.getElementById("btn-close-wpl2").addEventListener("click", function () {
    document.getElementById("project-wpl2").classList.remove("is-visible");
});
