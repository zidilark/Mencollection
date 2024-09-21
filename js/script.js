const para= document.querySelector('.para');
const div = document.createElement('p')

// div.innerText = "chai"
const addp = document.createTextNode("Men's fashion has evolved significantly over the years, blending classic styles with contemporary trends. Today, versatility is key, with men embracing a mix of formal and casual wear that suits various occasions.Tailored suits remain a cornerstone of men's fashion, offering a timeless look for formal settings. However, modern designs often incorporate slimmer cuts and more diverse colors, moving beyond the traditional black, grey, and navy. Casual wear, on the other hand, has seen a rise in the popularity of athleisure, where comfort meets style. This trend includes well-fitted joggers, hoodies, and sneakers that can be worn both at the gym and out in public.Layering is another popular trend, with men often combining pieces like shirts, sweaters, and jackets to create a stylish and practical look. Accessories, such as watches, belts, and sunglasses, add a personal touch and enhance the overall outfit.Footwear plays a crucial role, with options ranging from classic dress shoes to trendy sneakers and boots, catering to different tastes and occasion.")
div.appendChild(addp)
para.appendChild(div)


  
            
   


// let modbtn = document.querySelector('.tooglebutton')
// let body = document.querySelector('body')
// let nav = document.querySelector('#nav')
// let crrtmodr = "light"
// for (let i = 0; i < nav.children.length; i++) {
// modbtn.addEventListener('click', () => {
//     // console.log("ff");
     
//     if (crrtmodr === "light") {
//         crrtmodr = "darkmode";
//         nav.children[i].classList.add("darkmode");
//         body.classList.add("darkmode")
//         nav.children[i].classList.remove("light")
//         body.classList.remove("light")
//       localStorage.setItem('theme', 'dark');                
//     }
//     else{
//         crrtmodr = "light"
//         nav.children[i].classList.add("light")
//         body.classList.add("light")
//         nav.children[i].classList.remove("darkmode");
//         body.classList.remove("darkmode");
//         localStorage.setItem('theme', 'light');
        
//     }
// })
// }
//     window.onload = function() {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//     body.classList.add('darkmode');
//     nav.classList.add('darkmode');
//     }
//     }
