a = 1

function sum(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function divide(a, b){
    if(b != 0){
        return a /b;
    }
    else{
        return 'Error: Division by zero is not allowed';
    }
}

function multiply(a, b){
    return a * b;
}

while(a > 0){
    let option = prompt(`Welcome to Halimat's Calculator, what can I do for you today?
        Please pick an option from the following:
        1. Add two numbers together.
        2. Subtract two numbers.
        3. Divide two numbers.
        4. Multiply two numbers.
        5. Thank you but nothing for now.`);

        if (option ==1){
            let num1 = Number(prompt(`enter the first number`));
            let num2 = Number(prompt(`enter the second number`));
            alert(sum(num1, num2));
            let option = prompt(`Do you want to perform another calculation?
                Enter (Y) for yes or
                (N) for no`)
                
                if (option == 'Y'){
                    let option = prompt(`Welcome to Halimat's Calculator, what can I do for you today?
                        Please pick an option from the following:
                        1. Add two numbers together.
                        2. Subtract two numbers.
                        3. Divide two numbers.
                        4. Multiply two numbers.
                        5. Thank you but nothing for now.`);

                        if (option ==1){
                            let num1 = Number(prompt(`enter the first number`));
                            let num2 = Number(prompt(`enter the second number`));
                            alert(sum(num1, num2));
                            alert('Thank you for using my caculator. Have a great day.');
                    break;
                }
                if (option ==2){
                    let num1 = Number(prompt(`enter the first number`));
                    let num2 = Number(prompt(`enter the second number`));
                    alert(subtract(num1, num2));
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                if (option ==3){
                    let num1 = Number(prompt(`enter the first number`));
                    let num2 = Number(prompt(`enter the second number`));
                    alert(divide(num1, num2));
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                if (option ==4){
                    let num1 = Number(prompt(`enter the first number`));
                    let num2 = Number(prompt(`enter the second number`));
                    alert(multiply(num1, num2));
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                if (option ==5){
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                else{
                    alert('Invalid option. Please try again');
                    break;
                }
                }
                if(option == 'N'){
            alert('Thank you for using my caculator. Have a great day.');
            break;
                }
        }
    

        if (option ==2){
            let num1 = Number(prompt(`enter the first number`));
            let num2 = Number(prompt(`enter the second number`));
            alert(subtract(num1, num2));
            let option = prompt(`Do you want to perform another calculation?
                Enter (Y) for yes or
                (N) for no`)
                
                if (option == 'Y'){
                    let option = prompt(`Welcome to Halimat's Calculator, what can I do for you today?
                        Please pick an option from the following:
                        1. Add two numbers together.
                        2. Subtract two numbers.
                        3. Divide two numbers.
                        4. Multiply two numbers.
                        5. Thank you but nothing for now.`);

                        if (option ==1){
                            let num1 = Number(prompt(`enter the first number`));
                            let num2 = Number(prompt(`enter the second number`));
                            alert(sum(num1, num2));
                            alert('Thank you for using my caculator. Have a great day.');
                    break;
                }
                if (option ==2){
                    let num1 = Number(prompt(`enter the first number`));
                    let num2 = Number(prompt(`enter the second number`));
                    alert(subtract(num1, num2));
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                if (option ==3){
                    let num1 = Number(prompt(`enter the first number`));
                    let num2 = Number(prompt(`enter the second number`));
                    alert(divide(num1, num2));
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                if (option ==4){
                    let num1 = Number(prompt(`enter the first number`));
                    let num2 = Number(prompt(`enter the second number`));
                    alert(multiply(num1, num2));
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                if (option ==5){
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                else{
                    alert('Invalid option. Please try again');
                    break;
                }
                }
                if(option == 'N'){
            alert('Thank you for using my caculator. Have a great day.');
            break;
                }
        }

        if (option ==3){
            let num1 = Number(prompt(`enter the first number`));
            let num2 = Number(prompt(`enter the second number`));
            alert(divide(num1, num2));
            let option = prompt(`Do you want to perform another calculation?
                Enter (Y) for yes or
                (N) for no`)
                
                if (option == 'Y'){
                    let option = prompt(`Welcome to Halimat's Calculator, what can I do for you today?
                        Please pick an option from the following:
                        1. Add two numbers together.
                        2. Subtract two numbers.
                        3. Divide two numbers.
                        4. Multiply two numbers.
                        5. Thank you but nothing for now.`);

                        if (option ==1){
                            let num1 = Number(prompt(`enter the first number`));
                            let num2 = Number(prompt(`enter the second number`));
                            alert(sum(num1, num2));
                            alert('Thank you for using my caculator. Have a great day.');
                    break;
                }
                if (option ==2){
                    let num1 = Number(prompt(`enter the first number`));
                    let num2 = Number(prompt(`enter the second number`));
                    alert(subtract(num1, num2));
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                if (option ==3){
                    let num1 = Number(prompt(`enter the first number`));
                    let num2 = Number(prompt(`enter the second number`));
                    alert(divide(num1, num2));
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                if (option ==4){
                    let num1 = Number(prompt(`enter the first number`));
                    let num2 = Number(prompt(`enter the second number`));
                    alert(multiply(num1, num2));
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                if (option ==5){
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                else{
                    alert('Invalid option. Please try again');
                    break;
                }
                }
                if(option == 'N'){
            alert('Thank you for using my caculator. Have a great day.');
            break;
                }
        }

        if (option ==4){
            let num1 = Number(prompt(`enter the first number`));
            let num2 = Number(prompt(`enter the second number`));
            alert(multiply(num1, num2));
            let option = prompt(`Do you want to perform another calculation?
                Enter (Y) for yes or
                (N) for no`)
                
                if (option == 'Y'){
                    let option = prompt(`Welcome to Halimat's Calculator, what can I do for you today?
                        Please pick an option from the following:
                        1. Add two numbers together.
                        2. Subtract two numbers.
                        3. Divide two numbers.
                        4. Multiply two numbers.
                        5. Thank you but nothing for now.`);

                        if (option ==1){
                            let num1 = Number(prompt(`enter the first number`));
                            let num2 = Number(prompt(`enter the second number`));
                            alert(sum(num1, num2));
                            alert('Thank you for using my caculator. Have a great day.');
                    break;
                }
                if (option ==2){
                    let num1 = Number(prompt(`enter the first number`));
                    let num2 = Number(prompt(`enter the second number`));
                    alert(subtract(num1, num2));
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                if (option ==3){
                    let num1 = Number(prompt(`enter the first number`));
                    let num2 = Number(prompt(`enter the second number`));
                    alert(divide(num1, num2));
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                if (option ==4){
                    let num1 = Number(prompt(`enter the first number`));
                    let num2 = Number(prompt(`enter the second number`));
                    alert(multiply(num1, num2));
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                if (option ==5){
                    alert('Thank you for using my caculator. Have a great day.');
                    break;
                }

                else{
                    alert('Invalid option. Please try again');
                    break;
                }
                }
                if(option == 'N'){
            alert('Thank you for using my caculator. Have a great day.');
            break;
                }
        }

        if (option ==5){
            alert('Thank you for using my caculator. Have a great day.');
            break;
        }
        else{
            alert('Invalid option. Please try again');
            break;
        }
}