function handleMenu(id) {
    const elm = document.querySelector(`.menu#${id}`);
    const popup = elm.querySelectorAll(".popup");
    for (const item of popup) {
        const input = item.querySelector("input");
        input.checked = false;
        input.addEventListener("change", () => {
            if (!input.checked)
                return;
            popup.forEach(v => {
                const v_input = v.querySelector("input");
                if (v_input == input)
                    return;
                v_input.checked = false;
            });
        });
    }
}
var episodePage = 1;
function handleEpisode() {
    const elm = document.querySelector("#episodes_menu");
    const pages = elm.querySelectorAll(".page");
    const pageCount = pages.length;
    const controlContainer = elm.querySelector(".control");
    const prev = controlContainer.querySelector(".prev");
    const next = controlContainer.querySelector(".next");
    const handler = () => {
        for (const p of pages) {
            p.classList.remove("show");
        }
        elm.querySelector(`.page[data-num="${episodePage}"]`)
            .classList.add("show");
    };
    prev.addEventListener("click", () => {
        if (episodePage <= 1)
            return;
        episodePage--;
        handler();
    });
    next.addEventListener("click", () => {
        if (episodePage >= pageCount)
            return;
        episodePage++;
        handler();
    });
}
onload = () => {
    handleMenu("bottom_menu");
    handleEpisode();
};
//# sourceMappingURL=script.js.map