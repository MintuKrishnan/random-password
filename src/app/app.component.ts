import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkLetters=false;
  checkSymbols=false;
  checkNumbers=false;
  password="";
  length=0;


onClick(){

  let num='123456789';
  let lett='abcdefghijklmnopqrstuvwxyz';
  let sym="!@#$%^&*()_+"
  let genPassword='';
    if(this.checkLetters){
      genPassword+=lett;
    }
    if(this.checkNumbers){
      genPassword+=num;
    }
    if(this.checkSymbols){
      genPassword+=sym;
    }
  console.log(genPassword);
    if(this.length>=6){
      let pas="";
      for(let i=0; i<this.length; i++){
        let index=(Math.floor(Math.random()*genPassword.length))
        pas+=genPassword[index];
      }
      this.password=pas;
    }
    else{
      this.password="Length must be more than 5";
    }
}
onChangeLength(value:string){

  const checkLength=parseInt(value);
  if(!isNaN(checkLength)){
    this.length=checkLength;
  }
}
onCheckLetters(){
  this.checkLetters=!this.checkLetters;
}
onCheckNumbers(){
  this.checkNumbers=!this.checkNumbers;
}
onCheckSymbols(){
  this.checkSymbols=!this.checkSymbols;
}

}
