const Recomendations = () => {
    const cities = [

        {
            "name": "Norway",
            "text": "Beautiful landscapes",
            "image": "bg-norway",
            "bgColor":"bg-secondary",
            "txColor":"text-white",
            "darkBg":"bg-gray-700",
            "darkTx":"text-white",
        },
        {
            "name": "New York",
            "text": "Concrete jungle",
            "image": "bg-newYork",
            "bgColor":"bg-white",
            "txColor":"text-tertiary",
            "darkBg":"bg-gray-800",
            "darkTx":"text-white",
        },
        {
            "name": "Yosemite",
            "text": "A break from the world",
            "image": "bg-yosemite",
            "bgColor":"bg-secondary",
            "txColor":"text-white",
            "darkBg":"bg-gray-700",
            "darkTx":"text-white",
        },
        {
            "name": "Seattle",
            "text": "Big City",
            "image": "bg-seattle",
            "bgColor":"bg-white",
            "txColor":"text-tertiary",
            "darkBg":"bg-gray-800",
            "darkTx":"text-white",
        },
        {
            "name": "Switzerland",
            "text": "The mountains",
            "image": "bg-switzerland",
            "bgColor":"bg-white",
            "txColor":"text-tertiary",
            "darkBg":"bg-gray-800",
            "darkTx":"text-white",
        },
        {
            "name": "Sidney",
            "text": "Beautiful landscapes",
            "image": "bg-sydney",
            "bgColor":"bg-secondary",
            "txColor":"text-white",
            "darkBg":"bg-gray-700",
            "darkTx":"text-white",
        },
        {
            "name": "Edinburgh",
            "text": "Most visited",
            "image": "bg-iceland",
            "bgColor":"bg-white",
            "txColor":"text-tertiary",
            "darkBg":"bg-gray-800",
            "darkTx":"text-white",
        },
        {
            "name": "IceLand",
            "text": "The polar cold",
            "image": "bg-iceland",
            "bgColor":"bg-secondary",
            "txColor":"text-white",
            "darkBg":"bg-gray-700",
            "darkTx":"text-white",
        },
    ];

  return (
    <section id="recomendations" className="flex flex-col pt-7">
      <h2 className="text-primary dark:text-white font-regular text-2xl px-5">
        Our Recomendations
      </h2>
      <aside className="w-auto h-54 flex self-center gap-5 overflow-auto px-5 py-7">
        {cities.map(city => (
            <article className= {`h-48 min-w-max flex flex-col ${city.bgColor} dark:${city.darkBg} dark:${city.darkTx} ${city.txColor} rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4`} >
            <picture className={`w-40 h-3/5 ${city.image} bg-cover bg-center rounded-t-lg`}></picture>
            <div className="p-3">
                <h4 className="text-sm font-bold pb-1">{city.name}</h4>
                <p className="text-xs">{city.text}</p>
            </div>
            </article>
        ))}
      </aside>
    </section>
  );
};

export default Recomendations;
