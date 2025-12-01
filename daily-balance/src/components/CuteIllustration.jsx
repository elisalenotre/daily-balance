import mimioPopi from '../assets/mimio-popi.svg'; 
export default function CuteIllustration() {
  return (
    <div className="hero-illo">
      <img
        src={mimioPopi}
        alt="Mimio et Popi surveillent ta journée."
        className="hero-illo-img"
      />
    </div>
  );
}
