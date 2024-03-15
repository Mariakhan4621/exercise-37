function makeshirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love typescript'; }
    console.log('you have order a ${size}, shirt that says ${text}');
}
makeshirt();
makeshirt('medium');
//different message
makeshirt('small', 'I need a big shirt to wear');
