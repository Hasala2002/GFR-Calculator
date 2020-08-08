function calculate(){
  age=document.getElementById('age');
  cre=document.getElementById('cre');
  gender=document.getElementById('gender');
  race=document.getElementById('race');
  answer=document.getElementById('result');
calage=age.value;
calcre=cre.value;
calgender=gender.value;
calrace=race.value;

// console.log(calage);
// console.log(calcre);
// console.log(calgender);
// console.log(calrace);

  if(calgender=='male'){
      if(calrace=='black'){
        ans=141 * Math.pow(Math.min(calcre/0.9,1), -0.411) * Math.pow(Math.max(calcre/0.9,1),-1.209) * Math.pow(0.993,calage) * (1.159);
        answer.innerHTML=ans;
        // console.log('came here 1');
        // console.log(ans);
      }
      else{
        ans=141 * Math.pow(Math.min(calcre/0.9,1), -0.411) * Math.pow(Math.max(calcre/0.9,1),-1.209) * Math.pow(0.993,calage);
        answer.innerHTML=ans;
        // console.log(ans);
        // console.log('came here 2');
      }
  }
  else{
    if(calrace=='black'){
        ans=141 * Math.pow(Math.min(calcre/0.7,1), -0.329) * Math.pow(Math.max(calcre/0.7,1),-1.209) * Math.pow(0.993,calage) * (1.159) *(1.018);
        answer.innerHTML=ans;
        // console.log(ans);
        // console.log('came here 3');
      }
      else{
        ans=141 *Math.pow(Math.min(calcre/0.7,1), -0.329) * Math.pow(Math.max(calcre/0.7,1),-1.209) * Math.pow(0.993,calage) * (1.018);
        answer.innerHTML=ans;
        // console.log(ans);
        // console.log('came here 4');
      }
  }
}
