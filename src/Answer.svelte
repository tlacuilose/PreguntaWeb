<script lang="typescript">
  import type { AnswerType } from './models';

  export let answer: AnswerType;
</script>
  
<article class="media">
  <div class="media-content">
    <div class="content">
      <p class="has-text-justified">
        {answer.answer}
        <br>
        <small><a>Reportar</a> · Respondida en {answer.date} · <a>Me sirvio</a></small>
      </p>
    </div>
  </div>
</article>
