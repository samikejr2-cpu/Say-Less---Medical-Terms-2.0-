const easyPrefixes = [
  "Acute", "Chronic", "Mild", "Severe", "Primary", "Secondary",
  "Viral", "Bacterial", "Common", "Simple", "Painful", "Recurrent",
  "Sudden", "Early", "Late", "Uncomplicated", "Febrile", "Traumatic",
  "Allergic", "Inflammatory"
];

const easyTerms = [
  "Fever", "Cough", "Headache", "Migraine", "Nausea", "Vomiting",
  "Diarrhea", "Constipation", "Fatigue", "Dizziness", "Syncope",
  "Hypertension", "Hypotension", "Diabetes", "Asthma", "Pneumonia",
  "Bronchitis", "Anemia", "Fracture", "Sprain", "Burn", "Rash",
  "Infection", "Seizure", "Stroke", "Heartburn", "Dehydration",
  "Appendicitis", "Tonsillitis", "Sinusitis"
];

const mediumPrefixes = [
  "Autoimmune", "Ischemic", "Obstructive", "Restrictive", "Hemolytic",
  "Inflammatory", "Metabolic", "Endocrine", "Neurologic", "Renal",
  "Hepatic", "Pulmonary", "Cardiac", "Gastrointestinal", "Vascular",
  "Postinfectious", "Congenital", "Malignant", "Benign", "Idiopathic"
];

const mediumTerms = [
  "Ulcerative Colitis", "Crohn Disease", "Cushing Syndrome",
  "Addison Disease", "Graves Disease", "Hashimoto Thyroiditis",
  "Myasthenia Gravis", "Multiple Sclerosis", "Guillain-Barré Syndrome",
  "Rheumatoid Arthritis", "Systemic Lupus Erythematosus",
  "Scleroderma", "Pericarditis", "Endocarditis", "Myocarditis",
  "Pancreatitis", "Cholecystitis", "Pyelonephritis", "Nephrotic Syndrome",
  "Nephritic Syndrome", "Celiac Disease", "Diverticulitis",
  "Osteomyelitis", "Meningitis", "Encephalitis"
];

const hardPrefixes = [
  "Inherited", "Paraneoplastic", "Granulomatous", "Necrotizing",
  "Cholestatic", "Demyelinating", "Vasculitic", "Thrombotic",
  "Hypercoagulable", "Mitochondrial", "Lysosomal", "Peroxisomal",
  "X-linked", "Autosomal Recessive", "Autosomal Dominant",
  "Antibody-mediated", "T-cell-mediated", "Fibrosing",
  "Seronegative", "Paroxysmal"
];

const hardTerms = [
  "Pseudohypoparathyroidism", "Granulomatosis with Polyangiitis",
  "Goodpasture Syndrome", "Primary Sclerosing Cholangitis",
  "Dubin-Johnson Syndrome", "Crigler-Najjar Syndrome",
  "Hereditary Hemochromatosis", "Von Hippel-Lindau Disease",
  "Charcot-Marie-Tooth Disease", "Lambert-Eaton Syndrome",
  "Wilson Disease", "Alpha-1 Antitrypsin Deficiency",
  "Wiskott-Aldrich Syndrome", "DiGeorge Syndrome",
  "Chédiak-Higashi Syndrome", "Lesch-Nyhan Syndrome",
  "McArdle Disease", "Pompe Disease", "Tay-Sachs Disease",
  "Niemann-Pick Disease", "Gaucher Disease", "Kartagener Syndrome",
  "Ehlers-Danlos Syndrome", "Marfan Syndrome", "MEN 1"
];

const easyForbidden = [
  "Patient", "Doctor", "Pain", "Sick", "Hospital", "Medicine",
  "Body", "Symptom", "Clinic", "Treatment"
];

const mediumForbidden = [
  "Inflammation", "Autoimmune", "Antibody", "Organ", "Disease",
  "Diagnosis", "Lab", "Chronic", "Acute", "Immune"
];

const hardForbidden = [
  "Mutation", "Syndrome", "Gene", "Antibody", "Deficiency",
  "Inheritance", "Pathology", "Chromosome", "Enzyme", "Classic"
];

