<script lang="typescript">
</script>

<svelte:head>
  <style src="./mystyles.scss"/>
</svelte:head>

<main>
  <section class="section is-medium" id="title-section">
    <div class="columns">
      <div class="column">
        <form class="container is-max-desktop">
          <div class="field is-expanded has-addons">
            <div class="control is-expanded">
              <input class="input is-medium is-primary" type="text" placeholder="¿Qué pregunta tienes?"/>
            </div>
            <div class="control">
              <a class="button is-medium is-primary">Buscar</a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="container has-text-centered">
          <h1 class="title is-4 has-text-primary-dark">Ayuda estudia en casa</h1>
        </div>
      </div>
    </div>
  </section>
  <section class="section pt-0">
      <div class="columns">
        <div class="column">
          <div class="tabs is-boxed">
            <ul>
              <li class="is-active">
                <a class="has-text-primary-dark">
                  <span>
                    Respondidas
                  </span>
                  <span class="tag is-primary is-light is-rounded ml-3">
                    5
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span>
                    No respondidas
                  </span>
                  <span class="tag is-light is-rounded ml-3">
                    0
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-one-fifth has-text-centered">
            <button class="button is-primary is-outlined">Añadir pregunta</button>
        </div>
      </div>
      <div class="columns">
        <div class="column">

        </div>
        <div class="column is-one-fifth">
          <aside class="menu">
            <p class="menu-label">
              ¿Para qué sirve?
            </p>
            <ul class="menu-list">
              <li>
                <div class="block">
                  Aqui podras encontrar preguntas hechas y resueltas por la comunidad.
                  Si quieres puedes hacer una nueva pregunta dando click en el boton de Añadir pregunta.
                  Recuerda que este no es un lugar para hacer preguntas educativas, sino para 
                  resolver dudas que surgan del aprendizaje en casa.
                </div>
              </li>
            </ul>
            <p class="menu-label">
              Contacto
            </p>
            <ul class="menu-list">
              <li><a href="https://www.github.com">Colabora</a></li>
              <li><a href="https://www.twitter.com">Contacto</a></li>
            </ul>
            <p class="menu-label">
              Politicas
            </p>
            <ul class="menu-list">
              <li><a>Terminos y condiciones</a></li>
              <li><a>Politicas de privacidad</a></li>
            </ul>
          </aside>
        </div>
      </div>
  </section>
</main>
