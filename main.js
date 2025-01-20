// const newTag = document.createElement("h1")
// const newlink = document.createElement("a")
// const newImage = document.createElement("img")
// newTag.textContent = "Hello World"
// newTag.textContent = "Hello World"
// newImage.href = "https://avatars.mds.yandex.net/i?id=ee5c6fa5773fb1fdf6b255b886c3fbe60b1bc96f-8184802-images-thumbs&n=13"
// document.body.appendChild(newImage)

// const text0 = document.createElement("h1")
// text0.textContent = "Jaloliddin"

// const text1 = document.createElement("h1")
// text1.textContent = "Yovmuddinov"

// const text2 = document.createElement("h1")
// text2.textContent = "13"

// document.body.append(text0, text1, text2)


const body = document.body;
const heading = document.createElement("h1");
const outputDiv = document.createElement("div");

heading.textContent = "Rezultat:";
body.appendChild(heading);
body.appendChild(outputDiv);

outputDiv.style.marginTop = "20px";
outputDiv.style.fontSize = "18px";

function processUserData() {
    const firstName = prompt("Ismingizni kiriting:");
    const lastName = prompt("Familiyangizni kiriting:");
    const age = prompt("Yoshingizni ikriting");

    if (!firstName || !lastName || !age) {
        alert("Iltimos hamma malumotlarni kiriting");
        return;
    }

    const choice = prompt(
        `Ismingiz katta yoki kichik harfligini tanlang?\n` +
        `(1)atta \n` +
        `(2)ichik \n` +
        `1 yoki 2 kiriting:`
    );

    if (choice === "1") {
        outputDiv.innerHTML = `
            <p><strong>Имя:</strong> ${firstName.toUpperCase()}</p>
            <p><strong>Фамилия:</strong> ${lastName.toUpperCase()}</p>
        `;
    } else if (choice === "2") {
        outputDiv.innerHTML = `
            <p><strong>Имя:</strong> ${firstName.toLowerCase()}</p>
            <p><strong>Фамилия:</strong> ${lastName.toLowerCase()}</p>
        `;
    } else {
        alert("Noto'g'ri variant tanladingiz boshidan yozib ko'ring");
    }
}

processUserData();