const termDefinitions = {
  Fever: "An elevated body temperature, often caused by infection, inflammation, or illness.",
  Cough: "A reflex that clears the throat or airways of mucus, irritants, or foreign material.",
  Headache: "Pain or discomfort in the head, scalp, or neck region.",
  Migraine: "A recurrent headache disorder often associated with nausea, light sensitivity, and sometimes aura.",
  Nausea: "The unpleasant sensation of needing to vomit.",
  Vomiting: "Forceful expulsion of stomach contents through the mouth.",
  Diarrhea: "Frequent loose or watery stools.",
  Constipation: "Difficulty passing stool or infrequent bowel movements.",
  Fatigue: "A feeling of tiredness, low energy, or exhaustion.",
  Dizziness: "A sensation of lightheadedness, imbalance, or spinning.",
  Syncope: "Temporary loss of consciousness caused by decreased blood flow to the brain.",
  Hypertension: "Persistently elevated blood pressure.",
  Hypotension: "Abnormally low blood pressure.",
  Diabetes: "A disorder of glucose regulation caused by impaired insulin production, insulin action, or both.",
  Asthma: "A chronic airway disease involving bronchoconstriction, inflammation, and episodic difficulty breathing.",
  Pneumonia: "Infection and inflammation of the lung tissue.",
  Bronchitis: "Inflammation of the bronchial tubes, often causing cough and mucus production.",
  Anemia: "A decrease in red blood cells or hemoglobin, reducing oxygen-carrying capacity.",
  Fracture: "A break in a bone.",
  Sprain: "Stretching or tearing of a ligament.",
  Burn: "Tissue injury caused by heat, chemicals, electricity, radiation, or friction.",
  Rash: "A visible change in skin color, texture, or appearance.",
  Infection: "Invasion and multiplication of microorganisms in body tissue.",
  Seizure: "Abnormal electrical activity in the brain causing neurologic symptoms.",
  Stroke: "Brain injury caused by interrupted blood flow or bleeding in the brain.",
  Heartburn: "Burning chest discomfort caused by reflux of stomach acid into the esophagus.",
  Dehydration: "A state of insufficient body water.",
  Appendicitis: "Inflammation of the appendix, often causing right lower quadrant abdominal pain.",
  Tonsillitis: "Inflammation or infection of the tonsils.",
  Sinusitis: "Inflammation or infection of the paranasal sinuses.",

  "Ulcerative Colitis": "A chronic inflammatory bowel disease affecting the colon in a continuous pattern, usually starting at the rectum.",
  "Crohn Disease": "A chronic inflammatory bowel disease that can affect any part of the GI tract and often has skip lesions.",
  "Cushing Syndrome": "A condition caused by excess cortisol exposure.",
  "Addison Disease": "Primary adrenal insufficiency causing low cortisol and often low aldosterone.",
  "Graves Disease": "An autoimmune hyperthyroid disorder caused by antibodies stimulating the TSH receptor.",
  "Hashimoto Thyroiditis": "An autoimmune cause of hypothyroidism due to destruction of thyroid tissue.",
  "Myasthenia Gravis": "An autoimmune disease caused by antibodies against postsynaptic acetylcholine receptors.",
  "Multiple Sclerosis": "A demyelinating disease of the central nervous system.",
  "Guillain-Barré Syndrome": "An acute immune-mediated polyneuropathy causing ascending weakness and areflexia.",
  "Rheumatoid Arthritis": "A chronic autoimmune inflammatory arthritis that commonly affects small joints symmetrically.",
  "Systemic Lupus Erythematosus": "A multisystem autoimmune disease caused by immune complex deposition.",
  Scleroderma: "A connective tissue disease involving fibrosis, vascular dysfunction, and skin thickening.",
  Pericarditis: "Inflammation of the pericardial sac surrounding the heart.",
  Endocarditis: "Infection or inflammation of the inner lining of the heart, usually involving valves.",
  Myocarditis: "Inflammation of the heart muscle.",
  Pancreatitis: "Inflammation of the pancreas.",
  Cholecystitis: "Inflammation of the gallbladder.",
  Pyelonephritis: "Infection of the kidney and renal pelvis.",
  "Nephrotic Syndrome": "A kidney disorder characterized by heavy proteinuria, edema, hypoalbuminemia, and hyperlipidemia.",
  "Nephritic Syndrome": "A kidney disorder characterized by hematuria, hypertension, oliguria, and variable proteinuria.",
  "Celiac Disease": "An autoimmune small intestinal disease triggered by gluten.",
  Diverticulitis: "Inflammation of colonic diverticula.",
  Osteomyelitis: "Infection of bone.",
  Meningitis: "Inflammation of the meninges surrounding the brain and spinal cord.",
  Encephalitis: "Inflammation of the brain tissue.",

  Pseudohypoparathyroidism: "A disorder caused by resistance to parathyroid hormone, leading to low calcium and high phosphate.",
  "Granulomatosis with Polyangiitis": "A small-vessel vasculitis associated with c-ANCA that affects the upper airway, lungs, and kidneys.",
  "Goodpasture Syndrome": "An autoimmune disease caused by anti-GBM antibodies affecting the lungs and kidneys.",
  "Primary Sclerosing Cholangitis": "A chronic cholestatic disease causing inflammation and fibrosis of intrahepatic and extrahepatic bile ducts.",
  "Dubin-Johnson Syndrome": "A benign hereditary disorder causing conjugated hyperbilirubinemia and a darkly pigmented liver.",
  "Crigler-Najjar Syndrome": "A hereditary disorder of impaired bilirubin conjugation due to UDP-glucuronyl transferase deficiency.",
  "Hereditary Hemochromatosis": "An inherited iron overload disorder that can cause cirrhosis, diabetes, and bronze skin.",
  "Von Hippel-Lindau Disease": "An inherited tumor syndrome associated with hemangioblastomas, renal cell carcinoma, and pheochromocytoma.",
  "Charcot-Marie-Tooth Disease": "An inherited peripheral neuropathy causing distal weakness, sensory loss, foot drop, and pes cavus.",
  "Lambert-Eaton Syndrome": "A paraneoplastic or autoimmune disorder caused by antibodies against presynaptic calcium channels.",
  "Wilson Disease": "An inherited copper accumulation disorder caused by impaired copper excretion.",
  "Alpha-1 Antitrypsin Deficiency": "A genetic disorder that can cause emphysema and liver disease.",
  "Wiskott-Aldrich Syndrome": "An X-linked immunodeficiency with eczema, thrombocytopenia, and recurrent infections.",
  "DiGeorge Syndrome": "A developmental disorder caused by 22q11 deletion affecting thymus, parathyroids, heart, and face.",
  "Chédiak-Higashi Syndrome": "A lysosomal trafficking disorder causing immunodeficiency, partial albinism, and neuropathy.",
  "Lesch-Nyhan Syndrome": "An X-linked disorder of purine metabolism caused by HGPRT deficiency.",
  "McArdle Disease": "A glycogen storage disease caused by skeletal muscle glycogen phosphorylase deficiency.",
  "Pompe Disease": "A glycogen storage disease caused by acid alpha-glucosidase deficiency.",
  "Tay-Sachs Disease": "A lysosomal storage disease caused by hexosaminidase A deficiency.",
  "Niemann-Pick Disease": "A lysosomal storage disease involving sphingomyelin accumulation.",
  "Gaucher Disease": "A lysosomal storage disease caused by glucocerebrosidase deficiency.",
  "Kartagener Syndrome": "A primary ciliary dyskinesia syndrome with situs inversus, sinusitis, and bronchiectasis.",
  "Ehlers-Danlos Syndrome": "A connective tissue disorder involving abnormal collagen structure or processing.",
  "Marfan Syndrome": "A connective tissue disorder caused by fibrillin-1 mutation.",
  "MEN 1": "Multiple endocrine neoplasia type 1 involving parathyroid, pituitary, and pancreatic endocrine tumors."
};

