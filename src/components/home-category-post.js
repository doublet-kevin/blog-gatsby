import React from 'react';

function HomeCategoryPost(props) {
    return (
        <section className="bg-white text-stone-600 border-b-2 border-neutral-800">
            <div className="container flex flex-col gap-8">
                <h3 className="uppercase text-stone-600">Category</h3>
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">

                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <div className="w-full h-44">
                                <img src="https://picsum.photos/1600" alt="article-pic"
                                     className="w-full h-full object-cover"
                                />
                            </div>
                            <div>16 Janvier 2024</div>
                            <h2 className="text-3xl font-bold">Titre de l'article</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur delectus deleniti
                                dolor exercitationem, iusto natus nemo, nostrum quaerat quam quasi reprehenderit sed sint!
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <div className="w-full h-44">
                                <img src="https://picsum.photos/1600" alt="article-pic"
                                     className="w-full h-full object-cover"
                                />
                            </div>
                            <div>16 Janvier 2024</div>
                            <h2 className="text-3xl font-bold">Titre de l'article</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur delectus deleniti
                                dolor exercitationem, iusto natus nemo, nostrum quaerat quam quasi reprehenderit sed sint!
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <div className="w-full h-44">
                                <img src="https://picsum.photos/1600" alt="article-pic"
                                     className="w-full h-full object-cover"
                                />
                            </div>
                            <div>16 Janvier 2024</div>
                            <h2 className="text-3xl font-bold">Titre de l'article</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur delectus deleniti
                                dolor exercitationem, iusto natus nemo, nostrum quaerat quam quasi reprehenderit sed sint!
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <div className="w-full h-44">
                                <img src="https://picsum.photos/1600" alt="article-pic"
                                     className="w-full h-full object-cover"
                                />
                            </div>
                            <div>16 Janvier 2024</div>
                            <h2 className="text-3xl font-bold">Titre de l'article</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur delectus deleniti
                                dolor exercitationem, iusto natus nemo, nostrum quaerat quam quasi reprehenderit sed sint!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeCategoryPost;