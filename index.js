 //ways to print in javascript
 document.write("here is document write")
 console.log("Hello worls",4+6,"another log")
 // javascript console api
       // console.log("Hello worls")
    /*    console.warn("warning")
        console.error("error")

        var str1="hey"
        var num1=34.55
        var marks={
            ravi: 33,
            sheetal:43
        }
        var a= true;
        var b= false;

        var und=undefined;
        console.log(undefined)
        var arr=["pagal",1,2]
        console.log(und)
        console.log(a,b)
        console.log(num1)
        console.log(marks)
        console.log(a)*/
        function avg(a,b){
            return (a+b)/2
        }
        c1=avg(2,4)
        c2=avg(2,2)
        console.log(c1,c2)
        var arr=["fan","car",3,null]
       /* arr.forEach(function(element){
            
            console.log(element)
        })
        for(var i=0;i<arr.length;i++){
            if(i==3){
                continue
                
            }
            console.log(arr[i])
        }
        console.log(arr.length)
        console.log(arr)
        arr.pop()
        console.log(arr)
        arr.push("sejal")
        console.log(arr)
        arr.unshift("sihare")
        console.log(arr)
        console.log(arr.unshift("sihare"))
        let str="hey i am sejal sihare "
        console.log(str)
        console.log(str.length)
        console.log(str.indexOf("sejal"))
        console.log(str.lastIndexOf("sihare"))
        console.log(str.slice(0,3))
        console.log(str.replace("sejal","sameeksha"))
        let mydate=new Date();
        console.log(mydate.getTime())
        console.log(mydate.getFullYear())
        console.log(mydate.getDay())*/
        //DOM MANIPULATION
        let tn=document.getElementsByTagName('div')
     console.log(tn)
     let crname= document.createElement('p')
     crname.innerHTML="Hey ya"
     tn[0].appendChild(crname)
     let cr= document.createElement('b')
     cr.innerHTML="I am bold"
     tn[0].replaceChild(cr,crname)

    //     let eleclass=document.getElementsByClassName("cointainer")

    //     console.log(eleclass)
    //  //  eleclass[0].style.background="pink"
    //      eleclass[1].classList.add("bgprimary")
    //      eleclass[0].classList.add("bgwhite")
    //      eleclass[0].classList.remove("bgwhite")
    // let sel=document.querySelector('.cointainer')
    // console.log(sel)
    // function clicked(){
    //     console.log("button is clicked")
    // }
    //   window.onload=function(){
    //     console.log("I am loaded")
    //  }
    //  Firstcointainer.addEventListener('click',function(){
    //     document.querySelectorAll('.cointainer')[1].innerHTML="<b> WE nave clicjed</b>"
    //     console.log("click hua");
    //  })
    //  Firstcointainer.addEventListener('mouseover',function(){
    //     console.log("click hua mouse");
    //  })
    //  let prev=document.querySelectorAll('.cointainer')[1].innerHTML="<b> WE nave clicjed</b>"

    //  Firstcointainer.addEventListener('mouseup',function(){
    //     document.querySelectorAll('.cointainer')[1].innerHTML=prev
    //     console.log(" mouse up");
    //  })
     
    //  Firstcointainer.addEventListener('mousedown',function(){
    //     document.querySelectorAll('.cointainer')[1].innerHTML="<b> WE nave clicjed</b>"
    //     console.log(" mouse down");
    //  })
    // arrow function
    sum=(a,b)=>{
        return a+b;
    }
//set time out and set interval
// ok= ()=>{
//     console.log(" im logged")
// }
// setTimeout(ok,2000) ;
// //repetedly
// kallu=()=>{
//     console.log("You are kallu")
// }
// clr=setInterval(kallu,2000) ;
//local storage

