// se pone $(elemento que queremosllamar).hide es que lo oculte -> va ocultar todos los li
//$(selector).accion()

// $("li").hide()
//$("h1").hide()

//lo correcto es:  (significa que se va cargar una vez cargado todo el documento )
// $(document).ready(()=>{
// })

//o la forma simplificada
$(()=>{

    // $("#el-1").hide()
   
    //selectores:
    //id="el-1"  ->  "#el-1"
    //class="el-1"  -> ".el-1"

    //otro ej, llamo x la clase, y que al hacer click llame una funcion. pase por consola ocutalndo 
    //al hacer click en los botones en uno desaparece h1 y en el otro aparece
  $(".hide-btn").click(()=>{
    // console.log("ocultando")
    // $("h1").hide()
    $("h1").fadeOut()

  })
  $(".show-btn").click(()=>{
    // $("#h1").show()
    $("h1").fadeIn()
  })


  //le digo que cuando haga click en li, se cambia el h1 a un color 
  $("li").click(()=>{
    $("h1").css({color:"red"})
  })
  $("li").dblclick(()=>{
    $("h1").css({color:"blue"})
  })

  //cuando haga click en agregar elemento, dentro de esta lista me añada un nuevo elemento
$(".new-element").click(()=>{
    $("ul").append("<li>Nuevo elemento</li>")
    //si quiero que añada al principio:
    $("ul").prepend("<li>Segundo Nuevo elemento</li>")
})


$("li").mouseenter(()=>{
    console.log("ha entrado el raton (hover)")
})

//si quiero cambiar el elemtno sobre el que estoy haciendo hover 
$("li").mouseenter((elemento)=>{
    elemento.target.style.color="pink"
})

//quiero que se vuelva a negro el elemento cuando sale el mouse 
$("li").mouseleave((elemento)=>{
    elemento.target.style.color="black"
})

})

