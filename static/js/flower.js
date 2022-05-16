const element = document.getElementById("flower");

onload = () => {
    const c = setTimeout(() => {
        element.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};