function  validProposal( person1, age1, person2, age2 ) {
    if(typeof person1 !== "string" || typeof age1 !== "number" || typeof person2 !== "string" || typeof age2 !== "number"){

    return false;
    }

    const validPerson = (person1 === "Male" && person2 === "Female") || (person1 === "Female" && person2 === "Male")

    const ageDifference = Math.abs(age1 - age2);


    return validPerson  && ageDifference <= 7;
}

console.log(validProposal("Male", 30, "Female", 25));
console.log(validProposal("Male", 30, "Male", 25));
console.log(validProposal("Male", 30, "Female", 40));
