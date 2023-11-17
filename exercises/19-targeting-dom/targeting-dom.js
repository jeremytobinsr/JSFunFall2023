/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
 
    const firstLI = document.querySelector("li");
        console.log(firstLi);

    const myId = document.querySelector("#myId");
        console.log(myId);

    const allLi = document.querySelectorAll("li");
        allLi.forEach((li) => {
        console.log(li);
    });

    const allBgwarning = document.querySelector(".bg-warning");
    allBgwarning.forEach((".bg-warning") =>{
      console.log(allBgwarning);
    })

    const targetmeButton = document.querySelector(#targetmebutton);
          console.log(targetmeButton);

    const targetLinks = document.querySelectorAll ("#sociallink");
       targetLinks.forEach((link) => console.log(link));

    const cells = document.querySelector(#myCells);
    cells.forEach((#myCells) => console.log(cells));
    });

    



})();
