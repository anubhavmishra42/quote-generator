const quoteClick=document.querySelector('.Quote-button');
const quoteTxt=document.querySelector('.Quote');
const Author=document.querySelector('.Author');
const anchor=document.querySelector('.button-container a')
const tweetButton=document.querySelector('.Tweet-button');
const callBack=async function()
{
const res=await fetch('https://type.fit/api/quotes');
if(!res.ok) throw new Error(`Not working because ${res.status}`);
  
const data=await res.json();

return data;
}
quoteClick.addEventListener('click',function(){
    callBack().then(data=>{
        const ranQuote=Math.floor(Math.random()*data.length);
        const quoteText=data[ranQuote].text;
        const quoteAuthor=data[ranQuote].author;
        quoteTxt.textContent=quoteText;
        Author.textContent=quoteAuthor;
        tweetButton.addEventListener('click',function(){
        anchor.href=(`https://twitter.com/intent/tweet?text=${quoteText}`); 
        })
         
    }) 
});

