class Contato {
    constructor(){
        this.Nome = null
        this.email = null
        this.phone = null
        this.mensagem = null
        this.dt_cad = Date
        this.idade = null
        this.tipo_contato = null
    }
    //método especifico da classe contato
    Enviar(){
        let usuario = " aaaasassdaddsadadasdasdas"; 
        let ano = 2025;
        const aviso = "você está na pagina de contato";

        this.Nome = document.getElementById('Nome').value;
        this.email = null
        this.phone = null
        this.mensagem = null
        this.dt_cad = Date
        this.idade = null
        this.tipo_contato = null
    
        // => "=" atribui   =>"=="compara o conteudo string a =2025; int b = 2025  a==b(true) => "===" compara variaveis 
        // string a = 2025 int b = 2025 a===b(false)

        if(usuario === ano){
            alert("dados invalidos")
        }
        if(this.Nome===''){
            alert("a area de nome precisa ser preenchida!")
        }else{
        alert(aviso + "de" + this.Nome+" em "+ this.dt_cad());
        }
    }
}
contato = new Contato();
