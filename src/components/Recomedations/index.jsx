const Recomendations = () => {
    return (
        <section id="recomendations" className="pt-7">
            <h2 className="text-primary dark:text-white font-regular text-2xl px-5">Our Recomendations</h2>
            <aside className="w-auto h-54 flex gap-5 overflow-auto  px-5 py-7">
                <article className="h-48 min-w-max flex flex-col bg-secondary dark:bg-gray-700 text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
                <picture className="w-40 h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
                <div className="p-3">
                    <h4 className="text-sm font-bold pb-1" >Norway</h4>
                    <p className="text-xs ">Beautiful landscapes</p>
                </div>
                </article>
                <article className="h-48 min-w-max flex flex-col bg-white text-tertiary dark:bg-gray-800 dark:text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
                <picture className="w-40 h-3/5 bg-norway bg-cover bg-no-repeat rounded-t-lg"></picture>
                <div className="p-3">
                    <h4 className="text-sm font-bold pb-1" >New York</h4>
                    <p className="text-xs ">Concrete jungle</p>
                </div>
                </article>
                <article className="h-48 min-w-max flex flex-col bg-secondary dark:bg-gray-700 text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
                <picture className="w-40 h-3/5 bg-yosemite bg-cover rounded-t-lg"></picture>
                <div className="p-3">
                    <h4 className="text-sm font-bold pb-1" >Yosemite</h4>
                    <p className="text-xs ">A break from the world</p>
                </div>
                </article>
                <article className="h-48 min-w-max flex flex-col bg-white text-tertiary dark:bg-gray-800 dark:text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
                <picture className="w-40 h-3/5 bg-seattle bg-cover rounded-t-lg"></picture>
                <div className="p-3">
                    <h4 className="text-sm font-bold pb-1" >Seattle</h4>
                    <p className="text-xs">Big City</p>
                </div>
                </article>
                <article className="h-48 min-w-max flex flex-col bg-secondary dark:bg-gray-700 text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
                <picture className="w-40 h-3/5 bg-switzerland bg-cover rounded-t-lg"></picture>
                <div className="p-3">
                    <h4 className="text-sm font-bold pb-1" >Switzerland</h4>
                    <p className="text-xs ">The mountains</p>
                </div>
                </article>
                <article className="h-48 min-w-max flex flex-col bg-white text-tertiary dark:bg-gray-800 dark:text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
                <picture className="w-40 h-3/5 bg-sydney bg-cover bg-center rounded-t-lg"></picture>
                <div className="p-3">
                    <h4 className="text-sm font-bold pb-1" >Sidney</h4>
                    <p className="text-xs ">Beautiful landscapes</p>
                </div>
                </article>
                <article className="h-48 min-w-max flex flex-col bg-secondary dark:bg-gray-700 text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
                <picture className="w-40 h-3/5 bg-iceland bg-cover rounded-t-lg"></picture>
                <div className="p-3">
                    <h4 className="text-sm font-bold pb-1" >Edinburgh</h4>
                    <p className="text-xs">Most visited</p>
                </div>
                </article>
                <article className="h-48 min-w-max flex flex-col bg-white text-tertiary dark:bg-gray-800 dark:text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
                <picture className="w-40 h-3/5 bg-iceland bg-cover rounded-t-lg"></picture>
                <div className="p-3">
                    <h4 className="text-sm font-bold pb-1" >IceLand</h4>
                    <p className="text-xs ">The polar cold</p>
                </div>
                </article>
            </aside>
        </section>
    );
};

export default Recomendations;