"use strict";
const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");
let item = {};
let skill = {};    //state has been replaced with Item, that still works, I want the new ones to work too.
let notariety = {};  //I want to add an notariety, skill and ability system.
// let ability = {};
function startGame() {
    item = {};
    skill = {};  //I have followed the same pattern here.
    notariety = {};       
    showTextNode(1); //has this got something to do with it?
}
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
    textNode.options.forEach(options => {
        if (showOption(options)) {
            const button = document.createElement('button');
            button.innerText = options.text;
            button.classList.add('btn');
            button.addEventListener("click", () => selectOption(options));
            optionButtonsElement.appendChild(button);
        }
    });
}

function showOption(option) {
    return (
    option.requiredItem == null || option.requiredItem(item),
    option.requiredSkill == null || option.requiredSkill(skill),
    option.requiredNotariety == null || option.setNotariety(notariety)
    // option.requiredSkill == null || option.requiredSkill(ability)
    )
    //I did try to return the others like I did with the item but that didn't work.
}
function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if(nextTextNodeId <= 0){
       return startGame()
    }
    item = Object.assign(item, option.setItem);
    skill = Object.assign(skill, option.setSkill);
    notariety = Object.assign(notariety, option.setNotariety);
    // ability = Object.assign(ability. option.setAbility);
    //I don't know how to do each with this either.
    showTextNode(nextTextNodeId);
}
const textNodes = [
    {
        id: 1,
        text: 'Choose your class it will change how you play the game.',
        options: [
            {
                text: 'Assassin.',
                setSkill: {stealth: true, twoDaggers: true, archery: true},
                setItem: {daggers: true, bow: true},
                nextText: 4
            },
            {
                text: 'Warrior.',
                setSkill: {block: true, onehand: true, battleCry: true, longrangespearing: true},
                setItem: {oneHandedSword: true, shield: true, spear: true},
                nextText: 7
            },
            {
                text: 'Barbarian.',
                setSkill: {toughness: true, dualWeilding: true, fear: true, axethrowing: true},
                setItem: {twoheavyaxes: true, throwingaxes: true},
                nextText: 8
            },
            {
                text: 'Mage.',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: 'So you want to be a mage but what type of mage do you want to become?.',
        options: [
            {
                text: 'Pyromancer- ability to summon and control fire.',
                setSkill: {firebending: true},
                nextText: 6
            },
            {
                text: 'Necromancer- ability to raise and command the dead, even the bodies of your enemies using the book of the dead.',
                setSkill: {necromancer: true},
                setItem: {sword: true, bookofthedead: true},
                nextText: 6
            },
            {
                text: 'Druid- you can control nature to do your bidding.',
                setSkill: {druid: true},
                setItem: {healingcharm: true},
                nextText: 6
            },
            {
                text: 'Conjuror- you can summon and command creatures and beings from the spirit realm using your book of summoning passed down from your mother.',
                setSkill: {Conjuror: true},
                setItem: {bookofsummoning: true},
                nextText: 6
            },
            {
                text: 'Pick another class.',
                nextText: -1
            }
        ]
    },
    {
        id: 6,
        text: 'Now that you have chosen your skills, it is time to begin your journey.',
        options: [
            {
                text: '.',
            }
        ]
    },
    {
        id: 4,
        text: 'The assassin comes with two daggers and a bow, the assassin has the dual weild skill and an archery skill.',
        options: [
            {
                text: 'Begin your adventure.',
                nextText: 6
            },
            {
                text: 'Pick another class.',
                nextText: -1
            }
        ]
    },
    {
        id: 7,
        text: 'The warrior comes with a sword and shield, these give you the skill of blocking and one handed attacks, the warrior comes with a class battlecry skill.',
        options: [
            {
                text: 'Begin your adventure.',
                nextText: 6
            },
            {
                text: 'Pick another class.',
                nextText: -1
            }
        ]
    },
    {
        id: 8,
        text: 'The barbarian comes with two heavy axes and 4 throwing axes, the barbarian has increased toughness.',
        options: [
            {
                text: 'Begin your adventure.',
                nextText: 6
            },
            {
                text: 'Pick another class.',
                nextText: -1
            }
        ]
    }
];
startGame();






