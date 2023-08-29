import Recomendations from "../Recomedations";

const Main = () => {
    return (
        <main className="dark:bg-gray-900 pb-12">
            <Recomendations />
            <section id="trending" className="px-5">
            <h2 className="text-primary dark:text-white font-regular text-2xl pb-7">Trending Stays</h2>
            <aside className='flex flex-col gap-9 lg:grid lg:grid-cols-2 '>
                <article className='flex lg:col-span-1 row-span-2'>
                <picture className='w-full h-[400px] px-6 py-12 bg-chicago bg-cover bg-center rounded-2xl shadow-custom lg:h-auto'>
                    <div className='text-white w-52 flex flex-col'>
                    <h3 className='text-xl font-bold'>Chicago</h3>
                    <p className='text-base py-3'>2 rooms, bathroom and kitchen.</p>
                    </div>
                </picture>
                </article>
                <article className='flex lg:col-span-1 lg:row-span-1'>
                <picture className='w-full h-[400px] px-6 py-12 bg-LA bg-cover bg-center rounded-2xl shadow-custom'>
                    <div className='text-white w-52 flex flex-col'>
                    <h3 className='text-xl font-bold'>Los Angeles</h3>
                    <p className='text-base py-3'>4 rooms, 3 bathrooms, kitchen and private pool.</p>
                    </div>
                </picture>
                </article>
                <article className='flex lg:col-span-1 lg:row-span-1'>
                <picture className='w-full h-[400px] px-6 py-12 bg-miami bg-cover bg-center rounded-2xl shadow-custom'>
                    <div className='text-white w-52 flex flex-col'>
                    <h3 className='text-xl font-bold'>Miami</h3>
                    <p className='text-base py-3'>3 rooms, 2 bathrooms, kitchen and amazing sea view.</p>
                    </div>
                </picture>
                </article>
                <article className='flex lg:col-span-2 lg:row-span-1'>
                <picture className='w-full h-[400px] px-6 py-12 bg-bali bg-cover bg-center rounded-2xl shadow-custom'>
                    <div className='text-white w-52 flex flex-col'>
                    <h3 className='text-xl font-bold'>Bali</h3>
                    <p className='text-base py-3'>2 rooms, 2 bathrooms, kitchen and private pool.</p>
                    </div>
                </picture>
                </article>
            </aside>
            </section>
            <section id="faq" className="flex flex-col px-7">
            <h2 className="text-primary dark:text-white font-regular text-2xl py-7">FAQs</h2>
            <aside className='flex flex-col gap-2 w-[300px-px-7] max-w-md lg:flex-row lg:max-w-none'>
                <article className=''>
                <h4 className='text-primary dark:text-white text-base font-bold'>Payment Methods</h4>
                <p className='py-3 text-sm text-black dark:text-white'>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
                </article>
                <article className=''>
                <h4 className='text-primary dark:text-white text-base font-bold'>Cancellation Policy</h4>
                <p className='py-3 text-sm text-black dark:text-white'>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
                </article>
                <article className=''>
                <h4 className='text-primary dark:text-white text-base font-bold'>Long Stays</h4>
                <p className='py-3 text-sm text-black dark:text-white'>We accept VISA, MasterCard, American Express, Paypal and Binance We accept VISA, MasterCard, American Express, Paypal and Binance</p>
                </article>
                <article className=''>
                <h4 className='text-primary dark:text-white text-base font-bold'>Cancellation Policy</h4>
                <p className='py-3 text-sm text-black dark:text-white'>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
                </article>
                <article className=''>
                <h4 className='text-primary dark:text-white text-base font-bold'>Cancellation Policy</h4>
                <p className='py-3 text-sm text-black dark:text-white'>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
                </article>
            </aside>
            </section>
        </main>
    );
};

export default Main;