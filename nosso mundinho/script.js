
function revelarSurpresa() {
    const surpresa = document.getElementById("surpresa");

    surpresa.style.display = "block";

    surpresa.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
