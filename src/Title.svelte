<script>
  export let showsNewQuestion;
  export let newquestion;

  let inputQuestion = "";

  function callNewQuestion() {
    newquestion = inputQuestion;
    inputQuestion = "";
    showsNewQuestion = true;
  }
</script>
<section class="section is-medium" id="title-section">
  <form class="container is-max-desktop mb-4" on:submit|preventDefault={callNewQuestion}>
    <div class="field is-expanded has-addons">
      <div class="control is-expanded">
        <input class="input is-medium is-link" type="text" placeholder="¿Qué pregunta tienes?" bind:value={inputQuestion} disabled={showsNewQuestion}/>
      </div>
      <div class="control">
        <button type="submit" class="button is-medium is-link" disabled={showsNewQuestion}>Preguntar</button>
      </div>
    </div>
  </form>
  <div class="container has-text-centered">
    <h1 class="title is-4 has-text-link">Ayuda estudia en casa</h1>
  </div>
</section>
