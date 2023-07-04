import React from 'react';

function HomeLastBlogpost(props) {
    return (
        <section>
            <div className="container grid grid-cols-2 lg:grid-rows-3 lg:grid-flow-col gap-8 lg:gap-4 lg:max-h-[450px]">
                {/* Main Last Article */}
                <div className="col-span-2 lg:col-span-1 lg:row-span-2 lg:max-h-full max-h-[120px]">
                    <img src="https://picsum.photos/1600" alt="article-pic" className="w-full h-full object-cover"/>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <div>16 Janvier 2024</div>
                    <h2 className="text-3xl">Titre de l'article</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur delectus deleniti
                        dolor exercitationem, iusto natus nemo, nostrum quaerat quam quasi reprehenderit sed sint!
                    </p>
                </div>

                {/* Other Last Article */}


                <div className="col-span-2 g:row-span-1 lg:h-full">
                    <div className="grid grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 flex">
                            <div className="w-full h-42 lg:h-full relative">
                                <img src="https://picsum.photos/1600" alt="article-pic"
                                     className="absolute w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex flex-col gap-2">
                                <div>16 Janvier 2024</div>
                                <h2 className="text-3xl">Titre de l'article</h2>
                                <p className="overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aliquam
                                    consequuntur delectus deleniti
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 g:row-span-1 lg:h-full">
                    <div className="grid grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 flex">
                            <div className="w-full h-42 lg:h-full relative">
                                <img src="https://picsum.photos/1600" alt="article-pic"
                                     className="absolute w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex flex-col gap-2">
                                <div>16 Janvier 2024</div>
                                <h2 className="text-3xl">Titre de l'article</h2>
                                <p className="overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aliquam
                                    consequuntur delectus deleniti
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 g:row-span-1 lg:h-full">
                    <div className="grid grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 flex">
                            <div className="w-full h-42 lg:h-full relative">
                                <img src="https://picsum.photos/1600" alt="article-pic"
                                     className="absolute w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex flex-col gap-2">
                                <div>16 Janvier 2024</div>
                                <h2 className="text-3xl">Titre de l'article</h2>
                                <p className="overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aliquam
                                    consequuntur delectus deleniti
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default HomeLastBlogpost;