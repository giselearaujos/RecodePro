# Do Flask, quero importar Flask, render_template e solicitar
from flask import Flask, render_template, request

# Declare o app
app = Flask(__name__)

# Inicie uma rota de aplicativo que seja '/'
@app.route('/')
# Declare a função principal
def main():
    return render_template('app.html')

# Rota de envio de formulário
@app.route('/send', methods=['POST'])
def send(sum=sum):
    if request.method == 'POST':
        # Extrair dados da entrada do formulário
        num1 = request.form['num1']
        num2 = request.form['num2']
        operation = request.form['operation']
    # Calcular as declarações IF
        if operation == 'add':
            sum = float(num1) + float(num2)
            return render_template('app.html',sum=sum)
        elif operation == 'subtract':
            sum = float(num1) - float(num2)
            return render_template('app.html',sum=sum) 
        elif operation == 'multiply':
            sum = float(num1) * float(num2)
            return render_template('app.html',sum=sum)
        elif operation == 'divide':
            sum = float(num1) / float(num2)
            return render_template('app.html',sum=sum) 
        else:
            return render_template('app.html',sum=sum)           




