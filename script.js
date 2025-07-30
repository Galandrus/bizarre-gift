// =========================
//    FUNCIONES DE LOGIN
// =========================

// Contraseña correcta
const correctPassword = 'esencia';

// Verificar contraseña
function checkPassword() {
  const inputPassword = document.getElementById('passwordInput').value;
  const errorMessage = document.getElementById('errorMessage');

  if (inputPassword.toLowerCase() === correctPassword) {
    // Contraseña correcta - mostrar página principal
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    errorMessage.textContent = '';
  } else {
    // Contraseña incorrecta
    errorMessage.textContent =
      '❌ Contraseña incorrecta. Los fantasmas del teatro no te dejan pasar...';
    document.getElementById('passwordInput').value = '';

    // Efecto de shake en el contenedor
    const container = document.querySelector('.login-container');
    container.style.animation = 'shake 0.5s';
    setTimeout(() => {
      container.style.animation = '';
    }, 500);
  }
}

// Bypass de contraseña desde el título
function bypassPassword() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';

  // Mostrar mensaje especial
  setTimeout(() => {
    showModal(
      '🎭 Acceso Místico',
      'El título del teatro te ha revelado sus secretos. ¡Bienvenido al teatro abandonado! 🌟'
    );
  }, 300);
}

// Permitir enter en el campo de contraseña
document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('passwordInput')
    .addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        checkPassword();
      }
    });

  // Configurar eventos de audio
  const audio = document.getElementById('theaterMusic');
  audio.addEventListener('ended', function () {
    // Si la música termina (aunque está en loop), resetear el botón
    const musicBtn = document.getElementById('musicBtn');
    musicBtn.innerHTML = '🎵<br />Música del Teatro';
    musicBtn.style.background = 'linear-gradient(45deg, #2f4f4f, #708090)';
    isMusicPlaying = false;
  });
});

// =========================
//   FUNCIONES PRINCIPALES
// =========================

// Consejos de Teatro bizarros
const theaterAdvice = [
  'Si te olvidás el texto, inventá en otro idioma. Preferentemente muerto.',
  'Mientras más grites, mejor te van a entender. Especialmente en escenas íntimas.',
  'Si no sabés qué hacer con las manos: aplaudí. Siempre garpa.',
  'Romper la cuarta pared significa que podés putear al público. Usalo.',
  'Nunca leas la obra completa. Que te sorprenda en el estreno.',
  'Decí tus líneas como si estuvieras por irte al banco. Apurada y sin ganas.',
  'El vestuario lo elegís vos. Aunque hagas de piedra.',
  'Improvisar es repetir lo que dijo el otro pero con cara rara.',
  'Si alguien se equivoca, corregilo en voz alta. Eso es compañerismo.',
  'Las pausas son para cobardes. Apurate que hay que llegar a tu casa.',
  'Nunca escuches al otro. Vos ya sabés cómo va la escena.',
  'Las luces están para distraerte. Si te ciegan, mirá más fuerte.',
  'La mejor emoción es la que se finge exageradamente.',
  'Si algo sale mal, echale la culpa al director. Aunque seas vos.',
  'El personaje sos vos en tu mejor versión. Con más poses.',
  'Siempre actuá como si fueras la protagonista. Incluso si sos el perchero.',
  'Si alguien llora en escena, reíte. Hay que balancear la energía.',
  'No te conectes con el cuerpo. El cuerpo es un trámite.',
  'La voz no importa, total hay micrófono.',
  'Si estás nerviosa, comete un caramelo en plena función. Ayuda mucho.',
];

// Oráculos teatrales profundos
const theaterOracles = [
  'Vas a olvidar la línea exacta. Y en ese olvido, vas a encontrar tu voz.',
  'Hoy el silencio será más ruidoso que tu parlamento más gritado. Usalo.',
  'Tus pies van a buscar la marca, pero tu cuerpo va a pedir desvío. Confiale.',
  'No confíes en la escena que ensayaste demasiado. Se va a escapar.',
  'Habrá un error esta noche. Y si lo honrás, va a ser lo más honesto de la función.',
  'Una mirada fuera de texto va a encender algo en quien no esperás. No la esquives.',
  'Vas a decir una frase sin entenderla. Y recién en el aplauso va a revelarse.',
  'El escenario se va a achicar cuando intentes dominarlo. Respirá. Dejalo crecer solo.',
  'Un objeto olvidado en escena va a pedir protagonismo. Dáselo sin miedo.',
  'No busques comprensión esta noche. Buscá temblor.',
  'Si la luz te incomoda, quedate ahí. Lo incómodo es el inicio de algo nuevo.',
  'No se va a escuchar lo que digas. Pero alguien va a entenderlo igual.',
  'Una pausa no prevista va a revelar una verdad. No la tapes con apuro.',
  'El público vendrá cansado. Sorprendelo con una quietud inesperada.',
  'Hoy el vestuario va a pesar más de lo habitual. Llevá ese peso como si fuera parte del texto.',
  'El compañero que olvidó su parte es sólo un espejo. Lo que ves es lo que das.',
  'La emoción va a aparecer tarde. Pero va a llegar. Tené paciencia.',
  'Vas a salir al escenario con miedo. Eso es señal de que importa.',
  'El personaje va a pedir algo tuyo que no querías mostrar. Mostralo igual.',
  'Esta función no va a ser como la anterior. Por suerte.',
];

