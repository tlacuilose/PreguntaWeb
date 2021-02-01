<script>
  import { slide } from 'svelte/transition';

  import { isShowingAnswered } from './stores';
  import { fs, fieldValue } from './firebase';

  export let question;
  export let isShown;

  let answer = {
    answer: ""
  }

  async function updateQuestion() {
    await fs.collection('questions').doc(question.id).update({
      times_ans: question.times_ans + 1,
      answered: true
    });
  }

  async function updateNiche() {
    await fs.collection('niches').doc('estudia-en-casa').update({
      'answered': fieldValue.increment(1),
      'unanswered': fieldValue.increment(-1)
    });
  }
  
  async function addAnswer() {
    await fs.collection('questions').doc(question.id).collection('answers').doc().set({
      ...answer,
      createdAt: Date.now(),
      usefulness: {
        ranking: 0,
        last_updated: 0
      }
    });
  }

  function handleSubmit() {
    addAnswer();
    updateQuestion();
    if (!$isShowingAnswered) {
      updateNiche();
    }
    answer = { answer: '' };
    isShown = false;
  }
</script>
<article class="media" transition:slide>
  <form class="media-content" on:submit|preventDefault={handleSubmit}>
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Agrega una respuesta" bind:value={answer.answer}></textarea>
      </p>
    </div>
    <div class="field">
      <div class="control">
        <div class="buttons is-right">
          <button class="button is-primary" on:click={() => isShown = false}>Cancelar</button>
          <button type="submit" class="button is-link">Enviar respuesta</button>
        </div>
      </div>
    </div>
  </form>
</article>
