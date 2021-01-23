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
          <form class="content">
            <div class="field">
              <label class="label">Pregunta</label>
              <div class="control">
                <input class="input" type="text" placeholder="Escribe tu pregunta..."/>
              </div>
              <p class="help">Recuerda que las preguntas no son academicas, si no tecnicas.</p>
            </div>
            <div class="field">
              <label class="label">Descripci&oacute;n</label>
              <div class="control">
                <textarea class="textarea" placeholder="Escribe una preve descripcion..."></textarea>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <div class="buttons is-right">
                  <button class="button is-primary is-light">Cancelar</button>
                  <button class="button is-primary">Enviar pregunta</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="column is-one-fifth">
          <aside class="menu is-hidden-mobile">
            <p class="menu-label">
              Realiza una nueva pregunta
            </p>
          </aside>
        </div>
      </div>
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
            <article class="media box">
              <div class="media-content">
                <div class="content is-medium">
                  <h1 class="title is-3">Pregunta</h1>
                  <p class="has-text-justified">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Tum ego: Non mehercule, inquam, soleo temere contra Stoicos, non quo illis admodum assentiar, sed pudore impedior; Quae contraria sunt his, malane? Manebit ergo amicitia tam diu, quam diu sequetur utilitas, et, si utilitas amicitiam constituet, tollet eadem.
                  </p>
                  <small><a>Reportar</a> · Preguntada en 12/12/2020 · <a>Me sirvio</a></small>
                </div>
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>No se ha respondido</p>
                    </div>
                  </div>
                </article>
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p class="has-text-justified">
                        Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                        <br>
                        <small><a>Reportar</a> · Respondida en 12/12/2021 · <a>Me sirvio</a></small>
                      </p>
                    </div>
                  </div>
                </article>
                <div class="level mt-4">
                  <button class="button is-text level-left">M&aacute;s respuestas (20)</button>
                  <button class="button is-primary level-right">Responder</button>
                </div>
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
                  <div class="control">
                    <div class="buttons is-right">
                      <button class="button is-primary is-light">Cancelar</button>
                      <button class="button is-primary">Enviar respuesta</button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="column is-one-fifth">
          <aside class="menu">
            <p class="menu-label">
              ¿Para qué sirve?
            </p>
            <ul class="menu-list">
              <li>
                <p>
                  Aqui podras encontrar preguntas hechas y resueltas por la comunidad.
                  Si quieres puedes hacer una nueva pregunta dando click en el boton de Añadir pregunta.
                  Recuerda que este no es un lugar para hacer preguntas educativas, sino para 
                  resolver dudas que surgan del aprendizaje en casa.
                </p>
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
