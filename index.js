let quote = document.getElementById('quote');
let randomQuotes = ['Dont look at your feet to see if you are doing it right. Just dance.','True freedom is impossible without a mind made free by discipline.','Life is like riding a bicycle. To keep your balance you must keep moving.','Be sure you put your feet in the right place, then stand firm.','He who conquers himself is the mightiest warrior.','Try not to become a man of success, but rather become a man of value.','Never let success get to your head and never let failure get to your heart.','Nothing ever goes away until it teaches us what we need to know.','We can see through others only when we can see through ourselves.','If it makes you nervous, you are doing it right.','Keep your eyes on the stars, and your feet on the ground.','When you have a dream, youve got to grab it and never let go.','Nothing is impossible. The word itself says Im possible!','Keep your face always toward the sunshine, and shadows will fall behind you.','Success is not final, failure is not fatal: it is the courage to continue that counts.','You define your own life. Dont let other people write your script.','You are never too old to set another goal or to dream a new dream.','Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.','You can be everything. You can be the infinite amount of things that people are.'];
let randomLifeQuotes=['The purpose of our lives is to be happy.','Get busy living or get busy dying.','You only live once, but if you do it right, once is enough.','If you want to live a happy life, tie it to a goal, not to people or things.','Never let the fear of striking out keep you from playing the game.','In order to write about life first you must live it.','Life is not a problem to be solved, but a reality to be experienced.','The way I see it, if you want the rainbow, you gotta put up with the rain.','Do all the good you can, for all the people you can, in all the ways you can, as long as you can.','Dont settle for what life gives you make life better and build something.','I like criticism. It makes you strong.','You never really learn much from hearing yourself speak.','Live for each second without hesitation.','Life is like riding a bicycle. To keep your balance, you must keep moving.','Life is a succession of lessons which must be lived to be understood.','When we do the best we can, we never know what miracle is wrought in our life or the life of another.','Life is like a coin. You can spend it any way you wish, but you only spend it once.','Keep calm and carry on.','Keep smiling, because life is a beautiful thing and there is so much to smile about.'];
let randomPainQuotes=['No winter lasts forever no spring skips its turn.','Turn your wounds into wisdom.','Failure gave me strength. Pain was my motivation.','You never know how strong you are… until being strong is the only choice you have.','Its not whether you get knocked down. Its whether you get up again.','Pain pays the income of each precious thing.','Pain and pleasure like light and darkness, succeed each other.','Pain makes me grow. Growing is what I want. Therefore, for me pain is pleasure','Without pain, without sacrifice, we would have nothing.','Pain is weakness leaving the body.','Numbing the pain for a while will make it worse when you finally feel.','There are no gains without pains.','Our strength grows out of our weaknesses.','Our most beautiful dreams are born from our most unpleasant nightmares','Bad things happen to our life so as to favor the good things that will happen next.','Suffering is an extraordinary teacher.','The great art of life is sensation, to feel that we exist, even in pain.','To truly laugh, you must be able to take your pain, and play with it!'];


function MotivationQuotes() {
  let i = Math.floor((Math.random() * randomQuotes.length));
           quote.innerText = randomQuotes[i];
}

MotivationQuotes();

function LifeQuotes(){
  let i = Math.floor((Math.random() * randomLifeQuotes.length));
           quote.innerText = randomLifeQuotes[i];

  }
  LifeQuotes();

  function PainQuotes(){
    let i = Math.floor((Math.random() * randomPainQuotes.length));
           quote.innerText = randomPainQuotes[i];
  }
PainQuotes();
