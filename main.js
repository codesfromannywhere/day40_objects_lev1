console.log("läuft");

//lev1_2: Objects

// let person = {
//     name: "Laura-Ann",
//     age: 30,
//     sagNameAlter: () => {
//         alert(`${person.name}, ${person.age} `)
//         console.log(person.name);
//         console.log(person.age);
//     }
// }
// person.sagNameAlter()



//lev1_4: Objects Accessing

// let unsereHaustiere = [
//     {
//         tiertyp: "Katze",

//         names: [
//             "Gipsy",
//             "Nala",
//             "Dinky"
//         ]
//     },
//     {
//         tiertyp: "Hunde",
//         names: [
//             "Knöpfchen",
//             "Pinselchen",
//             "Droopy"
//         ]
//     }
// ];
// console.log(unsereHaustiere[0].names[1]);
// console.log(unsereHaustiere[1].names[2]);
// console.log(unsereHaustiere[0].names);
// console.log(unsereHaustiere[1].names);
// unsereHaustiere[0].names = [
//     "Balu",
//     "Snoopy"]
// console.log(unsereHaustiere[0].names);


// CodeFlow Übung lev1_5: Objects Accessing

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

// console.log(unserLager.schrank["Obere Schublade"].Ordner2)
// console.log(unserLager.schrank["Untere Schublade"]);
// console.log(unserLager.schreibtisch.schublade)



//  lev1_6: Objects Arrays Accessing

// let myMusic = [
//     {
//         kunstler: "The Beatles",
//         title: "Abbey Road",
//         release_jahr: 1969,
//         formate: ["LP", "CD", "MC", "Download"],
//         gold: true
//     },
//     {
//         kunstler: "Pink Floyd",
//         title: "Dark Side of the Moon",
//         release_jahr: 1978,
//         formate: ["CS", "CD", "LP", "Download"],
//         gold: true
//     },
//     {
//         kunstler: "Led Zeppelin",
//         title: "Led Zeppelin IV",
//         release_jahr: 1971,
//         formate: ["CS", "LP", "Download"],
//         gold: true
//     },
//     {
//         kunstler: "Metallica",
//         title: "Kill ’Em All und Ride the Lightning",
//         release_jahr: 1983,
//         formate: ["LP", "CD", "MC", "Download"],
//         gold: true
//     }
// ];
// console.log(myMusic);


// myMusic[4] = {
//     kunstler: "Queen",
//     title: "Bohemian Rapsody",
//     release_jahr: 1975,
//     formate: ["CS", "LP", "Download"],
//     gold: true
// }
// console.log(myMusic);

// console.log(myMusic[0].kunstler);
// console.log(myMusic[0].formate[3]);
// console.log(myMusic[0].gold);
// console.log(myMusic[2].release_jahr);
// console.log(myMusic[3].release_jahr);
// console.log(myMusic[3].formate[2]);
// console.log(myMusic[3].title.substring(17, 21));
// console.log(myMusic[2].title.substring(13));
// console.log(myMusic[1].kunstler.substring(5));


// CodeFlow Übung lev1_7: Objects Arrays Loop Accessing

// let myMusic = [
//     {
//         artist: "The Beatles",
//         title: "Abbey Road",
//         release_year: 1969,
//         medium: ["LP", "CD", "MC", "Download"],
//         gold: true
//     },
//     {
//         artist: "Pink Floyd",
//         title: "Dark Side of the Moon",
//         release_year: 1978,
//         medium: ["CS", "CD", "LP", "Download"],
//         gold: true
//     },
//     {
//         artist: "Led Zeppelin",
//         title: "Led Zeppelin IV",
//         release_year: 1971,
//         medium: ["CS", "LP", "Download"],
//         gold: true
//     },
//     {
//         artist: "Metallica",
//         title: "Kill ’Em All und Ride the Lightning",
//         release_year: 1983,
//         medium: ["LP", "CD", "MC", "Download"],
//         gold: true
//     }
// ];

// console.log(myMusic);


// myMusic.forEach(elt => {
//     document.write(`<p>${elt.artist}</p>`)
//     document.write(`<p>${elt.title}</p>`)
//     document.write(`<p>${elt.medium}</p> <br>`)

// })



// lev1_8: Objects Arrays Loop Accessing

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];


studentData.forEach(elt => {
    console.log(elt.name);
    console.log(elt.coop)
    console.log(elt.emails);
})

let studentDataArr = studentData.map((elt) => {
    return elt.address.city;
})

console.log(studentDataArr);