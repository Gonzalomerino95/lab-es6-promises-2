// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
+/
*/

// Iteration 1 - using callbacks (viable but repetitive dirty code)
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML +=
          `<li>${step2}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector("#mashedPotatoes").innerHTML +=
              `<li>${step3}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector("#mashedPotatoes").innerHTML +=
                  `<li>${step4}</li>`;

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector("#mashedPotatoes").innerHTML +=
                      `<li>${step5}</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error),
                );
              },
              (error) => console.log(error),
            );
          },
          (error) => console.log(error),
        );
      },
      (error) => console.log(error),
    );
  },
  (error) => console.log(error),
);

// Iteration 2 - using promise (.then syntax)
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;

    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;

    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;

    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;

    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;

    return obtainInstruction("steak", 5);
  })
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  })
  .catch((error) => console.log(error));

// Iteration 3 using promises (async/await syntax)
async function makeBroccoli(){
  try{
    const step0= await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    const step1= await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    const step2= await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    const step3= await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    const step4= await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    const step5= await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    const step6= await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    let broccoliImg = document.getElementById("broccoliImg");
    broccoliImg.removeAttribute("hidden");
  } catch (error){
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
async function makeSprouts() {
  try {
    const [step0, step1, step2, step3, step4] = await Promise.all([
      obtainInstruction("brusselsSprouts", 0),
      obtainInstruction("brusselsSprouts", 1),
      obtainInstruction("brusselsSprouts", 2),
      obtainInstruction("brusselsSprouts", 3),
      obtainInstruction("brusselsSprouts", 4)
    ]);

    const brusselsSprouts = document.querySelector("#brusselsSprouts");

    brusselsSprouts.innerHTML += `<li>${step0}</li>`;
    brusselsSprouts.innerHTML += `<li>${step1}</li>`;
    brusselsSprouts.innerHTML += `<li>${step2}</li>`;
    brusselsSprouts.innerHTML += `<li>${step3}</li>`;
    brusselsSprouts.innerHTML += `<li>${step4}</li>`;
    brusselsSprouts.innerHTML += `<li>Brussel Sprouts are ready!</li>`;

  } catch (error) {
    console.log(error);
  }
}

makeSprouts();
