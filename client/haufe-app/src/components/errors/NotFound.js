import './NotFound.scss'

export default function NotFound() {

    return (
        <section className='container'>
            <header>
                <h1>404 - Not found!</h1>
            </header>
            <hr/>
            <main>
                <h2>Please go <a href="/home">back</a>!</h2>
            </main>
        </section>
    )
}