// Receta de brownies
const brownieRecipe = {
  title: 'Brownies',
  ingredients: [
    '115 gr. de harina 0000',
    '1 cda de sal',
    '250 gr. de manteca',
    '180 gr. de chocolate',
    '300 gr. de azúcar',
    '1 cucharadita de extracto de vainilla',
    '4 huevos grandes',
  ],
  preparation: [
    'Primero ponemos a calentar el horno a una temperatura muy alta.',
    'Batimos los huevos un poco con la mitad del azúcar, solamente hasta integrar y lo dejamos reposar.',
    'Por otro lado troceamos el chocolate y la manteca, luego derretimos ambas cosas a baño maria. Una vez derretido todo agregamos la otra mitad del azúcar y revolvemos para integrar. Sacamos del fuego, agregamos el extracto de vainilla y pasamos la preparación a un bowl limpio.',
    'Incorporamos la mitad de la preparación de los huevos con azúcar al chocolate, siempre batiendo para que no se cuajen los huevos. La otra mitad de los huevos las seguimos batiendo hasta llevarla a un punto letra. Una vez que alcanza ese punto lo incorporamos al chocolate con movimientos envolventes.',
    'Por último agregamos la harina tamizada y mezclamos con movimientos envolventes hasta lograr una preparación homogénea.',
    "Pasamos todo a un molde y lo metemos al horno a una temperatura muy baja de 20' a 30'.",
  ],
};

// Mostrar consejos de teatro
function showAdvice() {
  const randomAdvice =
    theaterAdvice[Math.floor(Math.random() * theaterAdvice.length)];
  showModal('💡 Consejo Teatral Bizarro', randomAdvice);
}

// Mostrar oráculo
function showOracle() {
  const randomOracle =
    theaterOracles[Math.floor(Math.random() * theaterOracles.length)];
  showModal('🔮 El Oráculo del Teatro Habla', randomOracle);
}

// Mostrar receta
function showRecipe() {
  const ingredientsList = brownieRecipe.ingredients
    .map(
      (ingredient) =>
        `<li style="margin-bottom: 8px; color: #e8e8e8;">${ingredient}</li>`
    )
    .join('');

  const preparationList = brownieRecipe.preparation
    .map(
      (step, index) =>
        `<li style="margin-bottom: 12px; color: #e8e8e8; line-height: 1.5;">${
          index + 1
        }. ${step}</li>`
    )
    .join('');

  const recipeContent = `
    <div style="text-align: left; max-width: 100%;">
      <h3 style="color: #ffeb3b; margin-bottom: 20px; text-align: center; font-size: 1.5rem;">🍫 ${brownieRecipe.title}</h3>

      <div style="margin-bottom: 25px;">
        <h4 style="color: #dda0dd; margin-bottom: 15px; font-size: 1.2rem;">📝 Ingredientes</h4>
        <ul style="list-style: none; padding-left: 0;">
          ${ingredientsList}
        </ul>
      </div>

      <div>
        <h4 style="color: #dda0dd; margin-bottom: 15px; font-size: 1.2rem;">👨‍🍳 Preparación</h4>
        <ol style="padding-left: 20px;">
          ${preparationList}
        </ol>
      </div>
    </div>
  `;

  showModal('🍫 Receta de Brownies', recipeContent);
}

// Mostrar medusa o cebra aleatoriamente
function showMedusa() {
  const isMedusa = Math.random() < 0.5; // 50% de probabilidad para cada una

  if (isMedusa) {
    const medusaContent = `
      <div style="text-align: center;">
        <img src="medusa2.jpg" alt="Medusa Luminosa en el Teatro" style="max-width: 100%; height: auto; border-radius: 10px; margin-bottom: 15px; box-shadow: 0 0 20px rgba(255, 235, 59, 0.3);">
        <p style="font-style: italic; color: #dda0dd; margin-top: 10px;">
          🌊 La verdadera estrella del teatro: una medusa luminosa que ilumina el escenario con su gracia etérea.
          <br>¿Quién necesita actores cuando tienes una criatura marina brillante? 🎭✨
        </p>
      </div>
    `;
    showModal('🌊 La Gran Actriz del Teatro', medusaContent);
  } else {
    const zebraContent = `
      <div style="text-align: center;">
        <img src="zebra.jpg" alt="Cebra Artística en el Teatro" style="max-width: 100%; height: auto; border-radius: 10px; margin-bottom: 15px; box-shadow: 0 0 20px rgba(255, 235, 59, 0.3);">
        <p style="font-style: italic; color: #dda0dd; margin-top: 10px;">
          🦓 La transformación teatral perfecta: una cebra artística con maquillaje corporal que desafía los límites del escenario.
          <br>Rayas que cuentan historias y un tocado que habla de libertad salvaje. 🎭✨
        </p>
      </div>
    `;
    showModal('🦓 La Transformación Salvaje', zebraContent);
  }
}

// Control de música
let isMusicPlaying = false;

function toggleMusic() {
  const audio = document.getElementById('theaterMusic');
  const musicBtn = document.getElementById('musicBtn');

  if (isMusicPlaying) {
    // Pausar música
    audio.pause();
    musicBtn.innerHTML = '🎵<br />Música del Teatro';
    musicBtn.style.background = 'linear-gradient(45deg, #2f4f4f, #708090)';
    isMusicPlaying = false;
  } else {
    // Reproducir música
    audio
      .play()
      .then(() => {
        musicBtn.innerHTML = '⏸️<br />Pausar Música';
        musicBtn.style.background = 'linear-gradient(45deg, #4b0082, #8b008b)';
        isMusicPlaying = true;
      })
      .catch((error) => {
        console.log('Error reproduciendo música:', error);
        showModal(
          '🎵 Error de Audio',
          'No se pudo reproducir la música. Verifica que el archivo esté disponible.'
        );
      });
  }
}

// =========================
//   FUNCIONES DEL MODAL
// =========================

function showModal(title, content) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalText').innerHTML = content;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
};

// =========================
//   INICIALIZACIÓN
// =========================

// Mensaje de consola cuando la página carga
console.log('🎭 Teatro Abandonado cargado correctamente 🎭');
