function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed) {
    console.log(`Put ${dogName} the ${dogBreed} on a leash`);
}

function walkToPark(dogName, dogBreed) {
    console.log(`Walk ${dogName} the ${dogBreed} to the park`);
}

function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw a frisbee to ${dogName} the ${dogBreed}.`);
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee]

function exerciseDog(dogName, dogBreed) {
    for (let i = 0; i < routine.length; i++) 
    routine[i](dogName, dogBreed);
}