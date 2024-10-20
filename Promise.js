let myPromise = new Promise(function(myResolve, myReject) {

    let a = Math.random();

    if (a < 0.5) {
        myReject("No random number for you today"); // when error
    } else {
        myResolve("Random number is " + a); // when successful
    }

});

// Handling the promise resolution and rejection
myPromise
    .then(function(result) {
        console.log(result); // log success message
    })
    .catch(function(error) {
        console.error(error); // log the error message
    });
