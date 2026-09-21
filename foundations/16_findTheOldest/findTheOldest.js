const findTheOldest = function(sample) {
    let result = sample[0];

    for(let i = 0; i < sample.length; i++) {
        let now = sample [i];

        let oldestAge = (result.yearOfDeath || new Date().getFullYear()) - result.yearOfBirth;
        let nowAge = (now.yearOfDeath || new Date().getFullYear()) - now.yearOfBirth;

        if (nowAge > oldestAge) {
            result = now;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
