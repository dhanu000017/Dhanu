/**
 *  [{"word":"place","phonetic":"/pleɪs/","phonetics":[{"text":"/pleɪs/","audio":"https://api.dictionaryapi.dev/media/pronunciations/en/place-uk.mp3","sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=9028082","license":{"name":"BY3.0US","url":"https://creativecommons.org/licenses/by/3.0/us"}},{"text":"/pleɪs/","audio":"https://api.dictionaryapi.dev/media/pronunciations/en/place-us.mp3","sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=711208","license":{"name":"BY-SA3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"}}],"meanings":[{"partOfSpeech":"noun","def

 */
 function Submit(){
	console.log("word")
	var word=document.getElementById("input1");
	var para=document.getElementById("para");
	var audi=document.getElementById("audi");
	
	var ta=document.getElementById("ta");
	ta.style.display="block";
		var xhr=new XMLHttpRequest();
 		xhr.onreadystatechange=function(){
		console.log(this.readyState);
		if((this.readyState==4)){
			if(this.status==200){
				/*console.log(xhr.responseText)
				JSON.parse(xhr.responseText).map((ele)=>{
				para.innerHTML+=`<div id="trs" <span class="trspara">${ele.word}</span><span class="trspara">${ele.synonyms}</span></div>`;
			})	*/	
			
			var responceObject=JSON.parse(xhr.responseText);
			console.log(responceObject,responceObject[0].meanings[0].synonyms,responceObject[0].meanings[0].antonyms);
			para.innerText+="word	: "+word.value+"\n";
			
			para.innerText+="phonetic	: "+responceObject[0].phonetic+"\n";
			
			para.innerText+="audio	: "+responceObject[0].phonetics[0].audio+"\n";
			audi.setAttribute("src",responceObject[0].phonetics[0].audio);
			
			
			para.innerText+="partOfSpeech	: ";
			para.innerText+=responceObject[0].meanings[0].partOfSpeech+"\n";
			
			if(responceObject[0].meanings[0].synonyms.length!=0)
			para.innerText+="synonyms	: ";
			for(let i=0; i<responceObject[0].meanings[0].synonyms.length;i++){
				para.innerText+=responceObject[0].meanings[0].synonyms[i]+"\n";
			}
			
			if(responceObject[0].meanings[0].antonyms.length!=0)
			para.innerText+="antonyms	: ";
			for(let i=0; i<responceObject[0].meanings[0].antonyms.length;i++){
				para.innerText+=responceObject[0].meanings[0].antonyms[i]+"\n";
			}
			
			/*para.innerText+=responceObject[0].definitions[0].definition[i]+"\n";*/
			
			}
		}
	}
var reqparam={};
	reqparam.word=document.getElementById("input1").value;
	
 		xhr.open("POST","ProjectAPI");
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send("word="+reqparam.word);
		
		
	
	
}