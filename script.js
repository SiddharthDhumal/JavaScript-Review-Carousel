let people = [
	{
		photo:
			'url("https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg")',
		name: "Susan Smith",
		profession: "WEB DEVELOPER",
		description:
			"Cheese and biscuits chalk and cheese fromage frais. Cheeseburger caerphilly cheese slices chalk and cheese cheeseburger mascarpone danish fontina rubber cheese. Squirty cheese say cheese manchego jarlsberg lancashire taleggio cheese and wine squirty cheese. Babybel pecorino feta macaroni cheese brie queso everyone loves gouda. Cheese and biscuits camembert de normandie fromage fromage macaroni cheese"
	},

	{
		photo:
			"url('https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg')",
		name: "Anna Grey",
		profession: "UFC FIGHTER",
		description:
			"I'm baby migas cornhole hell of etsy tofu, pickled af cardigan pabst. Man braid deep v pour-over, blue bottle art party thundercats vape. Yr waistcoat whatever yuccie, farm-to-table next level PBR&B. Banh mi pinterest palo santo, aesthetic chambray leggings activated charcoal cred hammock kitsch humblebrag typewriter neutra knausgaard. Pabst succulents lo-fi microdosing portland gastropub Banh mi pinterest palo santo"
	},

	{
		photo:
			"url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg')",
		name: "Branson Cook",
		profession: "ACTOR",
		description:
			"Radio telescope something incredible is waiting to be known billions upon billions Jean-François Champollion hearts of the stars tingling of the spine. Encyclopaedia galactica not a sunrise but a galaxyrise concept of the number one encyclopaedia galactica from which we spring bits of moving fluff. Vastness is bearable only through love paroxysm of global death concept"
	},

	{
		photo:
			"url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
		name: "Julius Grohn",
		profession: "PROFESSIONAL CHILD",
		description:
			"Biscuit chocolate pastry topping lollipop pie. Sugar plum brownie halvah dessert tiramisu tiramisu gummi bears icing cookie. Gummies gummi bears pie apple pie sugar plum jujubes. Oat cake croissant bear claw tootsie roll caramels. Powder ice cream caramels candy tiramisu shortbread macaroon chocolate bar. Sugar plum jelly-o chocolate dragée tart chocolate marzipan cupcake gingerbread."
	}
];


function initilizer(){
   document.querySelector('.img').style.backgroundImage  = people[0].photo;
  
  
  // console.log(  document.querySelector('.img').src = people[0].photo);
   document.querySelector('.name').textContent = people[0].name;
  document.querySelector('.profession').textContent =  people[0].profession;
  
  document.querySelector('.reviews').textContent = people[0].description;
  
}

initilizer();


let rightCarousel = document.querySelector('.right-carousel');

let leftCarousel = document.querySelector('.left-carousel');


// rightCarousel.addEventListener('click',function(){
//     people.forEach(peoplesreviews);
    
//    function peoplesreviews(reviews,idx,reveiwarr){
//        // console.log(idx);   
//      // console.log(reviews); 
//      document.querySelector('.img').style.backgroundImage  = reveiwarr[idx].photo;
  
//   // console.log(  document.querySelector('.img').src = reviews[idx].photo);
//   document.querySelector('.name').textContent = reveiwarr[idx].name;
//      // console.log(people[idx].name);
//   document.querySelector('.profession').textContent =  reveiwarr[idx].profession;
  
//   document.querySelector('.reviews').textContent = reveiwarr[idx].description;
//       idx++;

// }
 
// })



// console.log(abc);




// let trialArr = [{a:'a',b:3,c:'sad'},{a:'a',b:4,c:'sad'},{a:'a',b:5,c:'sad'}];


// trialArr.forEach(function(ele,idx){
//    console.log(ele);
//   console.log(idx);
//   console.log(trialArr[idx].a);
// })



// let main = document.querySelector('.mainContent');
let curSlideright = 1;

rightCarousel.addEventListener('click',function(){
   
  // rightCarousel.style.transitionn = 'all 5s ease-out 5s';
 
  rightCarousel.style.transition = 'left:0';
  
   people.forEach((slide,idx)=>{
     // console.log(slide);
     // main.style.transform = `translateX(${idx*100}%)`;

document.querySelector('.img').style.backgroundImage  = people[curSlideright].photo;
  
  // console.log(  document.querySelector('.img').src = people[0].photo);
     
   
 document.querySelector('.name').textContent = people[curSlideright].name;
     

   document.querySelector('.profession').textContent =  people[curSlideright].profession;
   
 

document.querySelector('.reviews').textContent = people[curSlideright].description;
   })
 

  console.log(curSlideright);
  curSlideright++;
  console.log(`${curSlideright} after add`);
  if(curSlideright==people.length) curSlideright = 0;
})




let curSlideleft = curSlideright;

console.log(curSlideleft);

leftCarousel.addEventListener('click',function(){
   curSlideleft--;
  if(curSlideleft==0) curSlideleft = people.length-1;
  console.log(curSlideleft);
   people.forEach((slide,idx)=>{
     // console.log(slide);
     // main.style.transform = `translateX(${idx*100}%)`;
       document.querySelector('.img').style.backgroundImage  = people[curSlideleft].photo;
  
  // console.log(  document.querySelector('.img').src = people[0].photo);
   document.querySelector('.name').textContent = people[curSlideleft].name;
  document.querySelector('.profession').textContent =  people[curSlideleft].profession;
  
  document.querySelector('.reviews').textContent = people[curSlideleft].description;
   })
//   console.log(curSlideleft);

//   console.log(`${curSlideleft} after add`);
//   console.log(curSlideleft);
})