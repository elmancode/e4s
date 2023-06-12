import File from "../image/file.png";
import Visual from "../image/visual.png";
import Develop from "../image/develop.png";
import "../style/page/service.scss";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {

  useEffect(()=> {
    AOS.init ({duration: 3000});
  }, [])
  return (
    <div className="service">
      <div className="cover">
        <div className="overlay"></div>

        <div className="content">
          <div className="container">
            <h2 data-aos="fade-right">Our Service</h2>
          </div>
        </div>
      </div>

      <div className="service_teil">
        <div className="container">
          <div className="content">
            <span>Service</span>
            <h3>
              With more than 5 years of experience we can deliver the best
              product.
            </h3>
          </div>

          <div className="service-row">
            <div className="row">
              <div className="row-items">
                <img src={File} alt="" />
                <h3>Məlumatların Toplanması</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi soluta iusto ipsum possimus. Error non placeat a
                  facere quam illum ratione quia neque, harum voluptate
                  consequuntur aperiam minus eaque quod excepturi.
                  <br />
                  <br />
                  Nobis, odio enim cumque aut non autem excepturi, quos itaque
                  recusandae culpa, et blanditiis nisi eos id repellendus
                  aliquid totam dolore error delectus tempore animi? Saepe
                  commodi debitis enim voluptates iusto, cupiditate deserunt
                  eius sunt illo maxime et necessitatibus ab mollitia impedit
                  consequatur molestiae omnis architecto! Fugiat explicabo
                  provident repellat sit, maxime consectetur quam perferendis
                  cum minus ullam est ad impedit laudantium aliquam maiores
                  suscipit totam eveniet aliquid architecto.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="row-items">
                <img src={Visual} alt="" />
                <h3> Məlumat Təhlili və Vizuallaşdırma</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, dolore possimus. Maiores dolorum aliquid rem,
                  nulla error numquam adipisci ut vitae perferendis, amet maxime
                  perspiciatis delectus, sed corporis incidunt? Eius aspernatur
                  porro et quod necessitatibus sapiente numquam placeat debitis
                  culpa exercitationem quibusdam modi natus quis rem molestias
                  deserunt tempore, veritatis iusto ab non laudantium doloribus
                  sed qui laborum. Voluptatum commodi hic veritatis suscipit
                  fugiat explicabo qui, nulla provident totam mollitia nam eaque
                  ratione, cum numquam quidem aspernatur ducimus pariatur vitae
                  illo, molestias sed fuga sint deleniti facere. Veritatis a
                  praesentium sapiente quam libero, provident, vitae nobis nam
                  nostrum quo debitis vero, explicabo facere tempora iusto
                  ducimus possimus laudantium aspernatur expedita optio fuga
                  enim suscipit aliquam. Eaque voluptatibus, quod tenetur eius
                  aliquid accusantium necessitatibus quo odit soluta quis harum
                  laborum amet facere nesciunt aut optio ea iusto totam
                  voluptatem. Eum voluptatum animi, praesentium odio harum
                  assumenda. Neque distinctio facilis omnis dicta assumenda eos
                  velit, magnam accusamus, modi maxime esse numquam, corporis
                  fugiat dolore quasi? Consequatur iure, quo ducimus unde
                  deleniti molestiae hic natus sunt tenetur adipisci, eos, nulla
                  fugiat. Voluptatibus mollitia labore repellat expedita
                  voluptate doloribus magnam! Voluptate ea, magni, quia ratione
                  rerum impedit iure dolores esse dolore nisi minus autem?
                </p>
              </div>
              
            </div>
            <div className="row">
              <div className="row-items">
                <img src={Develop} alt="" />
                <h3> İmkanların Artırılması Xidmətləri</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laborum, corporis earum. At iure rerum laudantium labore
                  similique nulla consequatur culpa id adipisci distinctio
                  placeat sequi provident fugit, repellat voluptates consectetur
                  obcaecati cumque repellendus cupiditate dolorum magni
                  quibusdam natus! Dolorum id voluptatem placeat optio adipisci?
                  Quos perferendis libero blanditiis illum, iusto ipsa unde
                  consequuntur ipsum accusantium, voluptatem praesentium
                  officiis, delectus nihil quas omnis tenetur harum porro sequi!
                  Accusamus eius, veniam consequatur recusandae est vel quis
                  amet iure optio culpa soluta laborum nesciunt debitis tempora
                  doloribus! Delectus vero commodi in culpa tempora facere
                  veritatis tenetur consectetur at saepe ab, perferendis
                  corporis accusamus!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
