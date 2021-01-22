<script lang="typescript">
</script>

<svelte:head>
  <style src="./mystyles.scss"/>
</svelte:head>

<main>
  <section class="section is-medium" id="title-section">
    <form class="container is-max-desktop mb-4">
      <div class="field is-expanded has-addons">
        <div class="control is-expanded">
          <input class="input is-medium is-primary" type="text" placeholder="¿Qué pregunta tienes?"/>
        </div>
        <div class="control">
          <a class="button is-medium is-primary">Buscar</a>
        </div>
      </div>
    </form>
    <div class="container has-text-centered">
      <h1 class="title is-4 has-text-primary-dark">Ayuda estudia en casa</h1>
    </div>
  </section>
  <section class="section pt-0">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="tabs is-boxed">
            <ul>
              <li class="is-active">
                <a class="has-text-primary-dark">
                  <span>
                    Respondidas
                  </span>
                  <span class="tag is-primary is-light is-rounded ml-2">
                    5
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span>
                    No respondidas
                  </span>
                  <span class="tag is-light is-rounded ml-2">
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
          <div class="content">
            <div class="box mb-0">
              <h1 class="title">
                Pregunta
              </h1>
              <div class="block">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Tum ego: Non mehercule, inquam, soleo temere contra Stoicos, non quo illis admodum assentiar, sed pudore impedior; Quae contraria sunt his, malane? Manebit ergo amicitia tam diu, quam diu sequetur utilitas, et, si utilitas amicitiam constituet, tollet eadem.
                </p>
              </div>
              <div class="subtitle is-6 has-text-right">
                Preguntado por: nombre largo despues de este
              </div>
              <div class="buttons is-right">
                <button class="button is-primary is-light level-item">Me sirvio</button>
                <button class="button is-primary level-item">Responder</button>
              </div>
            </div>
           <div class="content has-text-right mb-5">
              <button class="button is-text">Reportar</button>
            </div>
          </div>
          <article class="media">
            <div class="media-content">
              <div class="content">
                <h1 class="title">Pregunta</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Tum ego: Non mehercule, inquam, soleo temere contra Stoicos, non quo illis admodum assentiar, sed pudore impedior; Quae contraria sunt his, malane? Manebit ergo amicitia tam diu, quam diu sequetur utilitas, et, si utilitas amicitiam constituet, tollet eadem.
                </p>
                <div class="content has-text-right">
                  <small><a>Reportar</a> · Preguntado por Maria Jimenez Lozoya · 12/12/2020</small>
                </div>
              </div>
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Tum ego: Non mehercule, inquam, soleo temere contra Stoicos, non quo illis admodum assentiar, sed pudore impedior; Quae contraria sunt his, malane? Manebit ergo amicitia tam diu, quam diu sequetur utilitas, et, si utilitas amicitiam constituet, tollet eadem.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </article>
          <article class="media">
            <div class="media-content">
              <div class="field">
                <p class="control">
                  <textarea class="textarea" placeholder="Agrega una respuesta"></textarea>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <button class="button is-primary is-right">Responder</button>
                </p>
              </div>
            </div>
          </article>
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
    </div>
  </section>
</main>
