
/**Diferente do Var, o let quando usado dentro de blocos fica restrito ao respectivo bloco. Isso evita você cometer erros quando você quer usar uma variável apenas para um determinado bloco do seu código. Veja o exemplo abaixo: */

/*
if (true) {
    var teste_var = "teste var";
    let teste_let = "teste let";
    const TESTE_CONST = "teste const";
}
console.log(teste_var);
*/

/**Isso vai imprimir “teste var” no console do navegador sem nenhum problema. Agora, se você tentar imprimir teste_let você vai obter o seguinte erro:
Uncaught ReferenceError: Cannot access ‘teste_let’ before initialization */
//___________________________________________________________________________________________________________________________________________________________



/**var keyword in JavaScript: The var is the oldest keyword to declare a variable in JavaScript. 

Scope: Global scoped or function scoped. The scope of the var keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function.  */

/**Example 1: Variable ‘a’ is declared globally. So, the scope of the variable ‘a’ is global, and it can be accessible everywhere in the program. The output shown is in the console.*/

/*
	var a = 10
		function f(){
			console.log(a)
		}
	f();
	console.log(a);
*/

//__________________________________

/**Example 2: The variable ‘a’ is declared inside the function. If the user tries to access it outside the function, it will display the error. Users can declare the 2 variables with the same name using the var keyword. Also, the user can reassign the value into the var variable. The output shown in the console.*/

/*
	function f() {

		// It can be accessible any
		// where within this function
		var a = 10;
		console.log(a)
	}
	f();

	// A cannot be accessible
	// outside of function
	console.log(a);
*/

//____________________________________

/**Example 3: User can re-declare variable using var and user can update var variable. The output is shown in the console.*/

/*
	var a = 10

	// User can re-declare
	// variable using var
	var a = 8

	// User can update var variable
	a = 7

    console.log(a);
*/

//_____________________________________________________________________________________________________________

/**Example 4: If users use the var variable before the declaration, it initializes with the undefined value. The output is shown in the console.*/

/*
	console.log(a);
	var a = 10;
*/

//_______________________________________


