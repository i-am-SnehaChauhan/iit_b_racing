import Image from "next/image";

const Mission = () => {
  return (
    <div className="mission">
      <h1 className="mission__title">Our Mission</h1>
      <div className="mission__content">
        <div className="mission__left">
          <div className="mission__horizontal__card">
            <Image
              src="/mission1.png"
              alt="mission1"
              width={300}
              height={300}
              className="items-left object-contain"
            />
            <div className="mission__horizontal__card__content">
              <h3 className="mission__card__title">Electrifying Innovation</h3>
              <p>
              Our mission is to revolutionize electric mobility in India, one race at a time, with eco-friendly and high-performance electric cars.
              </p>
            </div>
          </div>
          <div className="mission__horizontal__card">
            <Image
              src="/mission2.png"
              alt="mission1"
              width={300}
              height={300}
            />
            <div className="mission__horizontal__card__content">
              <h3 className="mission__card__title">Driving India's Green Revolution</h3>
              <p>
              Our mission is to revolutionize electric mobility in India, one race at a time, with eco-friendly and high-performance electric cars.
              </p>
            </div>
          </div>
          <div className="mission__horizontal__card">
            <Image
              src="/mission2.png"
              alt="mission1"
              width={300}
              height={300}
            />
            <div className="mission__horizontal__card__content">
              <h3 className="mission__card__title">Engineering the Future</h3>
              <p>
              At our core, we are driven by the vision of engineering a sustainable future. With relentless dedication and innovative thinking. Our mission is to pioneer groundbreaking technologies that not only redefine the automotive industry but also contribute significantly to reducing our carbon footprint. Join us as we embark on this journey towards a greener and brighter tomorrow.
              </p>
            </div>
          </div>
        </div>
        <div className="mission__right">
          <div className="mission__vertical__card">
            <Image
              src="/mission3.png"
              alt="mission1"
              width={350}
              height={300}
            />
            <div className="mission__vertical__card__content">
              <h3 className="mission__card__title">Speeding Towards Excellence</h3>
              <p>
              We're on a mission to achieve excellence in Formula Student Electric racing, showcasing our cutting-edge designs on a global stage.
              </p>
            </div>
          </div>
          <div className="mission__vertical__card">
            <Image
              src="/mission4.png"
              alt="mission1"
              width={350}
              height={300}
            />
            <div className="mission__vertical__card__content">
              <h3 className="mission__card__title">Engineering the Future</h3>
              <p>
              At IIT Bombay Racing, we're on a mission to engineer a brighter, greener future through innovation, dedication, and teamwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;