import React from "react";
import { Link } from "react-router-dom";
import Unicef from "../image/unicef.png";
import AzStat from "../image/azstat.png";

const MICS = () => {
  return (
    <div className="mics">
      <div className="cover">
        <div className="overlay"></div>

        <div className="content">
          <div className="container">
            <h2>Projects</h2>
          </div>
        </div>
      </div>

      <div className="text">
        <div className="container">
          <h3>MICS Azərbaycan 2023</h3> 
          <p>
            Uşaqların həyatını yaxşılığa doğru dəyişmək, doğru statistik
            məlumatlara çıxışla mümkündür.
          </p>
          <p>
            Azərbaycandakı ana və uşaqların vəziyyətini daha yaxından öyrənmək
            məqsədilə beynəlxalq müqayisəliliyi təmin edən ən böyük məlumat
            mənbəyi Çoxgöstəricili Klaster Sorğusuna (MİCS) 2023-cü ilin
            may-iyul aylarında start veriləcək.
          </p>
          <p>
            Statistik məlumatlar Azərbaycan Respublikasında ana və uşaqların
            sosial rifah vəziyyətini və insan inkişafını işıqlandıracaq,
            Dayanıqlı İnkişaf Məqsədləri ilə müəyyən edilmiş hədəflərə çatmanın
            ölçülməsinə və #hərbiruşaqüçün məlumatlara əsaslanan layihələrin
            hazırlanmasına dəstək göstərəcək.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
         
        </div>

        <div className="partners">
            <div className="container">
          <h2>Partners</h2>
          <img src={Unicef} alt="" />
          <img src={AzStat} alt="" />
          </div>
          </div> 
      </div>
    </div>
  );
};

export default MICS;
