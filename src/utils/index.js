import surpriseMePrompts from '../constants';

export function getRandompromt(prompt){
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPromt = surpriseMePrompts[randomIndex];
    if(randomPromt === prompt) return getRandompromt(prompt);
    return randomPromt;
}