function makeForbiddenWords(term, backupWords) {
  let words = term
    .replace(/-/g, " ")
    .replace(/[()]/g, "")
    .split(" ")
    .filter(word => word.length > 3);

  let forbidden = [...words];

  while (forbidden.length < 4) {
    const randomWord = backupWords[Math.floor(Math.random() * backupWords.length)];

    if (!forbidden.includes(randomWord)) {
      forbidden.push(randomWord);
    }
  }

  return forbidden.slice(0, 4);
}

function generateDeck(prefixes, terms, backupForbidden, targetCount) {
  const deck = [];

  for (let i = 0; i < prefixes.length; i++) {
    for (let j = 0; j < terms.length; j++) {
      if (deck.length >= targetCount) break;

      const term = `${prefixes[i]} ${terms[j]}`;

      deck.push({
        term: term,
        forbidden: makeForbiddenWords(term, backupForbidden)
      });
    }
  }

  return deck;
}

const cards = {
  easy: generateDeck(easyPrefixes, easyTerms, easyForbidden, 300),
  medium: generateDeck(mediumPrefixes, mediumTerms, mediumForbidden, 300),
  hard: generateDeck(hardPrefixes, hardTerms, hardForbidden, 300)
};

let currentMode = "";
let currentDeck = [];
let currentIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;
let scoreSaved = false;

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const endScreen = document.getElementById("endScreen");

