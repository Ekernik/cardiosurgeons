import React from "react";
import "./index.scss";

export default function Operation08() {
  return (
    <section className="section__about-op-03 container">
      <h1 className="section__header text-center">Радиочастотая абляция</h1>
      <p className="operation__p">
        Данная страница предназначена для тех, кто испытывает дискомфорт и страх
        от таких симптомов как приступы учащенного сердцебиения, “замирание” в
        груди, неритмичный пульс, одним словом - перебои в работе сердца. Такие
        жалобы характерны для пациентов с наличием аритмии.
      </p>
      <p className="operation__p">
        Какие же диагнозы входят в это понятие? В первую очередь это фибрилляция
        и трепетание предсердий (мерцательная аритмия), а также экстрасистолия
        (желудочковая или предсердная), синдром WPW (Вольфа-Паркинсона-Уайта),
        наджелудоковые и желудочковые тахикардии. При наличии у Вас одного из
        перечисленных заболеваний мы с радостью можем предложить руку помощи.
        Если беспокоят перебои в работе сердца, но точный диагноз по каким-либо
        причинам до сих пор не установлен - обращайтесь за консультацией к
        специалисту-аритмологу для выявления характера аритмии и подбору
        оптимального метода лечения.
      </p>
      <p className="operation__p">
        В нашей клинике проводится полная диагностика и современное
        хирургическое лечение - радиочастотная катетерная аблация (РЧА). Данный
        метод начал широко использоваться еще с 1980-х годов, но тогда о такой
        эффективности как сейчас приходилось только мечтать. Для правильной
        постановки диагноза необходимо оценить электрокардиографию (ЭКГ),
        суточное мониторирование ЭКГ (холтеровское) и эхокардиографию (Эхо
        сердца). Если требуется уточнение диагноза, то в условиях
        рентген-операционной проводится эндокаридальное (внутрисердечное)
        электрофизиологическое исследование - эндо ЭФИ, которое позволяет с
        точностью до 99% установить характер аритмии и приступить к лечению.
      </p>
      <p className="operation__p">
        Так что же собой представляет эндо ЭФИ и РЧА? После проведения
        анестезии, путем прокола в области бедра и подключичной области,
        кардиохирург-аритмолог заводит необходимые инструменты-электроды,
        представляющие собой гибкие провода с наконечником, считывающим
        информацию с внутренней оболочки сердца. Под рентген контролем электроды
        расставляются по схеме в предсердиях (правом или левом) и правом
        желудочке. С помощью специальной компьютерной лаборатории для облегчения
        работы хирурга и для диагностики аритмии выполняют 3D
        модель-реконструкцию камер сердца, по которой можно визуально оценить,
        как проходят электрические сигналы, а также учесть индивидуальные
        анатомические особенности. После установления точного диагноза
        дополнительно проводится так называемый “лечебный” электрод (катетер)
        через вышеописанные доступы. На его дистальную часть размером 3 мм,
        подается высокочастотный ток (радиочастотный в диапазоне 300 кГц – 1
        МГц.) для точечного воздействия на очаг аритмии.
      </p>
      <p className="operation__p">
        После выполнения операции Вы остаетесь в кардиохирургическом отделении,
        где проводится послеоперационное наблюдение. Но не переживайте, срок
        госпитализации в среднем составляет 2-3 дня, после чего пациента
        выписывают домой с рекомендациями. При проведении РЧА здоровые ткани не
        травмируются, а рубцуются, клетки сердца восстанавливаются
        самостоятельно, поэтому частота осложнений в Клинике Высоких Медицинских
        технологий не превышает 1,5%.
      </p>
      <p className="operation__p">
        {" "}
        Восстановительный период после РЧА зависит не только от успешно
        проведенной операции, но и от соблюдения рекомендаций, не забывайте им
        следовать и своевременно посещать кардиолога!
      </p>
    </section>
  );
}
