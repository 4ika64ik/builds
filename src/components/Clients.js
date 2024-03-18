import React from 'react';
import kws from '../images/clients/kws.png';
import geps from '../images/clients/geps.png';
import protergia from '../images/clients/protergia.png';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Выгоды работы </h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">с нами</h2>
                    </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <p className="text-blue-900 text-xl">- Персональный эксперт сопровождает на всех этапах получения ВНЖ <br/>

                        - Сбор необходимых документов без вашего участия <br/>

                        - Экономия вашего времени <br/>

                        - Опытные русскоязычные специалисты <br/>

                        - Работаем с 2017 года <br/>

                        - Гарантии прописаны в договоре</p>
                </div>
            </section>
        </div>
    )
}

export default Clients;