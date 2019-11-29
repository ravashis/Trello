const originalObject={
    "Bench":80,
    "Squat":100,
    "Deadlift":150
};

var stringObj=JSON.stringify(originalObject);
console.log(stringObj);
console.log(typeof stringObj);

var jsonObj=JSON.parse(stringObj);
console.log(jsonObj);
console.log(typeof jsonObj);