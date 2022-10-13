// run this program by keeping internet disconnected

const f = async() => {
  try {
    await(async () => {
      await fetch("https://api.chucknorris.io/jokes/random");
    })();
  } catch (error) {
    console.log(error);
  }
};
f();

// fetch returns a promise that gets rejected/throws an error, since no catch handled that error, the error is now thrown/rejected
// by the promise returned by the async function, now there is a try-catch block so that error is now caught by catch block.


// basically promise returned by async function got rejected by the error which was originally thrown by fetch function inside.