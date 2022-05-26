// The definition of "this" object is that it contain the current context.
// The this object can have different values depending on where it is placed.
// console.log(this); //this here is window object
// function gg() {
//     console.log( this ); //here also this is window in browser
    
// }
// gg();
// var nameE = "naba";
// function ggG() {
//     console.log(this.nameE );
//     console.log( this );    
// }
// ggG();
// let nameee = function () {
//     console.log(this);
//     function gg()
//         {
//             console.log( "inside inner" );
            
//             console.log(this);    
//         };
//         gg();
    
// }
// nameee();
const objjjj= {
    age: 15,
    what: this, //this is window here, bcoz it acts like a normal variable, bhitorer scope e paisena to bairer scope e giya dekhse j this ase jedar value window
    boyosh:()=>console.log( this ), //this is window here as this inside arrow takes this of outer env of arrow function
    bb: function ()
    {
        console.log(this); //this here is objjjj
    },
//     nameee,
    namki: function ()
    {
        console.log(this);
        function gg()
        {
            console.log( "inside inner" );
            
            console.log(this);  //here scope chain doesnot work and this gets binded to global object
        };
        gg();
    }            
}
// console.log( objjjj.what );
// console.log( objjjj.boyosh() );
// console.log( objjjj.bb() );
console.log( objjjj.namki() );

// var outer = {

//     hh: function ()
//     {   //'this' here is the object which called the method
//         var inner = {
//             what: this, //'this' is something that doesnot exist here, so it looks in outer scope , basically scope chain
//             innerhh:()=>console.log( this ), //looks for outer env 'this'           
//         }
//         console.log( this );        
//         console.log( inner.what );
//         console.log(inner.innerhh());
        
//     }
// }
// outer.hh();