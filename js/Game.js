
class Game {

    constructor(){
        this.board = new Board();
        this.isplaying = true;
        this.interval= null;
        this.play();
    }

    play(){
        this.interval = setInterval(() => {
            if(this.board.isPossiblePlay()){
                this.setIsplaying(false);
                clearInterval(this.interval);
                alert("game over");
            }else{
                this.moveDown();
            }
        }, 500)
    }
    
    moveDown = () => {
        if(this.getIsPlaying()){
            this.board.moveTetrominoes(10);
        }
    }

    moveLeft(){
        this.board.moveLeft();
    }

    moveRight(){
        this.board.moveRight();
    }

    rotate(){
        this.board.rotate();
    }

    clear(){
        this.board.clear();
    }
    
    setScore(value){this.board.score = value}
    setIsplaying(amIPlaying){ this.isplaying = amIPlaying; }
    getIsPlaying(){ return this.isplaying; }
}