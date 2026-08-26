// Slot Machine
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda.
// Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios
// que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true,
// y por tanto deberá mostrarse por consola el mensaje:
// "Congratulations!!!. You won <número de monedas> coins!!";

// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:
// "Good luck next time!!".

class SlotMachine {
  private coinsCounter: number = 0;
  private static readonly LOSS_MESSAGE = '"Good luck next time!!"';
  private static readonly BOOLEANS_TO_GENERATE = 3;

  public play(): void {
    this.coinsCounter++;

    const booleans = this.generateRandomBoolean();

    const hasLost = booleans.some((boolean) => boolean === false)
    return hasLost ? this.loss() : this.win();
  }

  private win(){
    const message = this.generateWinMessage();
    this.clearCounter();
    this.printMessage(message);
  }

  private loss(){
    this.printMessage(SlotMachine.LOSS_MESSAGE)
  }

  private clearCounter(){
    this.coinsCounter = 0;
  }

  private printMessage(message: string){
    console.log(message)
  }

  private generateRandomBoolean(): boolean[]{
    const booleans = [];
    while (booleans.length < SlotMachine.BOOLEANS_TO_GENERATE) {
        booleans.push(Math.random() < 0.5)
    }
    return booleans; 
  }

  private generateWinMessage(){
    return `"Congratulations!!!. You won ${this.coinsCounter} coins!!"`;
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();