// Menstrual Prediction (28-day cycle logic)
function predictCycle() {
    const lastDate = document.getElementById('lastDate').value;
    if (!lastDate) {
      alert("Please enter your last period date.");
      return;
    }
    const nextDate = new Date(lastDate);
    nextDate.setDate(nextDate.getDate() + 28);
    document.getElementById('prediction').innerText =
      "Estimated Next Period: " + nextDate.toDateString();
  }
  
  // Myth Buster
  const myths = [
    {
      myth: "Periods are dirty or impure.",
      fact: "Menstruation is a natural biological process, not unclean."
    },
    {
      myth: "Girls shouldn't bathe during their periods.",
      fact: "Bathing is perfectly safe and hygienic during menstruation."
    },
    {
      myth: "Exercise should be avoided during periods.",
      fact: "Light exercise can help relieve cramps and mood swings."
    }
  ];
  
  function showMyth() {
    const random = myths[Math.floor(Math.random() * myths.length)];
    document.getElementById('mythText').innerText = random.myth;
    document.getElementById('factText').innerText = random.fact;
  }
  