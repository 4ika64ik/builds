import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Отзывы</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl mb-4 h-12">Никита
                                    <p className="text-gray-400 text-sm font-normal">18.12.2023 </p>
                                </h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Я решил получить вид на жительство в Испании через программу Golden Visa, и могу сказать, что процесс был невероятно гладким и эффективным. Благодаря инвестициям в недвижимость, я смог получить ВНЖ всего за 4 недели. Команда экспертов по иммиграции оказала мне отличную поддержку на каждом этапе процесса, от подбора недвижимости до подачи документов. Теперь я с уверенностью могу начать новую главу в своей жизни, наслаждаясь прекрасной погодой, культурой и возможностями, которые предлагает Испания.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/form" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Наши контакты
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl mb-4 h-12">Андрей
                                    <p className="text-gray-400 text-sm font-normal">21.11.2023 </p>
                                </h4>

                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Моя семья и я выбрали Португалию для получения видов на жительство через программу Golden Visa, и мы не могли быть счастливее с результатом. Вложение в недвижимость оказалось не только финансово выгодным, но и позволило нам получить ВНЖ в кратчайшие сроки. Профессионализм и поддержка нашего консультанта по иммиграции сделали весь процесс легким и прозрачным. Теперь мы можем наслаждаться прекрасными пейзажами Португалии и новыми возможностями для развития нашей семьи.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/form" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Наши контакты
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                                
                                {/* <ul className="border-t border-gray-300 py-8 space-y-6">
                                    <li className="flex items-center space-x-2 px-8">
                                        <span className="bg-blue-600 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="text-gray-600 capitalize">Free Setup Guidance</span>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl mb-4 h-12">Станислав
                                <p className="text-gray-400 text-sm font-normal">11.12.2023 </p>
                            </h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Иммиграция в Грецию через программу Golden Visa оказалась для меня и моей семьи правильным выбором. Благодаря инвестициям в недвижимость и качественной поддержке наших агентов по иммиграции, мы смогли получить ВНЖ быстро и без лишних сложностей. Теперь мы можем наслаждаться мягким климатом, культурным наследием и приветливыми людьми Греции, зная, что мы здесь как дома.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/form" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Наши контакты
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl mb-4 h-12">Кирил
                                    <p className="text-gray-400 text-sm font-normal">16.12.2023 </p>
                                </h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Моя жена и я решили выбрать Францию для получения видов на жительство, и мы абсолютно не пожалели о своем выборе. Благодаря программе France Residency Investor Visa и инвестициям в бизнес, мы смогли получить ВНЖ за очень короткий срок. Наш персональный консультант помог нам разобраться во всех деталях процесса и был всегда на связи, чтобы ответить на наши вопросы. Теперь мы наслаждаемся прекрасным стилем жизни Франции и всеми ее преимуществами, включая культуру, кулинарию и доступ к международным возможностям.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/form" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Наши контакты
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;