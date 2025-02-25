import {useForm} from "react-hook-form";

interface FormularioRegisto {
    nome: string
    email: string
    password: string
    idade: number
    genero: string
    animal_favorito: string
    enc_educacao?: string
}

function Formulario() {
    const {register, watch, handleSubmit} = useForm<FormularioRegisto>();

    const idade = watch("idade");

    function submeter(dados: FormularioRegisto) {
        console.log(dados)
    }

    return <form onSubmit={handleSubmit(submeter)}>
        <input  {...register("nome", {required: true})} placeholder={"Nome"}/><br/>
        <input  {...register("email", {required: true})} placeholder={"E-mail"} type={"email"}/><br/>
        <input  {...register("password", {required: true})} placeholder={"Password"} type={"password"}/><br/>
        <input  {...register("idade", {required: true, valueAsNumber: true})} min={0} max={150} placeholder={"Idade"} type={"number"}/><br/>
        <input  {...register("genero", {required: true})} placeholder={"Género"}/><br/>
        <select {...register("animal_favorito", {required: true})}>
            <option disabled selected>Animal favorito</option>
            <option value="gato">Gato</option>
            <option value="cao">Cão</option>
            <option value="cavalo">Cavalo</option>
            <option value="urso">Urso</option>
            <option value="hipopotamo">Hipopótamo</option>
            <option value="girafa">Girafa</option>
            <option value="suricata">Suricata</option>
        </select><br/>
        {idade < 16 && <input {...register("enc_educacao", {required: true})} placeholder={"Nome do encarregado de educação"}/>}
        <button type={"submit"}>Submeter</button>
    </form>
}

export default Formulario;