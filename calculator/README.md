# Project: My Calculator
## Purpuse to write this App
When we write math expression, Infix Expression is used, for example: `1+(2-3)*4+20/5`, sometimes there are even more nested brackets in the Infix Expression. It's easy for us to figure out the `operation priority`, like calculate expression inside the bracket first, or calculate '*' and '/' first, then '+' and '-'. But this is pretty hard for computer to calculate in this way. But if we convert Infix Expression to Post Expression, then it's easy for computer. 

Infix Expression | Postfix Expression
--- | ---
1+2 | 12+
1+(2-3) | 123-+
1+(2-3)\*4 | 123-4\*+
1+4*(2-3) | 1423-*+

## Functions
1. Convert Infix Expression to Postfix Expression: Using stack, loop through input array, when the item is number, output directly; when the item is NaN, push into stack. If the item is ')', the pop out last one from stack, and output it in order, until '(', then pop out ')'; if the item's priority is lower than the last one of the stack, the pop out the last one of stack and output in order, until the last one's priority is lower than the item, push the item into stack.
2. Calculate by using Postfix Expression: Using stack, loop through input array, when the item is number, push into stack; when the item is operator(+-*/), pop out last two from stack, calculate by operator, and push result back to stack. In the end, if the stack.length > 1, there are some errors of the input, otherwise, the only item in the stack is the result.