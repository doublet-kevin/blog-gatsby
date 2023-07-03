import React from 'react';

function HomeLastBlogpost(props) {
    return (
        <div className="grid lg:grid-rows-3 lg:grid-flow-col gap-4 lg:max-h-[450px]">

            {/* Main Last Article */}
                <div className="lg:row-span-2">
                    <img src="https://picsum.photos/1600" alt="article-pic" className="w-full h-full object-cover"/>
                </div>
                <div className="flex flex-col lg:justify-between">
                    <div>16 Janvier 2024</div>
                    <h2>Titre de l'article</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur delectus deleniti
                        dolor exercitationem, iusto natus nemo, nostrum quaerat quam quasi reprehenderit sed sint!
                    </p>
                </div>

            {/* Other Last Article */}


            <div className="flex flex-col lg:row-span-1">
                <div className="flex h-full">
                    <img src="https://picsum.photos/1600" alt="article-pic" className="w-full h-full object-cover"/>
                    <div className="col-span-2 overflow-hidden">
                        <div>16 Janvier 2024</div>
                        <h2>Titre de l'article</h2>
                        <p className="overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                            consequuntur delectus deleniti
                            dolor exercitationem, iusto natus nemo, nostrum quaerat quam quasi reprehenderit sed sint!
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:row-span-1">
                <div className="flex h-full">
                    <img src="https://picsum.photos/1600" alt="article-pic" className="w-full h-full object-cover"/>
                    <div className="col-span-2 overflow-hidden">
                        <div>16 Janvier 2024</div>
                        <h2>Titre de l'article</h2>
                        <p className="overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                            consequuntur delectus deleniti
                            dolor exercitationem, iusto natus nemo, nostrum quaerat quam quasi reprehenderit sed sint!
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:row-span-1">
                <div className="flex h-full">
                    <img src="https://picsum.photos/1600" alt="article-pic" className="w-full h-full object-cover"/>
                    <div className="lg:col-span-2">
                        <div>16 Janvier 2024</div>
                        <h2>Titre de l'article</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                            consequuntur delectus deleniti
                            dolor exercitationem, iusto natus nemo, nostrum quaerat quam quasi reprehenderit sed sint!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomeLastBlogpost;