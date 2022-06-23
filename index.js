const fs = require('fs');

const generateData = async () => {
    let object = {}
    for (let x = 0; x < 500; x++) {
        let randomName = Buffer.from(Math.random().toString()).toString("base64").substring(10, 5);
        let arrayOfHours = [];

        let amountOfPosts = Math.ceil(Math.random() * 3)
        for (let i = 0; i < amountOfPosts; i++) {
            arrayOfHours.push({
                pictureURL: 'https://firebasestorage.googleapis.com/v0/b/beta-tracker-5d91b.appspot.com/o/1656002313672?alt=media&token=55dde208-1181-4c90-ae45-2c8e738f7a9c',
                hours: Math.ceil(Math.random() * 6),
                fullName: randomName,
                email: `${randomName}@gmail.com`,
                date: "6/23/2022"
            })
        }

        object[randomName] = {studentHours: arrayOfHours}
    }
    return object;
}

(async() => {
    let object = await generateData();
    fs.writeFile('./data.json', JSON.stringify(object), (err) => {
        console.log(err);
    })
})();