const modeText = document.getElementById("modeText");
const scoreText = document.getElementById("scoreText");
const timerText = document.getElementById("timerText");
const termText = document.getElementById("termText");
const forbiddenWords = document.getElementById("forbiddenWords");
const finalScore = document.getElementById("finalScore");
const playerName = document.getElementById("playerName");
const startLeaderboard = document.getElementById("startLeaderboard");
const endLeaderboard = document.getElementById("endLeaderboard");

const definitionBox = document.getElementById("definitionBox");
const definitionText = document.getElementById("definitionText");
const definitionButton = document.querySelector(".definition-btn");

window.onload = function () {
  displayLeaderboards();
};

function startGame(mode) {
  currentMode = mode;
  currentDeck = shuffle([...cards[mode]]);
  currentIndex = 0;
  score = 0;
  timeLeft = 30;
  scoreSaved = false;

  playerName.value = "";

  startScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  modeText.textContent = capitalize(mode);
  scoreText.textContent = score;
  timerText.textContent = timeLeft;

  showNewWord();
  startTimer();
}

function showNewWord() {
  if (currentIndex >= currentDeck.length) {
    currentDeck = shuffle([...cards[currentMode]]);
    currentIndex = 0;
  }

  const card = currentDeck[currentIndex];

  termText.textContent = card.term;
  forbiddenWords.innerHTML = "";

  const baseTerm = getBaseTerm(card.term);

  definitionText.textContent =
    termDefinitions[baseTerm] ||
    "Definition not available yet. Add this term to the termDefinitions object.";

  definitionBox.classList.add("hidden");
  definitionButton.textContent = "Show Definition";

  card.forbidden.forEach(word => {
    const span = document.createElement("span");
    span.className = "forbidden-word";
    span.textContent = word;
    forbiddenWords.appendChild(span);
  });
}

function correctAnswer() {
  score++;
  scoreText.textContent = score;

  currentIndex++;
  showNewWord();

  resetTimerToThirty();
}

function skipWord() {
  currentIndex++;
  showNewWord();
}

function resetTimerToThirty() {
  timeLeft = 30;
  timerText.textContent = timeLeft;
  startTimer();
}

function toggleDefinition() {
  definitionBox.classList.toggle("hidden");

  if (definitionBox.classList.contains("hidden")) {
    definitionButton.textContent = "Show Definition";
  } else {
    definitionButton.textContent = "Hide Definition";
  }
}

function getBaseTerm(fullTerm) {
  const allPrefixes = [
    ...easyPrefixes,
    ...mediumPrefixes,
    ...hardPrefixes
  ];

  for (const prefix of allPrefixes) {
    if (fullTerm.startsWith(prefix + " ")) {
      return fullTerm.replace(prefix + " ", "");
    }
  }

  return fullTerm;
}

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;
    timerText.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);

  gameScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");

  finalScore.textContent = score;
  displayLeaderboards();
}

function saveHighScore() {
  if (scoreSaved) {
    alert("Score already saved for this round!");
    return;
  }

  let name = playerName.value.trim();

  if (name === "") {
    name = "Anonymous";
  }

  const newScore = {
    name: name,
    score: score,
    mode: capitalize(currentMode),
    date: new Date().toLocaleDateString()
  };

  let highScores = JSON.parse(localStorage.getItem("medicalSayLessHighScores")) || [];

  highScores.push(newScore);

  highScores.sort((a, b) => b.score - a.score);

  highScores = highScores.slice(0, 10);

  localStorage.setItem("medicalSayLessHighScores", JSON.stringify(highScores));

  scoreSaved = true;

  displayLeaderboards();
}

function displayLeaderboards() {
  const highScores = JSON.parse(localStorage.getItem("medicalSayLessHighScores")) || [];

  startLeaderboard.innerHTML = "";
  endLeaderboard.innerHTML = "";

  if (highScores.length === 0) {
    startLeaderboard.innerHTML = "<li>No scores yet. Be the first!</li>";
    endLeaderboard.innerHTML = "<li>No scores yet. Be the first!</li>";
    return;
  }

  highScores.forEach(entry => {
    const liStart = document.createElement("li");
    liStart.textContent = `${entry.name} — ${entry.score} points — ${entry.mode}`;

    const liEnd = document.createElement("li");
    liEnd.textContent = `${entry.name} — ${entry.score} points — ${entry.mode}`;

    startLeaderboard.appendChild(liStart);
    endLeaderboard.appendChild(liEnd);
  });
}

function resetGame() {
  endScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");

  score = 0;
  timeLeft = 30;
  currentIndex = 0;

  displayLeaderboards();
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}