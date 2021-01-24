<script lang="typescript">
  import Answer from './Answer.svelte';
  import NoAnswers from './NoAnswers.svelte';
</script>

<article class="media box">
  <div class="media-content">
    <div class="content is-medium">
      <h1 class="title is-3">Pregunta</h1>
      <p class="has-text-justified">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; Tum ego: Non mehercule, inquam, soleo temere contra Stoicos, non quo illis admodum assentiar, sed pudore impedior; Quae contraria sunt his, malane? Manebit ergo amicitia tam diu, quam diu sequetur utilitas, et, si utilitas amicitiam constituet, tollet eadem.
      </p>
      <small><a>Reportar</a> · Preguntada en 12/12/2020 · <a>Me sirvio</a></small>
    </div>
    <NoAnswers></NoAnswers>
    <Answer></Answer>
    <div class="level mt-4">
      <button class="button is-text level-left">M&aacute;s respuestas (20)</button>
      <button class="button is-link level-right">Responder</button>
    </div>
  </div>
</article>
