//your JS code here. If required.




document.getElementById("btn").addEventListener("click", async function () {
    let text = document.getElementById("text").value;
    let delay = document.getElementById("delay").value;

    if (text && delay) {
        let myPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(text);
            }, delay);
        });

        let text2 = await myPromise;

        if (text2) {
            document.getElementById("output").textContent = text2; // Use textContent instead of innerContent
        }
    }
});

