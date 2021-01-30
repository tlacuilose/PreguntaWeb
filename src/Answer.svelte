<script>
  import { slide } from 'svelte/transition';
  import { quartOut } from 'svelte/easing';

  export let answer;
</script>
  
<article class="media" transition:slide={{duration: 300, easing: quartOut}}>
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
