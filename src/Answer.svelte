<script>
  import { slide } from 'svelte/transition';
  import { quartOut } from 'svelte/easing';

  import { fs } from './firebase';

  export let question_id;
  export let answer;

  function handleUseful() {
    let one_hour = 60 * 60 * 1000;
    if (Date.now() - answer.usefulness.last_updated > one_hour) {
      updateRanking();
    }
  }

  async function updateRanking() {
    await fs.collection('questions').doc(question_id)
      .collection('answers').doc(answer.id).update({
        usefulness: {
          ranking: answer.usefulness.ranking + 1,
          last_updated: Date.now()
        }
      });
  }
</script>
  
<article class="media" transition:slide={{duration: 300, easing: quartOut}}>
  <div class="media-content">
    <div class="content">
      <p class="has-text-justified">
        {answer.answer}
        <br>
        <small><a>Reportar</a> · Respondida en {answer.date} · <a on:click={handleUseful}>Me sirvio</a></small>
      </p>
    </div>
  </div>
</article>
