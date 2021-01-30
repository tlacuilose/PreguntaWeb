<script>
  import Title from './Title.svelte';
  import NewQuestion from './NewQuestion.svelte';
  import QuestionsHeader from './QuestionsHeader.svelte';
  import Questions from './Questions.svelte';

  import { fs } from './firebase';

  let isShowingAnswered = true;

  let questions = []

  fs.collection('questions').onSnapshot(querySnapshot => {
    let docs = [];
    querySnapshot.forEach(doc => {
      docs.push({...doc.data(), id: doc.id});
    });

    questions = [...docs];
    console.log(questions);
  });
  
  let unquestions = [
    {
      date: '12/02/2020',
      question: 'Esta no respondida o si?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ille enim occurrentia nescio quae comminiscebatur; Ad eos igitur converte te, quaeso. Non quam nostram quidem, inquit Pomponius iocans; Sedulo, inquam, faciam. Quamquam id quidem licebit iis existimare, qui legerint. Septem autem illi non suo, sed populorum suffragio omnium nominati sunt.',
    }, {
      date: '12/04/2021',
      question: 'Are we here just to eat no resp?',
      description: 'Idemque diviserunt naturam hominis in animum et corpus. Et non ex maxima parte de tota iudicabis? Si mala non sunt, iacet omnis ratio Peripateticorum. Quid, quod res alia tota est? Quae duo sunt, unum fa',
    }, {
      date: '03/04/2021',
      question: 'This questions has non answers.',
      description: ''
    }
  ];
</script>

<svelte:head>
  <style src="./mystyles.scss"/>
</svelte:head>

<main>
  <Title></Title>
  <section class="section pt-0">
    <div class="container">
      <QuestionsHeader numAns={questions.length} numUnans={unquestions.length} bind:isShowingAnswered={isShowingAnswered}></QuestionsHeader>
      {#if isShowingAnswered}
        <Questions questions={questions}></Questions>
      {:else}
        <Questions questions={unquestions}></Questions>
      {/if}
    </div>
  </section>
</main>
