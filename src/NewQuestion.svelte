<script>
  import { slide } from 'svelte/transition';

  import { fs } from './firebase';

  export let isShown;

  let question = {
    question: "",
    description: "",
  };

  async function addQuestion() {
    await fs.collection('questions').doc().set({
      ...question,
      createdAt: Date.now(),
      times_ans: 0,
      usefulness: {
        ranking: 0,
        last_updated: 0
      }
    });
  }

  function handleSubmit() {
    addQuestion();
    question = {question: '', description: ''};
    isShown = false;
  }
</script>
  
<form class="content" transition:slide on:submit|preventDefault={handleSubmit}>
  <div class="field">
    <label class="label">Pregunta</label>
    <div class="control">
      <input class="input" type="text" placeholder="Escribe tu pregunta..." bind:value={question.question}/>
    </div>
    <p class="help">Recuerda que las preguntas no son academicas, si no tecnicas.</p>
  </div>
  <div class="field">
    <label class="label">Descripci&oacute;n</label>
    <div class="control">
      <textarea class="textarea" placeholder="Escribe una preve descripcion..." bind:value={question.description}></textarea>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <div class="buttons is-right">
        <button class="button is-primary" on:click={() => isShown = false}>Cancelar</button>
        <button type="submit" class="button is-link">Enviar pregunta</button>
      </div>
    </div>
  </div>
</form>
