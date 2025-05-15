/* Create references to the elements you want to manipulate in the 
DOM (Document Object Model) */

dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));

/* WHATS GOING ON? You are referencing the document and looking through its DOM to find 
 an element with a particular ID.  After identifying you pass that item
 to a function call dragElement.*/


 // Closures are used to Manipulate the DOM 

 // Create the dragElement closure, an outer function that encloses an inner function (s)

 function dragElement(terrariumElement) {
            //set 4 positions for positioning on the screen
            let pos1 = 0,
                    pos2 = 0;
                    pos3 = 0;
                    pos4 = 0;
            terrariumElement.onpointerdown = pointerDrag;

            function pointerDrag(e) {
                e.preventDefault();
                console.log(e);
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onpointermove = elementDrag;
                document.onpointerup = stopElementDrag;
            }

            function elementDrag(e) {
                pos1 = pos3 - e.clientX;
                pos2 = pos3 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                console.log(pos1, pos2, pos3, pos4);
                terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
                terrariumElement.style.left = terrariumElement.offsetLet - pos1 + 'px';
            }

            function stopElementDrag() {
                document.onpointerup = null;
                document.onpointermove = null
            }
 }

 

