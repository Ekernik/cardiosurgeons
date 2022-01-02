import Image from "next/image";
import doctors_2 from "@/public/static/svg/doctors_2.svg";
import doctors_3 from "@/public/static/svg/doctors_3.svg";
import doctors_4 from "@/public/static/svg/doctors_4.svg";

export default function Advantages() {
  return (
    <section className="advantages-section">
      <div className="container flex">
        <div className="adv__item">
          <div className="adv__img">
            <Image src={doctors_2} alt="" height={70} width={70} />
          </div>
          <div>
            <h4 className="adv__title">3800</h4>
            <p className="adv__subtitle">
              операций кардиохирургического профиля
            </p>
          </div>
        </div>
        <div className="adv__item">
          <div className="adv__img">
            <Image src={doctors_3} alt="" height={70} width={70} />
          </div>
          <div>
            <h4 className="adv__title">900+</h4>
            <p className="adv__subtitle">операций на открытом сердце</p>
          </div>
        </div>
        <div className="adv__item">
          <div className="adv__img">
            <Image src={doctors_4} alt="" height={70} width={70} />
          </div>
          <div>
            <h4 className="adv__title">1600</h4>
            <p className="adv__subtitle">рентгенхирургических вмешательств</p>
          </div>
        </div>
      </div>
    </section>
  );
}
