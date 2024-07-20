function ConvertTemp() {
        const input = document.getElementById('cel').value;
        const output =( (input* 9)/5)+32;
        document.getElementById('far').value = output;
}
    
    