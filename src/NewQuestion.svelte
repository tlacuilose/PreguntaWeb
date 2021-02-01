<script>
  import { slide } from 'svelte/transition';

  import { fs, fieldValue } from './firebase';

  export let isShown;
  export let newquestion;

  let newdescription = '';

  async function addQuestion() {
    await fs.collection('questions').doc().set({
      question: newquestion,
      description: newdescription,
      createdAt: Date.now(),
      niche: 'estudia-en-casa',
      times_ans: 0,
      answered: false,
      usefulness: {
        ranking: 0,
        last_updated: 0
      }
    });
  }

  async function updateNiche() {
    await fs.collection('niches').doc('estudia-en-casa')
      .update('unanswered', fieldValue.increment(1));
  }

  function handleSubmit() {
    addQuestion();
    updateNiche();
    newquestion = '';
    newdescription = '';
    isShown = false;
  }

  function cancel() {
    newquestion = '';
    newdescription = '';
    isShown = false;
  }
</script>
  
<div class="content" transition:slide>
  <div class="field">
    <label class="label">Pregunta</label>
    <div class="control">
      <input class="input" type="text" placeholder="Escribe tu pregunta..." bind:value={newquestion}/>
    </div>
    <p class="help">Recuerda que las preguntas no son academicas, si no tecnicas.</p>
  </div>
  <div class="field">
    <label class="label">Descripci&oacute;n</label>
    <div class="control">
      <textarea class="textarea" placeholder="Escribe una preve descripcion..." bind:value={newdescription}></textarea>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <div class="buttons is-right">
        <button class="button is-primary" on:click={cancel}>Cancelar</button>
        <button class="button is-link" disabled={newquestion.length === 0} on:click={handleSubmit}>Enviar pregunta</button>
      </div>
    </div>
  </div>
</div>
