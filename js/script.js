const container=document.querySelector(".app");

const myApp=[

              { 
               type:" INICIAIS ",
               msg:" ",
               path:"images/letraF",
               structure:[
                              {question:"FU",options:['FADA.jpg','FENO.jpg','FELINOS.jpg','FUTEBOL.jpg'],key:3},

                              {question:"FA",options:['FOTO.jpg','FUMACA.jpg','FABRICA.jpg','FILA.jpg'],key:2},

                              {question:"FO",options:['FACA.jpg','FORMIGA.jpg','FIVELA.jpg','FUSCA.jpg'],key:1},
  
                              {question:"FI",options:['FILE.jpg','FAMILIA.jpg','FORNO.jpg','FEIJAO.jpg'],key:0},

                              {question:"FA",options:['FILHOTE.jpg','FIGO.jpg','FOSFOROS.jpg','FABULAS.jpg'],key:3},                                                                           

                              {question:"FU",options:['FORTUNA.jpg','FORMATURA.jpg','FUSCA.jpg','FOGUETE.jpg'],key:2},

                              {question:"FA",options:['FANTASMA.jpg','FOLHA.jpg','FOFOCA.jpg','FOCA.jpg'],key:0},

                              {question:"FE",options:['FIGO.jpg','FAZENDA.jpg','FAXINA.jpg','FERRARI.jpg'],key:3},

                              {question:"FO",options:['FEBRE.jpg','FAROL.jpg','FOCA.jpg','FELICIDADE.jpg'],key:2},
  
                              {question:"FI",options:['FESTA.jpg','FIVELA.jpg','FAROFA.jpg','FABRICA.jpg'],key:1},
                        
                              {question:"FE ",options:['FIVELA.jpg','FANTASIA.jpg','FAZENDEIRO.jpg','FERRADURA.jpg'],key:3},
                                                                                
                              {question:"FA",options:['FAROL.jpg','FILHOTE.jpg','FOFOCA.jpg','FESTA.jpg'],key:0},

                              {question:"FO",options:['FUMACA.jpg','FUNIL.jpg','FORMATURA.jpg','FUTEBOL.jpg'],key:2},

                              {question:"FA",options:['FACA.jpg','FERRARI.jpg','FORNO.jpg','FOGUEIRA.jpg'],key:0},

                              {question:"FO",options:['FAMILIA.jpg','FACA.jpg','FORTUNA.jpg','FUMACA.jpg'],key:2},

                              {question:"FU",options:['FANTOCHES.jpg','FUMACA.jpg','FESTA.jpg','FERIMENTO.jpg'],key:1},

                              {question:"FI",options:['FEIJAO.jpg','FEBRE.jpg','FILA.jpg','FOCA.jpg'],key:2},       
                                              
                              {question:"FE",options:['FOFOCA.jpg','FOGAO.jpg','FOLHA.jpg','FELICIDADE.jpg'],key:3},

                              {question:"FO",options:['FOSFOROS.jpg','FAROL.jpg','FELICIDADE.jpg','FUNIL.jpg'],key:0},
                           
                              {question:"FA",options:['FUSCA.jpg','FOSFOROS.jpg','FAMILIA.jpg','FELINOS.jpg'],key:2},                               

                              {question:"FI",options:['FOGUEIRA.jpg','FILHOTE.jpg','FOCA.jpg','FOLHA.jpg'],key:1},                       
                          
                              {question:"FA",options:['FERRARI.jpg','FERIMENTO.jpg','FILE.jpg','FANTOCHES.jpg'],key:3},

                              {question:"FO",options:['FAROFA.jpg','FELICIDADE.jpg','FOTO.jpg','FAMILIA.jpg'],key:2},
                           
                              {question:"FA",options:['FERIAS.jpg','FADA.jpg','FORTUNA.jpg','FUMACA.jpg'],key:1},

                              {question:"FE",options:['FESTA.jpg','FILHOTE.jpg','FOFOCA.jpg','FOGAO.jpg'],key:0}, 

                              {question:"FA",options:['FUNIL.jpg','FERIAS.jpg','FOGAO.jpg','FAZENDA.jpg'],key:3},

                              {question:"FU",options:['FELICIDADE.jpg','FUNIL.jpg','FERIAS.jpg','FILHOTE.jpg'],key:1},

                              {question:"FO",options:['FOGUEIRA.jpg','FANTASIA.jpg','FANTASMA.jpg','FILE.jpg'],key:0},

                              {question:"FI",options:['FANTOCHES.jpg','FOTO.jpg','FIGO.jpg','FACA.jpg'],key:2},

                              {question:"FE",options:['FARINHA.jpg','FERIMENTO.jpg','FADA.jpg','FIVELA.jpg'],key:1},

                              {question:"FÁ",options:['FEIJAO.jpg','FOSFOROS.jpg','FUTEBOL.jpg','FABULAS.jpg'],key:3},
 
                              {question:"FO",options:['FILHOTE.jpg','FAZENDEIRO.jpg','FOGUETE.jpg','FANTASIA.jpg'],key:2},

                              {question:"FE",options:['FEBRE.jpg','FORNO.jpg','FIVELA.jpg','FABULAS.jpg'],key:0},

                              {question:"FO",options:['FAROL.jpg','FILA.jpg','FOGAO.jpg','FERRADURA.jpg'],key:2},

                              {question:"FE",options:['FAXINA.jpg','FEIJAO.jpg','FAMILIA.jpg','FABRICA.jpg'],key:1},

                              {question:"FA",options:['FANTASIA.jpg','FUTEBOL.jpg','FEIRANTE.jpg','FORMIGA.jpg'],key:0},

                              {question:"FO",options:['FUMACA.jpg','FESTA.jpg','FONE.jpg','FILE.jpg'],key:2},
                              
                              {question:"FA",options:['FAROFA.jpg','FEBRE.jpg','FUNIL.jpg','FORTUNA.jpg'],key:0},

                              {question:"FE",options:['FAXINA.jpg','FELINOS.jpg','FAROESTE.jpg','FIGO.jpg'],key:1},

                              {question:"FA",options:['FOSFOROS.jpg','FORTE.jpg','FORMIGA.jpg','FARAO.jpg'],key:3},

                              {question:"FO",options:['FAMILIA.jpg','FACA.jpg','FARINHA.jpg','FORNO.jpg'],key:3},

                              {question:"FA",options:['FENO.jpg','FARINHA.jpg','FORMATURA.jpg','FOGUETE.jpg'],key:1},

                              {question:"FO",options:['FORTE.jpg','FELINOS.jpg','FERIMENTO.jpg','FENO.jpg'],key:0},

                              {question:"FÉ",options:['FOGAO.jpg','FERIAS.jpg','FOSFOROS.jpg','FADA.jpg'],key:1},

                              {question:"FO",options:['FUMACA.jpg','FESTA.jpg','FOCA.jpg','FILE.jpg'],key:2},

                              {question:"FE",options:['FANTASMA.jpg','FARAO.jpg','FILHOTE.jpg','FEIRANTE.jpg'],key:3},

                              {question:"FO",options:['FABULAS.jpg','FAROESTE.jpg','FANTOCHES.jpg','FOLHA.jpg'],key:3},

                              {question:"FA",options:['FAROESTE.jpg','FORMIGA.jpg','FUSCA.jpg','FERRADURA.jpg'],key:0},

                              {question:"FO",options:['FIVELA.jpg','FOFOCA.jpg','FAXINA.jpg','FANTASIA.jpg'],key:1},

                              {question:"FA",options:['FERRARI.jpg','FORTUNA.jpg','FAXINA.jpg','FUMACA.jpg'],key:2}
 
                   ]
              },

              {

               type:" PALAVRAS ",
               msg:" ",
               path:"images/letraF",
               structure:[
                              {question:"FUTEBOL",options:['FADA.jpg','FENO.jpg','FELINOS.jpg','FUTEBOL.jpg'],key:3},

                              {question:"FÁBRICA",options:['FOTO.jpg','FUMACA.jpg','FABRICA.jpg','FILA.jpg'],key:2},

                              {question:"FORMIGA",options:['FACA.jpg','FORMIGA.jpg','FIVELA.jpg','FUSCA.jpg'],key:1},
  
                              {question:"FILÉ",options:['FILE.jpg','FAMILIA.jpg','FORNO.jpg','FEIJAO.jpg'],key:0},

                              {question:"FÁBULAS",options:['FILHOTE.jpg','FIGO.jpg','FOSFOROS.jpg','FABULAS.jpg'],key:3},                                                                           

                              {question:"FUSCA",options:['FORTUNA.jpg','FORMATURA.jpg','FUSCA.jpg','FOGUETE.jpg'],key:2},

                              {question:"FANTASMA",options:['FANTASMA.jpg','FOLHA.jpg','FOFOCA.jpg','FOCA.jpg'],key:0},

                              {question:"FERRARI",options:['FIGO.jpg','FAZENDA.jpg','FAXINA.jpg','FERRARI.jpg'],key:3},

                              {question:"FUMAÇA",options:['FEBRE.jpg','FOTO.jpg','FUMACA.jpg','FELICIDADE.jpg'],key:2},
  
                              {question:"FIVELA",options:['FESTA.jpg','FIVELA.jpg','FAROFA.jpg','FABRICA.jpg'],key:1},
                        
                              {question:"FERRADURA",options:['FIVELA.jpg','FANTASIA.jpg','FAZENDEIRO.jpg','FERRADURA.jpg'],key:3},
                                                                                
                              {question:"FAROL",options:['FAROL.jpg','FILHOTE.jpg','FELINOS.jpg','FESTA.jpg'],key:0},

                              {question:"FORMATURA",options:['FUMACA.jpg','FUNIL.jpg','FORMATURA.jpg','FUTEBOL.jpg'],key:2},

                              {question:"FACA",options:['FACA.jpg','FERRARI.jpg','FORNO.jpg','FOGUEIRA.jpg'],key:0},

                              {question:"FORTUNA",options:['FAMILIA.jpg','FACA.jpg','FORTUNA.jpg','FUMACA.jpg'],key:2},

                              {question:"FUMAÇA",options:['FANTOCHES.jpg','FUMACA.jpg','FESTA.jpg','FERIMENTO.jpg'],key:1},

                              {question:"FILA",options:['FEIJAO.jpg','FEBRE.jpg','FILA.jpg','FOCA.jpg'],key:2},       
                                              
                              {question:"FELICIDADE",options:['FOFOCA.jpg','FOGAO.jpg','FOLHA.jpg','FELICIDADE.jpg'],key:3},

                              {question:"FÓSFOROS",options:['FOSFOROS.jpg','FAROL.jpg','FELICIDADE.jpg','FUNIL.jpg'],key:0},
                           
                              {question:"FAMÍLIA",options:['FUSCA.jpg','FOSFOROS.jpg','FAMILIA.jpg','FELINOS.jpg'],key:2},                               

                              {question:"FELINOS",options:['FOGUEIRA.jpg','FELINOS.jpg','FOCA.jpg','FOLHA.jpg'],key:1},                       
                          
                              {question:"FANTOCHES",options:['FERRARI.jpg','FERIMENTO.jpg','FILE.jpg','FANTOCHES.jpg'],key:3},

                              {question:"FOTO",options:['FAROFA.jpg','FELICIDADE.jpg','FOTO.jpg','FAMILIA.jpg'],key:2},
                           
                              {question:"FADA",options:['FERIAS.jpg','FADA.jpg','FORTUNA.jpg','FUMACA.jpg'],key:1},

                              {question:"FESTA",options:['FESTA.jpg','FILHOTE.jpg','FOFOCA.jpg','FOGAO.jpg'],key:0}, 

                              {question:"FAZENDA",options:['FUNIL.jpg','FERIAS.jpg','FOGAO.jpg','FAZENDA.jpg'],key:3},

                              {question:"FUNIL",options:['FELICIDADE.jpg','FUNIL.jpg','FERIAS.jpg','FILHOTE.jpg'],key:1},

                              {question:"FOGUEIRA",options:['FOGUEIRA.jpg','FANTASIA.jpg','FANTASMA.jpg','FILE.jpg'],key:0},

                              {question:"FIGO",options:['FANTOCHES.jpg','FOTO.jpg','FIGO.jpg','FACA.jpg'],key:2},

                              {question:"FERIMENTO",options:['FARINHA.jpg','FERIMENTO.jpg','FADA.jpg','FIVELA.jpg'],key:1},

                              {question:"FOCA",options:['FUMACA.jpg','FESTA.jpg','FOCA.jpg','FILE.jpg'],key:2},

                              {question:"FÁBULAS",options:['FEIJAO.jpg','FOSFOROS.jpg','FUTEBOL.jpg','FABULAS.jpg'],key:3},
 
                              {question:"FOGUETE",options:['FELINOS.jpg','FAZENDEIRO.jpg','FOGUETE.jpg','FANTASIA.jpg'],key:2},

                              {question:"FEBRE",options:['FEBRE.jpg','FORNO.jpg','FIVELA.jpg','FABULAS.jpg'],key:0},

                              {question:"FOGÃO",options:['FAROL.jpg','FILA.jpg','FOGAO.jpg','FERRADURA.jpg'],key:2},

                              {question:"FEIJÃO",options:['FAXINA.jpg','FEIJAO.jpg','FAMILIA.jpg','FABRICA.jpg'],key:1},

                              {question:"FANTASIA",options:['FANTASIA.jpg','FUTEBOL.jpg','FEIRANTE.jpg','FORMIGA.jpg'],key:0},

                              {question:"FONE",options:['FUMACA.jpg','FESTA.jpg','FONE.jpg','FILE.jpg'],key:2},
                              
                              {question:"FEIRANTE",options:['FANTASMA.jpg','FARAO.jpg','FILHOTE.jpg','FEIRANTE.jpg'],key:3},

                              {question:"FAROFA",options:['FAROFA.jpg','FEBRE.jpg','FUNIL.jpg','FORTUNA.jpg'],key:0},

                              {question:"FILHOTE",options:['FERRARI.jpg','FILHOTE.jpg','FERIAS.jpg','FOLHA.jpg'],key:1},

                              {question:"FARAÓ",options:['FOSFOROS.jpg','FORTE.jpg','FORMIGA.jpg','FARAO.jpg'],key:3},

                              {question:"FORNO",options:['FAMILIA.jpg','FACA.jpg','FARINHA.jpg','FORNO.jpg'],key:3},

                              {question:"FARINHA",options:['FENO.jpg','FARINHA.jpg','FORMATURA.jpg','FOGUETE.jpg'],key:1},

                              {question:"FORTE",options:['FORTE.jpg','FELINOS.jpg','FERIMENTO.jpg','FENO.jpg'],key:0},

                              {question:"FÉRIAS",options:['FOGAO.jpg','FERIAS.jpg','FOSFOROS.jpg','FADA.jpg'],key:1},

                              {question:"FOLHA",options:['FABULAS.jpg','FAROESTE.jpg','FANTOCHES.jpg','FOLHA.jpg'],key:3},

                              {question:"FAROESTE",options:['FAROESTE.jpg','FORMIGA.jpg','FUSCA.jpg','FERRADURA.jpg'],key:0},

                              {question:"FOFOCA",options: ['FIVELA.jpg','FOFOCA.jpg','FAXINA.jpg','FANTASIA.jpg'],key:1},

                              {question:"FAXINA",options:['FERRARI.jpg','FORTUNA.jpg','FAXINA.jpg','FUMACA.jpg'],key:2}
 
                              

                        ]
              }

    ] 



     // create select element
     const select=document.createElement("select");
           select.setAttribute("onchange","load(this)") 
      for (let j=0;j<myApp.length;j++){
          const option=document.createElement("option");
                option.value=j;
                option.innerHTML=myApp[j].type;
                select.appendChild(option)
      }
     document.querySelector(".quiz-box").appendChild(select)

     //create class
     class App{
           constructor(myApp,container){
                this.app=myApp;
                this.container=container;
                this.index=0;
                this.score=0;
                this.quizSize=this.app.structure.length
                this.optionSize=this.app.structure[0].options.length;
                this.msgEle=this.container.querySelector(".msg"); 
                this.quizEle=this.container.querySelector(".quiz")
                this.optionEle=this.container.querySelector(".option-box");
                this.questionNumber=this.container.querySelector(".question-number");
                this.scoreEle=this.container.querySelector(".score-board"); 
                this.setQuestion();
                this.setOptions();
                this.scoreBoard();

           }

           setQuestion(){ 
               this.msgEle.innerHTML=this.app.msg;
               this.quizEle.innerHTML=this.app.structure[this.index].question;
               this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
         }

           setOptions(){
                this.optionEle.innerHTML="";
                for(let i=0; i<this.optionSize; i++){
                  const button=document.createElement("button")
                        button.type="button";
                        button.id=i;
                  const img=document.createElement("img");
                        img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
                        button.appendChild(img)
                    this.optionEle.appendChild(button)     
                }
                this.optionClick();
                

           }

           scoreBoard(){
              this.scoreEle.innerHTML=this.score;
           }

           optionClick(){
               const that=this;
              var options=this.optionEle.children;
              for (let i=0; i<options.length; i++) {
                   options[i].addEventListener("click",function(){
                      const span=document.createElement("span");
                     if(this.id==that.app.structure[that.index].key){
                         span.innerHTML="  =D  ";
                         this.classList.add("correta");
                         that.score++;
                         that.scoreBoard();
                      }
                      else{
                          span.innerHTML="  =(  ";
                          this.classList.add("errada");
                      }
                      this.appendChild(span);

                      
                     for (let j=0; j<that.optionEle.children.length; j++) {
                         
                          if(this.id==that.optionEle.children[j].id) {

                          }
                           // you can also show the correct answer when you click on wrong option
                           else if (that.optionEle.children[j].id==that.app.structure[that.index].key){
                                var span2=document.createElement("span")
                                span2.innerHTML=" =P ";
                                that.optionEle.children[j].appendChild(span2)
                               that.optionEle.children[j].classList.add("correta");
                          }
                          else{
                               that.optionEle.children[j].classList.add("hide"); 

                          }
                    
                    }
                    this.style.pointerEvents="none";
                    that.index++;
                    if(that.index>that.quizSize-1){
                        setTimeout(function(){
                          that.quizOver();
                        },2000);
                        that.quizOver();
                    }
                    else{
                    // next quiz update
                    setTimeout(function(){
                      that.setQuestion()
                      that.setOptions()
                    },2000)
                    }

                    })

                }

           }

           quizOver(){

              this.msgEle.innerHTML="";
              this.quizEle.innerHTML="";
              
              if (this.score > this.quizSize/2){
                   
                   this.optionEle.innerHTML="<h1><img src='images/over.png'/><br> </h1>";

              }
              else{
                this.optionEle.innerHTML="<h1><img src='images/game.png'/><br> </h1>";
              }
              
           }
     }
       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }

