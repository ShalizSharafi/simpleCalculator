   const result = document.getElementById('result')
       const inp = document.querySelectorAll('.inputs-row> input')

       const inputsSep = document.querySelector('.inputs-sep')
       const btn = document.querySelectorAll('.btn-op')
       const sound1 = document.getElementById('sound1')
       const sound2 = document.getElementById('sound2')


       btn.forEach((val)=>{
              val.addEventListener('click',()=>{
                     sound1.play()
                  inputsSep.innerText = val.innerText
       })
       })

       function setOp(op){
        window.op = op //make op global
       }

       function calculate(){
              sound2.play()
        //reset //
        let flag =0
        inp[0].style.border='1px solid grey'
        inp[1].style.border='1px solid grey'
        //reset //

        //get number//
        let num1 = +inp[0].value
        let num2 = +inp[1].value
        //get number//

        //execute//
        if(num1 == ''){
          inp[0].style.border='1px solid yellowgreen'
          flag++
        }

        if(num2 == '' || num2 == 0){
          inp[1].style.border='1px solid yellowgreen'
        }

        if(flag == 0){
         switch(window.op){
              case '+':result.innerText = num1+num2;break;
              case '-':result.innerText = num1-num2;break;
              case '*':result.innerText = num1*num2;break;
              case '/':result.innerText = num1/num2;break;
              default: result.innerText='operator error';
         }
        }else{
              result.innerText = ''
        }
        //execute//
       }