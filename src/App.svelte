<script>
  import Title from './Title.svelte';
  import QuestionsHeader from './QuestionsHeader.svelte';
  import Questions from './Questions.svelte';

  import { fs } from './firebase';

  let isShowingAnswered = true;

  let answered = [];

  let unanswered = [];

  fs.collection('questions').where('times_ans', '==', 0).onSnapshot(querySnapshot => {
    let docs = [];
    querySnapshot.forEach(doc => {
      docs.push({...doc.data(), id: doc.id});
    });

    unanswered = [...docs];
  });


  fs.collection('questions').where('times_ans', '>', 0).onSnapshot(querySnapshot => {
    let docs = [];
    querySnapshot.forEach(doc => {
      docs.push({...doc.data(), id: doc.id});
    });

    answered = [...docs];
  });
</script>

<svelte:head>
  <style src="./mystyles.scss"/>
</svelte:head>

<main>
  <Title></Title>
  <section class="section pt-0">
    <div class="container">
      <QuestionsHeader numAns={answered.length} numUnans={unanswered.length} bind:isShowingAnswered={isShowingAnswered}></QuestionsHeader>
      {#if isShowingAnswered}
        <Questions questions={answered}></Questions>
      {:else}
        <Questions questions={unanswered}></Questions>
      {/if}
    </div>
  </section>
</main>
