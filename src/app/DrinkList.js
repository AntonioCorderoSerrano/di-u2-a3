function Drink({ name }) {
  let drinkInfo;

  if (name === 'Té') {
    drinkInfo = {
      part: 'hoja',
      caffeine: '15–70 mg/taza',
      antiquity: '4,000+ años',
    };
  } else {
    drinkInfo = {
      part: 'grano',
      caffeine: '80–185 mg/taza',
      antiquity: '1,000+ años',
    };
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Parte de la planta</dt>
        <dd>{drinkInfo.part}</dd>
        <dt>Contenido de cafeína</dt>
        <dd>{drinkInfo.caffeine}</dd>
        <dt>Antigüedad</dt>
        <dd>{drinkInfo.antiquity}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="Té" />
      <Drink name="Café" />
    </div>
  );
}