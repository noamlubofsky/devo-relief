const reliefs = 
[
    {
    "id": 1,
    "level": "Mild",
    "subtitle": "I don't really feel it",
    "img_url": "https://i.pinimg.com/originals/a9/06/a5/a906a56d221478e8c7f378176ef3b609.gif",
    "text": "BH you're OK! But it still never hearts to watch some cuteness :)",
    },

    {
        "id": 2,
        "level": "So-So",
        "subtitle": "I'm feeling pretty fine",
        "img_url": "https://ih1.redbubble.net/image.873862674.4984/ssrco,long_t_shirt,mens,fafafa:ca443f4786,front,square_three_quarter,x1000-bg,f8f8f8.1.jpg",
        "text": "Maybe all you need is a snack? Regardless, don't forget that if you need anything I am ALWAYS here for you <3 After all...",
        },

        {
            "id": 3,
            "level": "Medium",
            "subtitle": "Now I'm startin to feel it",
            "img_url": " https://media.tenor.com/images/7dcc309bc2fbdf0444f818154f9a67c1/tenor.gif",
            "text": "Ok now you're starting to get uncomfortable... hopefully this will help!",
            },

            {
                "id": 4,
                "level": "Pretty Bad",
                "subtitle": "Ok this is getting pretty bad",
                "img_url": "https://media2.giphy.com/media/3eTFXSUvoF8Vyhb8DT/giphy.gif?cid=ecf05e478yxhwfk9hlrocmuxv27nnpum6om9mfza5eqs1ixp&rid=giphy.gif&ct=g",
                "text": "Ugh I'm sorry you're in pain my cutie. I hope you know that I love you more than anything in the world, and if I could take the pain for myself I would!",
                },

                {
                    "id": 5,
                    "level": "OOOWWW :(",
                    "subtitle": "I'M GONNA KILL SOMEONE",
                    "img_url": "https://images.shulcloud.com/493/uploads/Images/ClergyAndStaff/clergyyouthdirectors.jpg",
                    "text": "Hi my sweetheart. I just want to say thank you for being my wife. I hope you know how lucky I feel to be with you every single day and to get to call you mine. You mean the world to me. You are my home, my love, my cutes magoots, and my forever. I love you sweetheart <3",
                    },
]

reliefs.forEach((relief) => {

    const reliefLevels = document.createElement('span')

    const reliefBar = document.querySelector("#relief-bar")
    reliefLevels.innerText = relief.level
    reliefBar.append(reliefLevels)

        reliefLevels.addEventListener('click', () => {
        renderRelief(relief)
    })
})

const renderRelief =  (relief) => {
    
    const reliefDescription = document.createElement('h2')
    reliefDescription.innerText = relief.subtitle

    const reliefImage = document.createElement('img')
    reliefImage.src = relief.img_url

    const reliefText = document.createElement('p')
    reliefText.innerText = relief.text
    
    const reliefInfo = document.querySelector("#relief-info")
    reliefInfo.innerHTML = ''
    reliefInfo.append(reliefDescription, reliefImage, reliefText)
}

// const renderRelief = (relief) => {
//     reliefButtons.forEach(relief => console.log(relief))

//     const reliefLevels = document.createElement('span')

//     const reliefBar = document.querySelector("#relief-bar")
//     reliefLevels.innerText = relief
//     reliefBar.append(reliefLevels)


// }

// const renderPupInfo = (pup) => {
//     const pupImage = document.createElement('img')
//     pupImage.src = pup.image

//     const pupName = document.createElement('h2')
//     pupName.innerText = pup.name

//     const goodDogButton = document.createElement('button')
//     goodDogButton.innerText = pup.isGoodDog ? "Good Dog!" : "Bad Dog!"
//     goodDogButton.addEventListener('click', (e) => toggleGoodDog(e, pup))

//     const dogInfo = document.querySelector("#dog-info")
//     dogInfo.innerHTML = ''
//     dogInfo.append(pupImage, pupName, goodDogButton)}