class FrequenciaBoletim {


    constructor(frequencia = 0) {
        this._frequencia = frequencia
        Object.freeze(this )
    }

    getFrequencia(){
        return this._frequencia
    }

    getAprovacao(){
        return (this._frequencia) >= 75 ? true : false
    }

}