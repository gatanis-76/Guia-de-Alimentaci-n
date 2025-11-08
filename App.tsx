import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import FoodPyramid from './components/FoodPyramid';
import FoodTable from './components/FoodTable';
import { healthyFoodData, unhealthyFoodData } from './constants';
import FunFacts from './components/FunFacts';
import AnnexTable from './components/AnnexTable';
import DocumentDownloader from './components/DocumentDownloader';

const BalanceVisual: React.FC = () => (
    <div className="grid md:grid-cols-3 gap-8 text-center mt-8">
        <div className="bg-rose-100 p-6 rounded-2xl shadow-lg transform hover:-rotate-3 transition-transform">
            <div className="text-6xl mb-3">⚖️</div>
            <h4 className="text-2xl font-bold text-rose-800">Moderación</h4>
            <p className="text-stone-700 mt-2">¡No dejes de comer lo que te gusta, solo aprende a hacerlo con moderación!</p>
        </div>
        <div className="bg-teal-100 p-6 rounded-2xl shadow-lg transform hover:scale-110 transition-transform">
            <div className="text-6xl mb-3">🏃‍♀️💨</div>
            <h4 className="text-2xl font-bold text-teal-800">Actividad</h4>
            <p className="text-stone-700 mt-2">¡Juega, corre y salta! Mantenerse activo es clave para estar fuerte y sano.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-2xl shadow-lg transform hover:rotate-3 transition-transform">
            <div className="text-6xl mb-3">💧</div>
            <h4 className="text-2xl font-bold text-blue-800">Hidratación</h4>
            <p className="text-stone-700 mt-2">¡Beber mucha agua te da energía para seguir jugando todo el día!</p>
        </div>
    </div>
);


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-200 text-stone-800 p-4 sm:p-6 md:p-8">
      <main className="max-w-5xl mx-auto bg-orange-100 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12">
        <Header />
        
        <Section title="1. Introducción" id="introduccion">
          <p className="text-lg leading-relaxed text-stone-700">
            La alimentación es fundamental para mantener una buena salud y prevenir enfermedades. A través de los alimentos, el cuerpo obtiene los nutrientes necesarios para funcionar correctamente. Sin embargo, no todos los alimentos son beneficiosos. Algunos pueden causar daños a la salud si se consumen en exceso. La pirámide alimenticia es una guía que muestra qué alimentos debemos consumir con mayor o menor frecuencia para tener una dieta equilibrada. Este informe explica cuáles son los alimentos saludables y no saludables, basándose en dicha pirámide.
          </p>
        </Section>

        <Section title="2. Desarrollo" id="desarrollo">
            <div id="piramide" className="pt-8 -mt-8">
                <h3 className="text-3xl font-bold text-cyan-800 mb-4">2.1. La pirámide alimenticia</h3>
                <p className="text-lg leading-relaxed mb-6 text-stone-700">
                    La pirámide alimenticia organiza los alimentos por grupos y por la cantidad que se recomienda consumir. En la base están las frutas, verduras, cereales y legumbres; en el centro los lácteos, carnes y huevos; y en la parte superior las grasas, azúcares y alimentos procesados. Esta estructura ayuda a mantener una alimentación equilibrada y prevenir enfermedades.
                </p>
                <FoodPyramid />
            </div>

            <div id="saludables" className="pt-16 mt-8">
                <h3 className="text-3xl font-bold text-green-600 mb-4">2.2. ¡Alimentos Súper Saludables! ✅</h3>
                <p className="text-lg leading-relaxed text-stone-700">
                    Los alimentos saludables aportan nutrientes importantes al organismo y ayudan a mantener la energía y el bienestar. Entre ellos están las frutas, verduras, cereales integrales, legumbres, carnes magras, lácteos bajos en grasa y grasas saludables como la palta y el aceite de oliva. Consumir estos alimentos fortalece el sistema inmunológico y previene enfermedades como la diabetes o la hipertensión.
                </p>
                <FoodTable items={healthyFoodData.items} isHealthy={true} />
            </div>

            <div id="no-saludables" className="pt-16 mt-8">
                <h3 className="text-3xl font-bold text-red-600 mb-4">2.3. Alimentos No Tan Saludables 😟</h3>
                <p className="text-lg leading-relaxed text-stone-700">
                    Los alimentos no saludables contienen mucha azúcar, grasa o sal. Si se comen con frecuencia, pueden causar sobrepeso o enfermedades del corazón. Ejemplos comunes son las comidas rápidas, gaseosas, dulces, snacks envasados y embutidos. Por eso, deben comerse solo de vez en cuando y en pequeñas cantidades.
                </p>
                 <FoodTable items={unhealthyFoodData.items} isHealthy={false} />
            </div>

            <div id="equilibrio" className="pt-16 mt-8">
                <h3 className="text-3xl font-bold text-cyan-800 mb-4">2.4. ¡La Clave es el Equilibrio!</h3>
                <p className="text-lg leading-relaxed mb-6 text-stone-700">
                    Tener una dieta equilibrada no significa dejar de comer lo que nos gusta, sino aprender a hacerlo con moderación. La clave está en combinar alimentos saludables, mantenerse activo y tomar suficiente agua. La pirámide alimenticia nos ayuda a recordar qué debemos priorizar para mantenernos fuertes y sanos.
                </p>
                <BalanceVisual />
            </div>
        </Section>
        
        <Section title="3. Conclusión" id="conclusion">
          <p className="text-lg leading-relaxed text-stone-700">
            Comer de forma saludable es importante para sentirnos bien y evitar enfermedades. La pirámide alimenticia nos enseña a elegir mejor los alimentos que comemos cada día. Si aprendemos a mantener un equilibrio entre los alimentos saludables y los que debemos evitar, podremos disfrutar de una vida más activa y con mejor bienestar.
          </p>
        </Section>

        <Section title="4. ¿Sabías que...?" id="sabias-que" titleClassName="text-purple-600">
            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              ¡Tu comida es como un cofre del tesoro lleno de súper poderes! Descubre algunos de los secretos que guardan los alimentos para ti.
            </p>
            <FunFacts />
        </Section>

        <Section title="5. Anexos" id="anexos">
            <p className="text-lg leading-relaxed text-stone-700">
                Aquí puedes ver un resumen en tabla de los alimentos que hemos aprendido hoy. ¡Es una forma genial de recordar todo!
            </p>
            <AnnexTable 
                title="Tabla 1: Ejemplos de alimentos saludables"
                headers={healthyFoodData.headers}
                items={healthyFoodData.items}
            />
            <AnnexTable 
                title="Tabla 2: Ejemplos de alimentos no saludables"
                headers={unhealthyFoodData.headers}
                items={unhealthyFoodData.items}
            />
        </Section>

        <Section title="6. ¡Descarga y Aprende Más!" id="descargas" titleClassName="text-emerald-600">
            <p className="text-lg leading-relaxed text-stone-700 mb-8">
              ¿Quieres tener esta información siempre contigo? ¡Descarga nuestro material! Aquí tienes todo lo que preparamos para que sigas aprendiendo y comiendo súper sano.
            </p>
            <div className="space-y-8">
                <DocumentDownloader 
                    iconSrc="/icons/document.svg"
                    title="Nuestro Trabajo de Investigación"
                    description="¡Espía nuestro cuaderno de exploradores! Aquí te contamos todo el proceso y los descubrimientos que hicimos para crear esta guía."
                    pdfPath="/pdf/trabajo-investigacion.pdf"
                />
                <DocumentDownloader 
                    iconSrc="/icons/brochure.svg"
                    title="El Tríptico Divertido"
                    description="Un resumen súper colorido y fácil de leer con los mejores consejos. ¡Perfecto para pegarlo en tu refri y recordarlo todos los días!"
                    pdfPath="/pdf/triptico.pdf"
                />
            </div>
        </Section>
        
        <Section title="7. Bibliografía" id="bibliografia">
          <ul className="list-disc list-inside text-lg space-y-2 text-stone-700">
            <li>Enciclopedia Escolar Santillana. La alimentación saludable.</li>
            <li>Wikipedia. Pirámide alimenticia.</li>
            <li>Libro de Ciencias Naturales de Tercero de Primaria.</li>
          </ul>
        </Section>

        <footer className="text-center mt-12 pt-8 border-t-2 border-orange-200">
            <p className="font-bold text-stone-600">® Escuela de Líderes - Bolivia</p>
            <p className="text-sm text-stone-500 mt-1">Apoyando a la niñez boliviana.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
