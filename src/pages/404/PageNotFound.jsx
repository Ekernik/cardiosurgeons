import React from "react";
import lost from "../../assets/svg/lost.svg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./index.scss";

export default function PageNotFound() {
  return (
    <main className="page__page-not-found">
      <Header />
      <div className="container">
        <section className="section__page-not-found">
          <img src={lost} alt="" />
          <h1>404</h1>
          <div>
            <p>Такой страницы не существует</p>
            <p>Предлагаем Вам вернуться на главную страницу сайта</p>
          </div>
          <a href="/">Вернуться на главную</a>
        </section>
      </div>
      <Footer />
    </main>
  );
}
