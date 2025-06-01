import semana1 from './images/semana1.png';
import semana2 from './images/semana2.png';
import semana3 from './images/semana3.png';
import semana4 from './images/semana4.png';
import semana5 from './images/semana5.png';
import semana6 from './images/semana6.png';
import semana7 from './images/semana7.png';
import semana8 from './images/semana8.png'; // Reutilizando semana1 para semana8
import semana9 from './images/semana9-1.png'; // Reutilizando semana2 para semana9
import semana10 from './images/semana10.png'; // Reutilizando semana3 para semana10

const pages = [
    {
        id: 1,
        image: semana1,
        title: "Semana 1",
        desc: "Observación: Suelo tardar entre 20 y 30 minutos en la ducha porque pierdo la noción del tiempo.\n\nReflexión: Esto genera un gran desperdicio de agua potable.\n\nPlan de acción: Comenzaré a llevar un reloj al baño para controlar el tiempo y así reducir el consumo de agua. A largo plazo, me gustaría diseñar un dispositivo que registre el uso del agua y el tiempo de la ducha."
    },
    {
        id: 2,
        image: semana2,
        title: "Semana 2",
        desc: "Observación: Me interesa tener un mayor control sobre mi consumo mensual de agua, luz y gas.\n\nReflexión: Llevar registros puede ayudarme a ser más consciente y tomar decisiones para reducir el consumo.\n\nPlan de acción: Como solución inmediata, anotaré los consumos cada mes. A futuro, deseo crear una API conectada a los servicios públicos para monitorizar estos datos en tiempo real."
    },
    {
        id: 3,
        image: semana3,
        title: "Semana 3",
        desc: "Observación: Reciclo el papel de mis cuadernos y lo separo de la basura común.\n\nReflexión: De esta forma, contribuyo a disminuir la cantidad de residuos y a facilitar el proceso de reciclaje.\n\nPlan de acción: Continuar con este hábito y motivar a otras personas a hacer lo mismo."
    },
    {
        id: 4,
        image: semana4,
        title: "Semana 4",
        desc: "Observación: A menudo olvido desconectar electrodomésticos y cargadores cuando no los uso.\n\nReflexión: Esto incrementa el consumo de energía y puede ser un riesgo.\n\nPlan de acción: Colocar letreros de recordatorio y buscar o diseñar un tomacorriente inteligente que detecte si está activo sin uso y lo apague automáticamente."
    },
    {
        id: 5,
        image: semana5,
        title: "Semana 5",
        desc: "Observación: Utilizo luces artificiales incluso durante el día.\n\nReflexión: Esto aumenta el gasto energético y las emisiones asociadas.\n\nPlan de acción: Reubicarme en espacios con mayor luz natural y abrir cortinas o ventanas durante el día."
    },
    {
        id: 6,
        image: semana6,
        title: "Semana 6",
        desc: "Observación: Suelo guardar y plantar las semillas de las frutas que consumo.\n\nReflexión: Esta práctica ayuda a reforestar y a mantener áreas verdes.\n\nPlan de acción: Seguir plantando semillas y compartir este hábito con mi familia y amigos."
    },
    {
        id: 7,
        image: semana7,
        title: "Semana 7",
        desc: "Observación: Uso los residuos de alimentos como abono para el jardín, como cáscaras y agua de huevo.\n\nReflexión: Así reduzco los residuos y aporto nutrientes a la tierra.\n\nPlan de acción: Investigar más sobre compostaje y mejorar mi sistema de abono casero."
    },
    {
        id: 8,
        image: semana8,
        title: "Semana 8",
        desc: "Observación: Al lavar la ropa, aprovecho el agua para limpiar el piso del patio.\n\nReflexión: Esto disminuye el desperdicio de agua y maximiza su uso.\n\nPlan de acción: Seguir reutilizando agua y buscar otras formas de aprovecharla antes de desecharla."
    },
    {
        id: 9,
        image: semana9,  // Reutilizando imagen
        title: "Semana 9",
        desc: "Observación: Me he dado cuenta de que utilizo muchas servilletas y toallas de papel en la cocina y el comedor.\n\nReflexión: El consumo excesivo de papel desechable contribuye a la deforestación y genera más residuos.\n\nPlan de acción: A partir de ahora, optaré por paños de tela reutilizables en lugar de servilletas desechables, y procuraré solo usar papel cuando sea estrictamente necesario."
    },
    {
        id: 10,
        image: semana10,  // Reutilizando imagen
        title: "Semana 10",
        desc: "Observación: Mantengo mi computador y otros dispositivos electrónicos encendidos mucho tiempo, incluso cuando no los uso.\n\nReflexión: Esto consume energía innecesariamente y contribuye al desgaste prematuro de los equipos.\n\nPlan de acción: Adoptaré la costumbre de apagar los dispositivos y desconectar cargadores cuando no estén en uso. Además, investigaré funciones de ahorro de energía y las activaré en todos mis aparatos."
    }
];

export default pages