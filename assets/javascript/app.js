const cl = console.log;

let movieCards = [
        {
	     img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAT4deET55wX0MzpBp45_7201ZndSAI8m2W52rNVeVmEbEgEW",
		 title : "Uncharted",
		 rating : "6.3",
		 overview : "Victor Sullivan recruits Nathan Drake to help him find the lost fortune of Ferdinand Magellan. However, they face competition from Santiago Moncada, who believes that the treasure belongs to him."
        },
		{
		 img : "https://www.movienewsletters.net/photos/NZL_254771R1.jpg",
		 title : "October",
		 rating : "7.5",
		 overview : "Dan and Shiuli are brought closer in an unexpected turn of events. Eventually, they develop feelings for each other and establish a bond unlike any other which leads to an internal awakening."
		},
		{
		 img : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3E0TK3iq5527vUbBosSbyNHFESuSoFtev2dTk3y843rcyRLMG",
		 title : "After",
		 rating : "5.3",
		 overview : "Tessa, a young student and devoted girlfriend, looks forward to greater prospects in college. However, she soon meets Hardin, an enigmatic rebel who makes her question her notions of life and love."
		},
		{
		 img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaVGMUdjDmSpdZG2cdC5eiBl2IC1yRXSBC9xjHSJBsCjLYfrR",
		 title : "Master",
		 rating : "7.3",
		 overview : "An alcoholic professor is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes."
		},
		{
		 img : "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Northman.png",
		 title : "The Northman",
		 rating : "7",
		 overview : "Adventure awaits Prince Amleth, whose father was killed and mother was abducted by his ruthless uncle. However, the journey takes him through twists which unravel a dark truth about his family."
		},
		{
		 img : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3mvSU_2ov5I7cZP9LBwnQ_iHqh3WCuEB_B1_HWA7OmxhMQ7I4",
		 title : "Born To Fly",
		 rating : "6",
		 overview : "A special operations team headed by elite pilots are ordered to test new fighter jets. Test flight after test flight, they challenge the limits of the sky and themselves."
		},
		{
		 img : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRPunAXQI8_X7p1MYVmiRF-hSOinkCiCqca8p9_0vB22qS2ttjx",
		 title : "Mission Impossible",
		 rating : "7.8",
		 overview : "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious"
		},
		{
		 img : "https://images.justwatch.com/poster/300704972/s592/sita-ramam",
		 title : "Sita Ramam",
		 rating : "8.6",
		 overview : "Upon returning to Pakistan, Afreen sets off to fulfil her grandfather's wish of delivering a letter from Ram to Sita. Along the way, she finds Ram and learns about their love story."
		},
		{
		 img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05Pz4KhR1duYx2RsHeZBYkNlcA9_UDv50BCUcjVguu4loZZA0",			 
		 title : "Fantastic Beasts",
		 rating : "6.2",
		 overview : "Dumbledore assembles a team of wizards, witches and a Muggle baker to oppose the rise of Gellert Grindelwald. They hatch a plan to confuse Grindelwald and stop him from attaining political power."
		},
		{
		 img : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLT83SjKpjZ6TNkc8yknTzLgDTdXPZ5ayruRVjKEoTsc7Y2B4V",			 
		 title : "Wonder Women",
		 rating : "5.4",
		 overview : "Wonder Woman finds herself battling two opponents, Maxwell Lord, a shrewd entrepreneur, and Barbara Minerva, a friend-turned-foe. Meanwhile, she also ends up crossing paths with her love interest."
		},
		{
		  img :	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxKaL__Q2qR9RrmBtRFEOkIitISIZfNnsXZ-QFeUcd3gCwiXd",
		  title : "Evil Dead Rise",
		  rating : "6.5",
		  overview : "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable."
		},
		{
		  img :	"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbe26-wMqBlJVSPeKVI3ipfRMlASVsVSxdlhxVm7ek9cNxC28q",
		  title : "No Hard Feelings",
		  rating : "6.4",
		  overview : "On the brink of losing her childhood home, a desperate woman agrees to date a wealthy couple's introverted and awkward 19-year-old son. However, he proves to be more of a challenge than she expected, and time is running out before she loses it all."
		},
		{
		 img : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ7pnzME8Cgr5B8rQWv8ISYIT-HssYHhNKkZvIQDmHmhnk28MEP",
		 title : "Mark Antony",
		 rating : "6.8",
		 overview : "Mark, the son of a former gangster, comes across a mobile phone that can time-travel. Using the phone, Mark acquires the ability to save his estranged mother from a grim fate but with dangerous consequences."
		},
		{
		 img : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul",
		 title : "Vikram",
		 rating : "8.3",
		 overview : "A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai."
		},
		{
		 img : "https://assets.gadgets360cdn.com/pricee/assets/product/202303/Leo_1678967552.jpg",
		 title : "Leo",
		 rating : "7.9",
		 overview : "Leo is a 2023 Indian Tamil-language action thriller film directed by Lokesh Kanagaraj and produced by Seven Screen Studio. The film stars Vijay in the titular role, alongside Sanjay Dutt, Arjun, Trisha, Gautham Vasudev Menon, Mysskin, Madonna Sebastian, George Maryan, Mansoor Ali Khan, Priya Anand and Mathew Thomas."
		}
		
];


let cards = ``;
movieCards.forEach((movieC) => {
	cards += `
	         <div class="col-lg-3 col-sm-6 col-xs-6">
	           <div class="cardinfo">
	             <figure class="movieCard">
	               <img src="${movieC.img}">
	                 <figcaption>
	                    <div class="titleInfo p-2">
		                <div class="row">
		                <div class="col-10">
		                <h4>${movieC.title}</h4>
		                </div>
		                <div class="col-2">
		                <div class="ratingHigh">${movieC.rating}</div>
		                </div>
		                </div>
		                </div>
		                <div class="overview">
		                <h5 class="p-2 text-center">Overview :</h5>
		                ${movieC.overview}
		                </div>
	                </figcaption>
	              </figure>
	            </div>
	         </div>
	
			  
			 `
});	

const moviecard = document.getElementById("moviecard");
moviecard.innerHTML = cards;