class NotasBoletim {


    constructor(nota1 = 0, nota2 = 0, nota3 = 0) {
        
        this._nota1 = Number(nota1)
        this._nota2 = Number(nota2)
        this._nota3 = Number(nota3)

        Object.freeze(this )
    }

    getNota1(){
        return this._nota1
    }

    getNota2(){
        return this._nota2
    }

    getNota3(){
        return this._nota3
    }

    getMedia() {
        let soma = Number(this._nota1) + Number(this._nota2)
        let media = soma / 2
        return Number(media)
    }

    getMediaFinal(){
        if(this.getMedia() >= 70){
            return this.getMedia()
        }
        return  Number((this.getMedia()+Number(this._nota3))/2)
    }

    getAprovacao(){
        if (this.getMedia() >= 70){
            return true
        }else if(this.getMedia() >= 30){
            if(this.getMediaFinal() >= 50){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }

}