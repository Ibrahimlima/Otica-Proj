import './estilo.css'



export default function Contato(){
    return(

        <section id='Contato' className='contato'>
            <div className='limitar'>
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através
                    de nossas redes sociais ou da central de atendimento.
                </p>
                <div className='contatos'>
                    <div className='contato-conteudo'>
                        <h3>Contato</h3>
                        <figure>
                        <img src="assets/local.png" />
                        <figcaption>Nova Iguaçu,RJ</figcaption>
                        </figure>
                        <figure>
                            <img src="assets/telefone.png" />
                            <figcaption>(21)9 9999-9999</figcaption>
                        </figure>
                        <figure>
                            <img src="assets/email.png" />
                            <figcaption>contato@oticasvida.com</figcaption>
                        </figure>
                    </div>
                    <div className='contato-conteudo'>
                        <h3>Nossas Redes Sociais</h3>
                        <figure>
                            <img src="assets/fb.png"/>
                            <figcaption>/Oticavida</figcaption>
                        </figure>
                        <figure>
                            <img src="assets/ig.png"/>
                            <figcaption>@oticavidarj</figcaption>
                        </figure>
                        <figure>
                            <img src="assets/tt.png" />
                            <figcaption>@oticavidarj</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}