import surpriseMePrompts from '../constants';

export function getRandompromt(promt){
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPromt = surpriseMePrompts[randomIndex];
    if(randomPromt === promt) return getRandompromt(promt);
    return randomPromt;
}