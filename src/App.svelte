<script lang="typescript">
  import Title from './Title.svelte';
  import NewQuestion from './NewQuestion.svelte';
  import QuestionsHeader from './QuestionsHeader.svelte';
  import Questions from './Questions.svelte';

  let questions: string[] = ['Pregunta uno', 'pregunta dos', 'pregunta trws'];
</script>

<svelte:head>
  <style src="./mystyles.scss"/>
</svelte:head>

<main>
  <Title></Title>
  <NewQuestion></NewQuestion>
  <section class="section pt-0">
    <div class="container">
      <QuestionsHeader questions={questions}></QuestionsHeader>
      <Questions></Questions>
    </div>
  </section>
</main>
