import React from 'react';

import Character from '../Character'

function Characters(props) {

    const charactersArray = [
        {
            name: 'Homer Jay Simpson',
            gender: 'male',
            info: 'is a man from Springfield and the main protagonist of the series. He is the husband of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 313.05641230253 pounds in one episode[47] or 240 pounds elsewhere),[6] lazy, and often ignorant to the world around him. Although he has many flaws, he has shown to have great caring, love and even bravery to those he cares about and sometimes, even others he doesn\'t.',
            img: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'
        },
        {
            name: 'Bart Simpson',
            gender: 'Male',
            info: ' (born 1979 in 1989; 2013 in 2023), is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed "Cosmo", after discovering a comet in "Bart\'s Comet". Bart has also been on the cover on numerous comics, such as "Critical Hit", "Simpsons Treasure Trove #11", and "Winter Wingding". Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his older brother, Mark Groening.',
            img: 'https://static.wikia.nocookie.net/simpsons/images/b/bc/%D0%91%D0%B0%D1%80%D1%82.png'
        },
        {
            name: 'Maggie Simpson',
            gender: 'Femali',
            info: '(born 1988 in 1989; 2022 in 2023) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. She is often seen sucking on her pacifier, and when she walks, she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family. Maggie is at the very young, infant age of 1.',
            img: 'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'
        },
        {
            name: 'Maggie Simpson',
            gender: 'Femali',
            info: '(born 1988 in 1989; 2022 in 2023) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. She is often seen sucking on her pacifier, and when she walks, she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family. Maggie is at the very young, infant age of 1.',
            img: 'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'
        },
        {
            name: 'Maggie Simpson',
            gender: 'Femali',
            info: '(born 1988 in 1989; 2022 in 2023) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. She is often seen sucking on her pacifier, and when she walks, she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family. Maggie is at the very young, infant age of 1.',
            img: 'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'
        },

    ]

    return (
        <div>
            {
                charactersArray.map((value,index)=><Character key={index} item={value}/>)
            }
        </div>
    );
}

export {Characters};